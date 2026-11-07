---
allow_fake_animation_claims: false
allow_flat_color_scene_fallback: false
allow_robotic_tts: false
allow_text_only_scenes: false
aspect_ratio: "16:9"
audio_bitrate: 192k
audio_channels: 2
audio_codec: aac
audio_loudness_target: "-16 LUFS"
audio_sample_rate: 48000
description: |
  Creates premium, cinematic, professionally narrated explainer
  documentaries through the /full-visual command. Includes verified
  research, creative direction, original visual generation, real
  animation, neural narration, sound design, captions, professional
  editing, and strict quality assurance.
fps: 30
max_duration: 75
min_duration: 55
name: full-visual-explainer-video
output_dir: /home/droid/stuffs/output
production_mode: strict
resolution: 1920x1080
skills_dir: /home/droid/stuffs/skills
target_duration: 60
version: 4.0.0-openmontage
video_codec: libx264
video_crf: 18
work_dir: /home/droid/stuffs/work
remotion_project: /home/droid/stuffs/remotion
workspace: /home/droid/stuffs
---

# FULL VISUAL EXPLAINER — MASTER ORCHESTRATOR

This skill owns research, creative direction, narrative, visual planning,
semantic acceptance, and delegation. It does not execute providers,
downloads, generation, rendering, or mechanical QA. For those, it
delegates to the production executor at
`output/full-visual-explainer-video-SKILL.md` under the contract in
section 10.

## 0. ROLE AND RESPONSIBILITY

This skill is the **MASTER ORCHESTRATOR**. Owns:
- Environment discovery report review and provider registry approval.
- Research and factual accuracy.
- Narration and script.
- Visual bible, storyboard, scene-asset plan.
- Delegation manifest and checkpoint review.
- Semantic acceptance of execution results.
- Final approval or repair dispatch.

Does NOT own provider implementation, API calls, asset download,
rendering, or mechanical QA execution.

## 1. NON-NEGOTIABLE QUALITY POLICY

Never replace visuals with solid-color backgrounds; never use text-only
scenes as primary storytelling; never use robotic TTS; never downgrade
narration; never claim animation that was not rendered; never declare
success because FFmpeg succeeded. A failed production is preferable to
a falsely successful one.

## 2. ENVIRONMENT DISCOVERY (APPROVAL ONLY)

Review the executor's `environment-report.md` and `provider-registry.json`.
Approve available providers and adapters. Do not invent capabilities,
prices, limits, voices, or code integrations. Record unknowns as
unavailable.

## 3. RESEARCH AND FACTUAL ACCURACY

Research before narration. Save `research/research.md` and
`research/sources.md`. Verify mechanisms for scientific/anatomical
subjects. Do not invent facts.

## 4. NARRATIVE DEVELOPMENT

Default runtime ~60s. Target ~125-150 words. Acts: hook 0-8s, context
8-20s, revelation 20-48s, payoff 48-60s. Natural spoken English, no
filler.

## 5. VISUAL DIRECTOR

Produce a visual bible and storyboard of 8-12 scenes. Each scene must
specify scene_id, narration_span, visual_job, asset_category, and
relevance_test ("This image shows X because Y"). Reject assets that
cannot pass relevance_test. Choose asset categories by semantic fit, not
mandated counts; reuse of a cloud image requires explicit justification.

## 6. SCENE-LEVEL ASSET PLAN

Save `preproduction/scene-asset-plan.json` per the schema used by the
executor (preferred/alternative asset type, queries, visual requirements,
bindings). The executor owns mechanical acquisition; this plan is the
input contract.

## 7. SEMANTIC VISUAL SCORING (CANONICAL MODEL)

Score actual visual content, not filenames, tags, or keywords:

- Subject: 25
- Action: 20
- Object: 15
- Context/environment: 15
- Narrative contribution: 15
- Visual clarity: 10

Total 100. Thresholds:
- 90-100: accept.
- 80-89: accept with review.
- Below 80: reject; search again or reject outright.

No cinematic-quality score may compensate for semantic irrelevance.
Reject repeated backgrounds, particles, grids, futuristic backgrounds,
unnecessary charts, repetitive zoom, generic stock, and keyword-only
matches. This is the only scoring model; the executor must apply these
values and thresholds without modification.

## 8. MODULAR STAGE OVERSIGHT

Coordinate the executor's 11 stages via `production-state.json`. Keep
single source of truth. Skip completed/validated stages on resume;
bounded retries; independent scenes concurrent where safe; append-only
logs. Detailed stage contract, checkpoint schema, QA thresholds, and
rendering commands live in the executor document to avoid duplicate
definitions.

## 9. FINAL VERIFICATION (SEMANTIC)

Inspect rendered frames against narration, storyboard, visual spec, and
bindings. Record `qa/qa-report.json` per-scene verdicts and repair
targets (stage + scene ids). If no frame inspection is available,
record the limitation; do not claim verification. Reject semantic
mismatches even when technically valid. Preserve unaffected scenes
during repair.

## 10. PRODUCTION CONTRACT (MASTER TO EXECUTOR)

Master supplies:
- Topic and slug.
- Research and sources.
- Narration script and phrase timings.
- Visual bible.
- Storyboard with scene bindings.
- Scene-asset plan and visual requirements.
- Timing and continuity constraints.
- Approval/rework decisions.
- Canonical semantic scoring model (section 7).
- Regression test topic and expected progression when applicable.

Executor returns:
- Asset registry with scores and provenance.
- Selected asset paths and scene render paths.
- Timeline manifest (`assembled-timeline.json`).
- QA results and repair targets (`qa/qa-report.json`).
- Failed operations and known limitations.
- Production report.

The master verifies execution results before completion. The executor
must not alter creative direction or narration.

## 11. REGRESSION TEST (ABSOLUTE PROBABILITY PERCEPTION)

Topic: "Absolute Probability Perception: The ability to see a guaranteed
successful outcome." Expected visual progression must bind lottery
narration to concrete lottery imagery, probability displays, human
actions, and consequences; no abstract animation substituting for
concrete objects; no quota-filler graphics; inspect rendered video.

## 12. HONEST REPORTING

Report modified files, reused capabilities, conflicts removed, semantic
scoring results, frame inspection results, regression results, and
limitations. No documentation-only success claims.

END OF SKILL
