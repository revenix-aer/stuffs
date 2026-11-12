# stuffs

A small workspace for producing **premium, full-visual explainer documentaries** plus the helper tools that support that pipeline.

## What's inside

- `skills/full-visual-explainer-video/` — the `full-visual` skill definition (SKILL.md). Strict quality policy: real generated imagery, neural narration (Kokoro), motion/animation via Remotion, captions, sound design, QA. No slideshow fallbacks.
- `remotion/` — Remotion/React project for composing and rendering the final video (1920×1080, 30 fps).
- `horde_image_gen.py` — AI Horde (Haidra-Org) async image generation client. Anonymous key works out of the box; set `HORDE_API_KEY` for higher priority. Outputs PNGs under `output/horde/`.
- `kokoro_tts.py` — Kokoro (ONNX) neural TTS for narration, resampled to 48 kHz mono via ffmpeg. Writes a WAV and a timings JSON under `output/narration/`.
- `output/` — generated artifacts. Media is gitignored; markdown and JSON stay.
- `work.txt.pointer` — points at the ephemeral work dir (`/dev/shm/stuffs-work` on the original machine). `work/` itself is gitignored.

## Requirements

- Python 3.11+
- `pip install -r requirements.txt` (`requests`, `numpy`)
- Kokoro ONNX runtime, plus the model and voices. Set `KOKORO_MODEL` and `KOKORO_VOICES`, put the files in `models/`, or keep the original `/dev/shm/kokoro-models/` layout. If the package is not on `PYTHONPATH`, set `KOKORO_PYTHONPATH` (or use `/dev/shm/kokoro-packages`).
- Node.js + npm for Remotion
- `ffmpeg` / `ffprobe`

## Quick usage

Generate an image with AI Horde:

```bash
python3 horde_image_gen.py "a lush rainforest canopy" --width 1024 --height 576
```

Synthesize narration with Kokoro:

```bash
python3 kokoro_tts.py \
  --text "Every part of the land on Earth has trees." \
  --voice am_adam --speed 1.0
```

Render a Remotion composition:

```bash
cd remotion && npm install && npx remotion render src/index.ts FullVisual out.mp4
```

## Notes

- Generated video, audio, and images under `output/` are not committed. They used to be, including the trees explainer. Older commits still contain those blobs; this only removes them from the current tree.
- No secrets are committed. The Horde anonymous key is the public `0000000000` fallback.

## License

Personal workspace; add a license if you plan to distribute.
