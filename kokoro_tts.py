#!/usr/bin/env python3
"""Kokoro (ONNX) neural TTS for narration.

Looks for the model in this order:
  1. KOKORO_MODEL and KOKORO_VOICES
  2. models/ next to this script
  3. /dev/shm/kokoro-models/ (the original machine layout)

Optional extra import path: KOKORO_PYTHONPATH, or /dev/shm/kokoro-packages
if that directory exists.
"""
import argparse
import json
import os
import re
import sys
import wave
from pathlib import Path
import subprocess

REPO_ROOT = Path(__file__).resolve().parent
DEFAULT_OUTDIR = REPO_ROOT / "output" / "narration"
DEFAULT_VOICE = "am_adam"
SHM_PACKAGES = Path("/dev/shm/kokoro-packages")
SHM_MODEL = Path("/dev/shm/kokoro-models/kokoro-v1.0.int8.onnx")
SHM_VOICES = Path("/dev/shm/kokoro-models/voices-v1.0.bin")


def setup_path():
    extra = os.environ.get("KOKORO_PYTHONPATH")
    if extra:
        candidate = extra
    elif SHM_PACKAGES.is_dir():
        candidate = str(SHM_PACKAGES)
    else:
        return
    if candidate not in sys.path:
        sys.path.insert(0, candidate)


def resolve_asset(env_name, repo_relative, shm_path, label):
    env_value = os.environ.get(env_name)
    if env_value:
        path = Path(env_value)
        if path.is_file():
            return path
        raise FileNotFoundError(f"{label} from {env_name} is missing: {path}")
    repo_path = REPO_ROOT / repo_relative
    if repo_path.is_file():
        return repo_path
    if shm_path.is_file():
        return shm_path
    raise FileNotFoundError(
        f"{label} missing. Set {env_name}, or place it at {repo_path}."
    )


def split_sentences(text):
    # Split into spoken phrases while preserving abbreviations reasonably.
    parts = re.split(r"(?<=[.!?;:])\s+", text.strip())
    return [p.strip() for p in parts if p.strip()]


def synthesize(text, voice=DEFAULT_VOICE, speed=1.0):
    setup_path()
    from kokoro_onnx import Kokoro

    model_path = resolve_asset(
        "KOKORO_MODEL", "models/kokoro-v1.0.int8.onnx", SHM_MODEL, "Kokoro model"
    )
    voices_path = resolve_asset(
        "KOKORO_VOICES", "models/voices-v1.0.bin", SHM_VOICES, "Kokoro voices"
    )
    kokoro = Kokoro(str(model_path), str(voices_path))
    phrases = split_sentences(text)
    segment_samples = []
    sample_rate = None
    for phrase in phrases:
        samples, sr = kokoro.create(phrase, voice=voice, speed=speed, lang="en-us")
        sample_rate = int(sr)
        segment_samples.append((phrase, list(samples)))
    pause_len = int(sample_rate * 0.12) if sample_rate else 0
    assembled = []
    timing = []
    cursor = 0.0
    for index, (phrase, samples) in enumerate(segment_samples):
        start = cursor
        assembled.extend(samples)
        duration = len(samples) / sample_rate
        cursor += duration
        timing.append(
            {
                "index": index,
                "text": phrase,
                "start_seconds": round(start, 3),
                "end_seconds": round(cursor, 3),
                "duration_seconds": round(duration, 3),
            }
        )
        if index < len(segment_samples) - 1 and pause_len:
            assembled.extend([0.0] * pause_len)
            cursor += pause_len / sample_rate
            timing[-1]["pause_after_seconds"] = round(pause_len / sample_rate, 3)
    return assembled, int(sample_rate), timing


def write_wav(path, samples, sample_rate, resample_to_48k=True, normalize=True):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    import numpy as np

    arr = np.asarray(samples, dtype="float32")
    arr = np.clip(arr, -1.0, 1.0)
    pcm16 = (arr * 32767.0).astype("int16")
    if path.suffix.lower() != ".wav":
        path = path.with_suffix(".wav")
    tmp = path.with_suffix(".raw.wav")
    with wave.open(str(tmp), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(sample_rate)
        w.writeframes(pcm16.tobytes())

    target_rate = 48000 if resample_to_48k else int(sample_rate)
    cmd = ["ffmpeg", "-y", "-loglevel", "error", "-i", str(tmp)]
    if normalize:
        cmd += ["-af", "loudnorm=I=-16:TP=-1:LRA=11"]
    cmd += ["-ar", str(target_rate), "-ac", "1", str(path)]
    subprocess.run(cmd, check=True)
    try:
        tmp.unlink()
    except FileNotFoundError:
        pass
    return path


def main():
    ap = argparse.ArgumentParser(description="Kokoro neural TTS")
    ap.add_argument("--text", default="")
    ap.add_argument("--text-file", default="")
    ap.add_argument("--voice", default=DEFAULT_VOICE)
    ap.add_argument("--speed", type=float, default=1.0)
    ap.add_argument("--outdir", default=str(DEFAULT_OUTDIR))
    ap.add_argument("--filename", default="narration.wav")
    ap.add_argument("--no-resample", action="store_true")
    args = ap.parse_args()

    text = args.text
    if args.text_file:
        text = Path(args.text_file).read_text(encoding="utf-8")
    if not text.strip():
        raise SystemExit("No text provided (--text or --text-file).")

    print(f"synthesizing with voice={args.voice} speed={args.speed}")
    samples, sr, timing = synthesize(text, voice=args.voice, speed=args.speed)
    out_path = Path(args.outdir) / args.filename
    final = write_wav(out_path, samples, sr, resample_to_48k=not args.no_resample)
    timing_path = final.with_suffix(".timings.json")
    timing_path.write_text(
        json.dumps(
            {
                "audio_file": str(final),
                "sample_rate": sr,
                "segments": timing,
            },
            indent=2,
        ),
        encoding="utf-8",
    )
    print(f"saved: {final}")
    print(f"timings: {timing_path}")
    subprocess.run(
        [
            "ffprobe",
            "-v",
            "error",
            "-show_entries",
            "stream=codec_name,sample_rate,channels",
            "-of",
            "default=noprint_wrappers=1",
            str(final),
        ]
    )


if __name__ == "__main__":
    raise SystemExit(main())
