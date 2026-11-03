# stuffs

A small workspace for producing **premium, full-visual explainer documentaries** plus the helper tools that support that pipeline. Everything here is oriented around one shipped output: a 60-second 1080p explainer, `output/explainer-every-part-of-the-land-on-earth-has-trees.mp4`.

## What's inside

- `skills/full-visual-explainer-video/` — the `full-visual` skill definition (SKILL.md). Strict quality policy: real generated imagery, neural narration (Kokoro), motion/animation via Remotion, captions, sound design, QA. No slideshow fallbacks.
- `remotion/` — Remotion/React project for composing and rendering the final video (1920×1080, 30 fps).
- `horde_image_gen.py` — AI Horde (Haidra-Org) async image generation client. Anonymous key works out of the box; outputs PNGs.
- `kokoro_tts.py` — Kokoro (ONNX) neural TTS for narration, resampled to 48 kHz mono via ffmpeg.
- `output/` — generated artifacts (video, narration WAVs, generated images, skill snapshot).
- `work/` — symlink to `/dev/shm/stuffs-work` for ephemeral working files.

## Requirements

- Python 3.11+
- `requests`, `numpy`, Kokoro packages installed (see paths in `kokoro_tts.py`)
- Node.js + npm for Remotion
- `ffmpeg` / `ffprobe`

## Quick usage

Generate an image with AI Horde:
```bash
python3 horde_image_gen.py "a lush rainforest canopy" --width 1024 --height 576
```

Synthesize narration with Kokoro:
```bash
PYTHONPATH=/dev/shm/kokoro-packages python3 kokoro_tts.py \
  --text "Every part of the land on Earth has trees..." \
  --voice am_adam --speed 1.0
```

Render a Remotion composition:
```bash
cd remotion && npm install && npx remotion render src/index.ts FullVisual out.mp4
```

## Output

- `output/explainer-every-part-of-the-land-on-earth-has-trees.mp4` — final rendered explainer (≈54 MB).

## Notes

- `work/` and generated media can be large; consider Git LFS if you version the video.
- No secrets are committed.

## License

Personal workspace; add a license if you plan to distribute.