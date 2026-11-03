#!/usr/bin/env python3
"""AI Horde (Haidra-Org) image generator client.

Submits a generation job to the public AI Horde async API, polls for
completion, and downloads the resulting image(s) as PNG files.

API docs: https://aihorde.net/api  (see /api/v2/generate/async)
Anonymous key "0000000000" works but runs at very low priority.
"""
import argparse
import base64
import json
import sys
import time
from pathlib import Path
from urllib.parse import urlparse

import requests

API_BASE = "https://aihorde.net/api/v2"
ANON_KEY = "0000000000"
CLIENT_AGENT = "stuffs-horde-client:1.0:user"


def submit(prompt, params, nsfw=False, models=None, trusted=False, timeout=30):
    body = {
        "prompt": prompt,
        "params": params,
        "nsfw": bool(nsfw),
        "censor_nsfw": True,
        "trusted_workers": bool(trusted),
        "slow_workers": True,
        "r2": True,
    }
    if models:
        body["models"] = [m.strip() for m in models.split(",") if m.strip()]
    headers = {"apikey": ANON_KEY, "Client-Agent": CLIENT_AGENT,
               "Content-Type": "application/json"}
    r = requests.post(API_BASE + "/generate/async", headers=headers,
                      json=body, timeout=timeout)
    r.raise_for_status()
    data = r.json()
    if "id" not in data:
        raise RuntimeError(f"submit failed: {data}")
    return data["id"]


def poll(job_id, overall_timeout=300, interval=3):
    deadline = time.monotonic() + overall_timeout
    headers = {"Client-Agent": CLIENT_AGENT}
    while time.monotonic() < deadline:
        r = requests.get(API_BASE + f"/generate/status/{job_id}",
                         headers=headers, timeout=30)
        r.raise_for_status()
        data = r.json()
        done = bool(data.get("done"))
        faulted = bool(data.get("faulted"))
        queue_pos = data.get("queue_position", "?")
        eta = data.get("eta", "?")
        finished = len(data.get("generations", []) or [])
        print(f"  status: done={done} faulted={faulted} "
              f"queue={queue_pos} eta={eta}s finished={finished}", flush=True)
        if faulted:
            raise RuntimeError(f"job faulted: {data.get('message') or data}")
        if done:
            return data
        time.sleep(interval)
    raise TimeoutError(f"job {job_id} did not finish within {overall_timeout}s")


def _detect_ext(content):
    if content.startswith(b"\x89PNG\r\n\x1a\n"):
        return ".png"
    if content[:4] == b"RIFF" and content[8:12] == b"WEBP":
        return ".webp"
    if content[:3] == b"\xff\xd8\xff":
        return ".jpg"
    return None


def _to_png(content, path):
    """Ensure the saved asset is a PNG (converting via ffmpeg if needed)."""
    if _detect_ext(content) == ".png":
        path.write_bytes(content)
        return path
    # convert any other supported format to PNG
    tmp = path.with_suffix(".raw")
    tmp.write_bytes(content)
    try:
        import subprocess
        subprocess.run(
            ["ffmpeg", "-y", "-loglevel", "error", "-i", str(tmp), str(path)],
            check=True, capture_output=True,
        )
    finally:
        try:
            tmp.unlink()
        except FileNotFoundError:
            pass
    return path


def save_image(img_value, outdir, name):
    outdir.mkdir(parents=True, exist_ok=True)
    if isinstance(img_value, str) and img_value.startswith("http"):
        r = requests.get(img_value, timeout=60)
        r.raise_for_status()
        content = r.content
    else:
        # base64 (possibly data: URI)
        s = img_value
        if "," in s and s.startswith("data:"):
            s = s.split(",", 1)[1]
        content = base64.b64decode(s)
    # normalise filename extension to .png
    stem = Path(name).stem
    path = outdir / (stem + ".png")
    return _to_png(content, path)


def make_name(index, prompt_slug):
    safe = "".join(c if c.isalnum() or c in "-_" else "_" for c in prompt_slug)
    safe = safe[:40].strip("_") or "image"
    return f"{safe}-{index:02d}.png"


def main():
    ap = argparse.ArgumentParser(description="Generate images with AI Horde")
    ap.add_argument("prompt")
    ap.add_argument("--negative", default="")
    ap.add_argument("--width", type=int, default=1024)
    ap.add_argument("--height", type=int, default=576)
    ap.add_argument("--steps", type=int, default=30)
    ap.add_argument("--cfg", type=float, default=7.5)
    ap.add_argument("--sampler", default="k_euler_a")
    ap.add_argument("--raw-prompt", action="store_true",
                    help="Disable automatic cinematic prompt enhancement.")
    ap.add_argument("--models", default="", help="comma-separated model names")
    ap.add_argument("--outdir", default="/home/droid/stuffs/output/horde")
    ap.add_argument("--nsfw", action="store_true")
    ap.add_argument("--timeout", type=int, default=300)
    args = ap.parse_args()

    # dimensions must be multiples of 64 for SD
    w = (args.width // 64) * 64
    h = (args.height // 64) * 64
    prompt = args.prompt
    if not args.raw_prompt:
        quality_suffix = (
            "cinematic documentary photography, scene-specific composition, "
            "controlled lighting, color graded, high detail, natural "
            "materials, 16:9 framing, no text, no captions, no watermark"
        )
        if "cinematic documentary photography" not in prompt:
            prompt = prompt.rstrip() + ", " + quality_suffix
    negative = args.negative or (
        "text, captions, watermark, logo, low resolution, blurry, "
        "distorted anatomy, extra limbs, cartoon, duplicate objects, "
        "generic unrelated scene"
    )
    params = {
        "n": 1,
        "width": max(64, w),
        "height": max(64, h),
        "steps": args.steps,
        "cfg_scale": args.cfg,
        "sampler_name": args.sampler,
    }
    params["negative_prompt"] = negative

    print(f"submitting prompt: {prompt!r}")
    job_id = submit(prompt, params, nsfw=args.nsfw, models=args.models)
    print(f"job id: {job_id}")

    data = poll(job_id, overall_timeout=args.timeout)
    gens = data.get("generations", []) or []
    if not gens:
        print("no generations returned")
        sys.exit(1)

    outdir = Path(args.outdir)
    slug = args.prompt.split()[0] if args.prompt.split() else "img"
    saved = []
    for i, g in enumerate(gens):
        img = g.get("img")
        if not img:
            print(f"generation {i} has no image payload: {g}")
            continue
        name = make_name(i, slug)
        path = save_image(img, outdir, name)
        saved.append(path)
        print(f"saved: {path} (model={g.get('model','?')}, "
              f"seed={g.get('seed','?')})")

    print(f"\ntotal saved: {len(saved)}")
    for p in saved:
        print(str(p))


if __name__ == "__main__":
    raise SystemExit(main())
PY
chmod +x /home/droid/stuffs/horde_image_gen.py