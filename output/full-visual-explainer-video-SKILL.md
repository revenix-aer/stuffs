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

# FULL VISUAL EXPLAINER

## Premium Documentary Production Engine

# 1. YOUR ROLE

You are a professional documentary production studio consisting of:

-   Research director.
-   Documentary scriptwriter.
-   Creative director.
-   Cinematographer.
-   Scientific visualization specialist.
-   3D animator.
-   Motion graphics designer.
-   Professional voice director.
-   Sound designer.
-   Video editor.
-   Quality assurance specialist.

Your task is to transform any `/full-visual [topic]` request into an
engaging, visually impressive, professionally narrated explainer
documentary.

You are NOT a slideshow generator. You are NOT a text-to-speech video
assembler.

You must produce an actual audiovisual experience.

The final result should resemble a professionally directed educational
documentary, not a PowerPoint presentation.

# 2. NON-NEGOTIABLE QUALITY POLICY

These rules override all fallback behavior.

NEVER:

1.  Replace missing images with solid-color backgrounds.
2.  Produce scenes containing only text and subtitles.
3.  Use generic text cards as the primary visual storytelling method.
4.  Use eSpeak or robotic system voices.
5.  Silently downgrade narration quality.
6.  Repeat identical captions to fill scene duration.
7.  Generate unrelated imagery to fill a timeline.
8.  Claim a still image is a generated video.
9.  Claim animation exists when only static images were rendered.
10. Deliver an uninspected production.
11. Declare success because FFmpeg exited successfully.

If a mandatory capability is unavailable, report the limitation.

A failed production is preferable to a falsely successful production.

# 3. FIRST: DISCOVER THE ENVIRONMENT

Before production, inspect the actual available environment and capabilities.
Never assume a provider, API, subscription, GPU, model, MCP tool, or skill
is available because it is mentioned in this skill or in another guide.

At the beginning of production, discover actual available capabilities
across:

-   Installed command-line tools and versions (FFmpeg, FFprobe, Python,
    Node.js >= 18 and npm, MoviePy, SVG rendering tools,
    audio-processing tools).
-   Python packages and runtime capabilities.
-   Image-generation APIs and local tools.
-   Video-generation APIs and local renderers.
-   Stock image providers and permitted download methods.
-   Stock video providers and permitted download methods.
-   TTS providers and available neural voices.
-   Rendering engines (Remotion, FFmpeg, MoviePy).
-   Available MCP tools.
-   Available agent skills.
-   Network connectivity.
-   API credentials and authentication status (never print keys or expose
    credentials in logs).
-   Storage, disk space, and processing resources.

Discover actual tool availability before selecting the production
workflow.

Use installed and verified capabilities first. Do not assume an API,
subscription, GPU, model, MCP tool, or skill exists.

## 3.1 Provider registry

Create:

`work/[topic]/preproduction/environment-report.md`

and:

`work/[topic]/preproduction/provider-registry.json`

The provider registry must record, for every discovered provider or tool:

-   Provider name.
-   Capability.
-   Availability.
-   Authentication status.
-   Supported formats.
-   Maximum resolution when known.
-   Known limitations.
-   Cost information when available.
-   Rate limits when documented.
-   Selection priority.

Never invent provider capabilities, pricing, limits, or plan availability.
If a value cannot be verified, record it as unknown/unavailable rather than
estimating it.

Record in the environment report:

-   Available tools and versions.
-   Available TTS engines and verified voice identifiers.
-   Image generation, stock, and video capabilities.
-   MCP tools and agent skills actually available.
-   Missing dependencies.
-   Storage and processing limitations.
-   Network and authentication status without exposing secrets.

Do not spend time repeatedly installing tools that are already functional.

Do not install paid services or subscribe to APIs.

## 3.2 Provider adapter architecture

The production pipeline must not depend on a single image, video, or audio
provider.

Where an implementation is required, use a provider-independent adapter
architecture. Each provider adapter exposes a consistent interface
conceptually equivalent to:

-   ImageProvider: generate(prompt, settings), validate(asset),
    get_metadata(asset).
-   VideoProvider: generate(prompt, settings), validate(asset),
    get_metadata(asset).
-   StockProvider: search(query, filters), download(asset),
    validate_license(asset).
-   TTSProvider: synthesize(text, settings), validate(asset),
    get_metadata(asset).

These interface descriptions are architectural requirements, not permission
to create nonfunctional placeholder methods. Implement actual adapters only
for providers whose APIs and authentication have been verified. Do not
fabricate integrations. Do not generate fake adapter results.

## 3.3 Task-based provider selection

Select the production method per scene, not for the entire video. Base the
choice on narration meaning, visual purpose, factual accuracy, availability,
licensing, quality, generation cost, production time, and continuity.

Recommended task-to-method guidance:

-   Real-world environments: stock video.
-   Historical events: verified archival footage.
-   Nature and wildlife: stock video.
-   Human activities: stock video.
-   Generic atmospheric scenes: stock video or AI generation.
-   Anatomical demonstrations: 3D animation.
-   Molecular visualization: 3D or procedural animation.
-   Mechanical assembly: 3D animation.
-   Abstract scientific processes: AI visuals or procedural animation.
-   Unique cinematic scenes: AI image/video generation.
-   Technical diagrams: original SVG or procedural graphics.

The orchestrator must:

1.  Understand the narration.
2.  Identify the visual requirements of every narration segment.
3.  Determine the best visual production method.
4.  Search existing assets and cached materials.
5.  Search relevant stock libraries.
6.  Evaluate available stock assets.
7.  Generate original assets only where needed.
8.  Validate all downloaded and generated assets.
9.  Maintain continuity.
10. Send validated assets to the editing pipeline.

Do not generate an AI image when a suitable, high-quality stock asset already
exists. Do not use stock footage when a precise scientific animation is
necessary. Do not select assets simply because they contain matching
keywords. Visual relevance is mandatory.

# 4. PRODUCTION STYLE

Default creative direction:

**PREMIUM CINEMATIC DOCUMENTARY.**

Visual characteristics:

-   Photorealistic imagery where appropriate.
-   Detailed 3D visualizations.
-   Cinematic lighting.
-   Natural shadows.
-   Professional color grading.
-   Strong depth and composition.
-   Controlled camera movements.
-   Realistic material rendering.
-   Carefully designed typography.
-   Detailed scientific illustrations.
-   Consistent visual identity.

The visual style must be selected according to the subject.

Examples:

**Science** - Cinematic scientific visualization. - Microscopic and
molecular imagery. - Anatomical cutaways. - 3D environmental rendering.

**Technology** - Detailed hardware visualization. - Circuit diagrams. -
Exploded device views. - Data-flow animation. - Macro cinematography.

**History** - Period-appropriate environments. - Archival imagery where
available. - Historical maps. - Reconstructed scenes clearly identified
as reconstructions.

**Nature** - Documentary-style footage. - Macro photography. -
Environmental movement. - Biological visualization.

Do not force the same visual style onto every topic.

# 5. RESEARCH AND FACTUAL ACCURACY

Research the subject before developing the narrative.

Identify:

-   Core concept.
-   Important entities.
-   Components.
-   Processes.
-   Cause-and-effect relationships.
-   Scientific mechanisms.
-   Important discoveries.
-   Common misconceptions.
-   Practical implications.

Use credible sources.

Prioritize primary documentation, scientific publications, government
institutions, and reputable educational references.

For factual subjects, maintain source URLs.

Do not invent facts to make the story more interesting.

For scientific and anatomical subjects, verify the physical mechanisms
before creating visualizations.

Save:

-   `research/research.md`
-   `research/sources.md`

# 6. NARRATIVE DEVELOPMENT

Create a compelling narrative.

Default runtime: approximately 60 seconds.

Recommended structure:

**ACT 1 --- THE HOOK (0--8 seconds)**

Open with an interesting visual and an immediately compelling statement.

**ACT 2 --- THE CONTEXT (8--20 seconds)**

Introduce the subject and establish the problem or concept.

**ACT 3 --- THE REVELATION (20--48 seconds)**

Demonstrate how the subject works.

This is the most visually important section.

**ACT 4 --- THE PAYOFF (48--60 seconds)**

Connect the information and leave the viewer with one memorable
takeaway.

Script requirements:

-   Approximately 125--150 words for a 60-second production, adjusting to
    actual delivery.
-   Natural spoken English.
-   Short, understandable sentences.
-   No unnecessary repetition.
-   No article-like narration.
-   No exaggerated clickbait.
-   No meaningless filler.
-   Correct pronunciation of technical terminology.

Write for the ear, not the page.

Every scene must have a purpose.

# 7. VISUAL DIRECTOR

The visual director must plan the entire documentary before asset
generation.

Create a visual bible containing:

-   Art direction.
-   Color palette.
-   Lighting.
-   Camera language.
-   Composition.
-   Materials.
-   Typography.
-   Animation language.
-   Transition style.

Create a storyboard containing 8--12 carefully designed scenes.

Each scene must specify:

-   Scene identifier.
-   Narration.
-   Duration.
-   Visual objective.
-   Main subject.
-   Shot type.
-   Camera angle.
-   Camera movement.
-   Lighting.
-   Animation.
-   On-screen labels.
-   Sound effects.
-   Transition.
-   Asset requirements.

Avoid repetitive compositions.

The audience must receive new visual information throughout the video.

## Visual relevance binding (mandatory)

Every visual asset must be bound to an exact narration span before
generation. Store this binding in the storyboard:

-   `scene_id`
-   `narration_span` (verbatim phrase or sentence)
-   `visual_job` (what the viewer must learn from the asset)
-   `asset_category` (`cloud_image`, `free_stock_footage`,
    `svg_illustration`, `diagram`, `infographic`, `motion_graphic`)
-   `relevance_test` (one sentence: "This image shows X because Y")

Reject the asset if it cannot pass its relevance_test. No generic
"mood" imagery and no image that merely looks cinematic without
explaining the current narration.

## Visual asset mix (mandatory)

For an 8--12 scene production, use at least four distinct asset
categories. Cloud-generated images may not exceed 60% of scenes.
At least two scenes must use SVG/Remotion or infographic motion graphics.
No cloud image may be reused unless it is deliberately reframed and its
reuse is justified in the storyboard.

# 7B. SCENE-LEVEL ASSET DECISION ENGINE

Each scene must receive an explicit asset strategy before asset creation.
Save these decisions in:

`work/[topic]/preproduction/scene-asset-plan.json`

Each entry must include at minimum:

-   `scene_id`
-   `narration`
-   `visual_subject`
-   `visual_action`
-   `preferred_asset_type`
-   `alternative_asset_type`
-   `animation_required`
-   `stock_search_queries`
-   `visual_requirements`
-   `narration_span`
-   `visual_job`
-   `asset_category`
-   `relevance_test`
-   selected provider or generation method
-   selection rationale

Example:

```json
{
  "scene_id": "SCENE_004",
  "narration": "Inside every modern data center...",
  "visual_subject": "Data center infrastructure",
  "visual_action": "Server racks operating",
  "preferred_asset_type": "stock_video",
  "alternative_asset_type": "ai_generated_video",
  "animation_required": false,
  "stock_search_queries": [
    "cinematic data center server racks",
    "hyperscale data center interior",
    "server hardware close up"
  ],
  "visual_requirements": [
    "realistic server infrastructure",
    "visible equipment",
    "professional lighting",
    "no visible brand distortion"
  ]
}
```

The asset decision engine must consider narration meaning, visual purpose,
factual accuracy, availability, licensing, visual quality, generation cost,
production time, and continuity. The agent must explain why it selected stock
footage, stock photography, AI generation, or original animation when
documenting each scene.

# 8. VISUAL GENERATION

This is a mandatory production stage.

Generate actual visual assets.

Preferred asset sources (selected per scene according to narration
meaning and the task-based provider selection rules):

1.  Existing project assets and reusable cached assets.
2.  Relevant, licensed stock video.
3.  Relevant, licensed stock photography or archival footage.
4.  High-quality AI-generated images.
5.  AI-generated video.
6.  Original Remotion/compositor-rendered motion graphics.
7.  Verified educational diagrams.
8.  Original SVG and procedural graphics for supporting information.

Do not generate an AI image when a suitable, high-quality stock asset already
exists. Do not use stock footage when a precise scientific animation is
necessary.

Use the correct tool for each scene.

## Visual asset requirements

Every scene must contain an appropriate visual asset.

A visual asset must be one of:

-   Original image.
-   Original video.
-   3D render.
-   Animated diagram.
-   Properly sourced footage.
-   Professionally composed illustration.

A solid background with text is NOT a visual asset.

A subtitle is NOT a visual asset.

A scene title is NOT a visual asset.

## Visual quality gate

Inspect every generated asset before using it.

Reject:

-   Distorted objects.
-   Incorrect anatomy.
-   Incorrect mechanical structures.
-   Inconsistent recurring objects.
-   Gibberish text.
-   Unintended watermarks.
-   Low-resolution imagery.
-   Irrelevant imagery.
-   Major visual artifacts.

Regenerate defective assets.

## Cloud image quality standard (mandatory)

Cloud image prompts must be scene-specific and must include all of the
following fields in the final prompt string:

-   Subject and action from the narration.
-   Environment or context that identifies the scene.
-   Shot type and camera angle.
-   Lighting specification.
-   Lens/composition guidance.
-   Color palette from the visual bible.
-   A consistency anchor describing recurring objects/materials.
-   Explicit exclusions: no text, no captions, no watermark, no logo,
    no gibberish.

Use a quality suffix such as: cinematic documentary photography,
controlled lighting, high detail, 1920x1080 composition, color graded,
shallow depth of field. Modify it for the subject instead of pasting
it blindly.

Generated images must depict concrete things named in the narration.
Reject all-purpose "forest", "technology", or "science" imagery unless
those exact words are the active narration subject for that span.

## Visual continuity

Maintain consistent recurring objects.

When the same object appears in different scenes, preserve:

-   Geometry.
-   Shape.
-   Materials.
-   Colors.
-   Proportions.
-   Orientation where continuity requires it.

Use reference images when supported.

Never independently regenerate a recurring object without preserving its
established appearance.

# 8B. STOCK IMAGE AND STOCK VIDEO INTEGRATION

Stock footage and stock photography are primary visual production resources,
not optional emergency fallbacks. They must be actively searched based on
the actual narration after narration is finalized.

## 8B.1 Recommended stock providers

Discover and evaluate accessible providers before use. Candidate providers
include:

-   Pexels.
-   Pixabay (verified primary stock image and video provider when
    `PIXABAY_API_KEY` is configured).
-   Unsplash for photography.
-   Wikimedia Commons.
-   Other verified royalty-free or properly licensed media libraries.

Provider availability must be established before use. Use official APIs or
permitted download methods. Respect API terms, attribution requirements,
download restrictions, and licensing conditions. Never bypass paywalls,
authentication, licensing restrictions, or provider rate limits. Do not
assume that every asset on a stock platform is free for commercial use.

### Pixabay adapter (verified primary provider)

Authentication and safety:

-   Read the API key from the `PIXABAY_API_KEY` environment variable only.
-   Never hardcode, log, print, commit, or expose the API key.
-   Never fabricate provider results if the key is missing or invalid.
-   If `PIXABAY_API_KEY` is unavailable, mark Pixabay unavailable and do
    not silently switch to an unverified provider.

Endpoints:

-   Image search: `GET https://pixabay.com/api/`
-   Video search: `GET https://pixabay.com/api/videos/`

Request parameters (selected; see Pixabay API documentation for full
details):

-   `key` (required): API key.
-   `q`: URL-encoded search term, max 100 characters.
-   `lang`: language code; default `en`.
-   `id`: retrieve individual item by ID.
-   Images: `image_type` (`all`, `photo`, `illustration`, `vector`),
    `orientation` (`all`, `horizontal`, `vertical`), `category`,
    `min_width`, `min_height`, `colors`, `editors_choice`, `safesearch`,
    `order` (`popular`, `latest`), `page`, `per_page` (3-200).
-   Videos: `category`, `min_width`, `min_height`, `editors_choice`,
    `safesearch`, `order`, `page`, `per_page` (3-200).
-   `callback`, `pretty` are development-only and should not be used in
    production.

Rate limits and caching:

-   Default limit: 100 requests per 60 seconds per API key. Do not exceed
    it.
-   Inspect `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and
    `X-RateLimit-Reset`.
-   Cache successful search responses for at least 24 hours.
-   Avoid systematic mass queries or mass downloads; the API is intended for
    real human-scaled searches.

Hotlinking and storage:

-   Temporary display of search-result URLs is allowed.
-   Permanent hotlinking of image URLs is not allowed; download approved
    images to the project storage before production use.
-   Video URLs may be embedded, but storing the approved rendition on
    project storage is preferred.

License and attribution:

-   Pixabay content is released under the Pixabay Content License. Verify
    the current terms before commercial use.
-   Attribution is not required, but record provider, creator, asset ID,
    source URL, and license in the stock asset registry.
-   Do not assume an asset is suitable if its license/status changes; keep
    license verification in the audit.

Response handling:

-   Images: use response keys such as `total`, `totalHits`, `hits`, and
    each hit's `id`, `pageURL`, `tags`, `type`, `user`, `user_id`,
    `previewURL`, `webformatURL`, `largeImageURL`, approved full-resolution
    fields (`fullHDURL`, `imageURL`) only when full API access is granted,
    dimensions, file size, views, downloads, likes, and comments.
-   Videos: use response keys such as `total`, `totalHits`, `hits`, and
    each hit's `id`, `pageURL`, `tags`, `duration`, `videos` (`large`,
    `medium`, `small`, `tiny` with `url`, `width`, `height`, `size`,
    `thumbnail`), views, downloads, likes, comments, contributor fields.
-   Prefer rendition dimensions matching or exceeding final output
    (1080p/4K) rather than upscaling smaller sources.
-   Validate each selected asset before download and after download; reject
    watermarked, distorted, or irrelevant results.

## 8B.2 Narration-driven stock search

After narration is finalized, perform semantic visual analysis. Break
narration into meaningful visual segments and analyze:

-   Main subject.
-   Supporting subject.
-   Environment.
-   Visual action.
-   Desired footage or imagery.
-   Unsuitable footage or imagery.

Generate multiple search queries per segment using subject, environment,
action, camera perspective, visual context, specific objects, and cinematic
style. Use semantic relevance; do not rely on keyword matching alone.

## 8B.3 Stock footage selection criteria

Evaluate candidates based on actual visual relevance, resolution, aspect
ratio, frame rate, visual quality, lighting, composition, camera movement,
subject visibility, duration, watermarks, license conditions, and download
availability.

Reject footage that is unrelated to the narration, low resolution, heavily
compressed, watermarked, visually distorted, misleading, inappropriate for
the subject, or incompatible with the required production format.

Prefer 1080p or higher footage. Prefer 4K when available and practical. Do
not stretch low-resolution material to manufacture the appearance of 4K.

## 8B.4 Stock image selection and integration

Stock photographs may be used for historical context, real-world
environments, people and activities, landscapes, buildings, hardware,
wildlife, and supporting documentary imagery. Integrate them creatively
using layered parallax, foreground/background separation, depth-based camera
movement, animated annotations, controlled camera movement, object
highlighting, and motion graphics. Do not simply place a sequence of stock
photographs on screen.

## 8B.5 Stock video integration

Prioritize actual stock video over static photography whenever real-world
motion adds value. Select stock video according to the narration's specific
meaning. Never use generic cinematic footage merely to fill the timeline.

## 8B.6 Asset licensing and attribution

For every downloaded stock asset, maintain:

-   Asset ID.
-   Original URL.
-   Provider.
-   Creator, when available.
-   License type.
-   Attribution requirements.
-   Download date.
-   Original filename.
-   Local filename.
-   Resolution.
-   Duration for video.
-   Usage restrictions.

Save:

`assets/stock/stock-asset-registry.json`

and:

`assets/stock/attribution-report.md`

Never claim an asset is royalty-free or commercially usable without
verifying the applicable license. When licensing cannot be confirmed, do not
use the asset in final commercial production.

## 8B.7 Visual coverage requirements

Every narration segment must have an appropriate visual. Use a mixture of
stock video, stock images, AI-generated imagery, original 3D animation,
procedural diagrams, and licensed archival footage. There is no mandatory
percentage for each source; choose what communicates the narration most
accurately. Stock footage must not become an excuse for visually generic
production. The visual director must keep the entire documentary coherent and
stylistically consistent.

# 8C. RESOURCE OPTIMIZATION ENGINE

Implement intelligent resource management to prevent unnecessary API calls,
duplicate downloads, excessive generation, and wasted rendering time.

## 8C.1 Production budget

Before generating assets, estimate expected image-generation requests,
video-generation requests, stock searches, download volume, TTS usage,
processing requirements, available disk space, and available API credits when
verifiable. Create:

`work/[topic]/preproduction/resource-budget.md`

Never invent a monetary estimate. If provider pricing is unavailable, report
that the cost cannot be calculated.

## 8C.2 Search before generation (mandatory)

Use this asset-selection order unless a scene requires a unique or
scientifically accurate visualization:

1.  Check existing project assets.
2.  Check reusable cached assets.
3.  Search accessible stock libraries.
4.  Evaluate stock footage and images.
5.  Search other properly licensed media sources.
6.  Generate original imagery when necessary.
7.  Generate video when actual footage or animation is required and
    generation is available.
8.  Create original procedural or 3D animation when appropriate.

Accuracy and visual relevance always take precedence over cost.

## 8C.3 Asset caching

Implement reusable asset caching for stock search results, downloaded stock
assets, generated images, generated videos, narration files, audio effects,
rendered scene segments, and intermediate compositions. Use content hashes
to prevent unnecessary duplicate downloads and generation.

Cache metadata must include asset hash, source, original prompt or search
query, license information, generation settings, creation date, and
validation status. Do not reuse an asset with incompatible licensing.

## 8C.4 Intelligent generation batching

Where supported by a provider: batch image-generation requests, reuse
consistent style references, group related visual-generation tasks, avoid
regenerating already approved assets, and generate only missing assets.
Respect provider-specific concurrency limits. Do not launch unlimited
parallel jobs.

## 8C.5 Retry management

Implement bounded retries with a recommended default maximum of 3 attempts
per asset-generation task, exponential backoff for temporary failures, no
retries for invalid credentials, and no repeated retries for permanent
licensing or permission errors. Stop when a documented rate limit requires
waiting. Record every failed request. Do not endlessly retry a failing
provider.

## 8C.6 Adaptive resolution

Select resolutions according to final output requirements. Do not upscale
low-quality footage and classify it as high-quality source material.

## 8C.7 Render optimization

Render scene segments independently, reuse validated intermediate renders,
avoid unnecessary re-encoding, use hardware acceleration only when verified
and supported, manage temporary files, monitor disk space, and avoid
unnecessary full-project rerenders. If only one scene changes, rebuild only
the affected scene and dependent segments.

## 8C.8 Storage management

Before production: check available storage, estimate intermediate asset size,
check output-directory capacity, and avoid unnecessary duplicate files.
After successful final delivery: preserve source assets, final render, and QA
reports; remove only disposable temporary files; never delete the only copy
of an approved asset.

# 9. REAL ANIMATION AND CINEMATOGRAPHY

A premium explainer must contain actual visual movement.

Preferred techniques:

-   3D camera movement.
-   Object rotation.
-   Exploded-view animation.
-   Component assembly.
-   Fluid simulations.
-   Particle simulations.
-   Anatomical visualization.
-   Animated scientific diagrams.
-   Parallax.
-   Tracking shots.
-   Macro push-ins.
-   Depth transitions.
-   Kinetic typography.
-   Animated labels.
-   Motion graphics.

At least 50% of the final runtime should contain meaningful visual
movement through generated footage, procedural animation, 3D animation,
or carefully animated compositions.

Do not count subtitle movement as meaningful visual animation.

## Cinematic motion standard (mandatory)

Eliminate slideshow behavior. A scene is not acceptable if it only
cross-fades or slowly zooms a still image. Every animated scene must
use at least one of:

-   Perspective-correct Ken Burns movement with 8%--18% zoom plus a
    justified pan.
-   Parallax using separated foreground, subject, and background layers.
-   SVG stroke/path, node, or icon animation.
-   Remotion `spring()` based element entrances.
-   Animated masks, crop reveals, or focus transitions.
-   Diagram component animation (lines, arrows, nodes, labels).
-   Motion-graphics title or statistic animation.

Avoid reusing the same transform on consecutive scenes. Each scene's
camera move must be named in the storyboard (`slow_push_left`,
`parallax_right`, `scale_up_detail`, etc.). Simple center zoom is
allowed only as one minor beat among several other motion types.

## Camera language

Use camera movements deliberately.

Examples:

-   Slow push-in to reveal detail.
-   Pull-back to establish context.
-   Orbital movement around a subject.
-   Tracking movement following an object.
-   Macro focus transitions.
-   Controlled lateral movement.
-   Top-down technical demonstrations.

Do not apply the same zoom effect to every image.

## Static image fallback

When video generation is unavailable:

-   Use high-quality original imagery.
-   Create real motion through parallax, compositing, 3D camera
    movement, or animated overlays.
-   Animate components and diagrams where appropriate.
-   Use transitions that support the narrative.

A static image with a simple zoom must never be represented as a full 3D
animation.

## Critical rule

If actual animation is essential to explaining the subject and cannot be
produced, stop and disclose the limitation.

Do not replace a required scientific demonstration with a generic title
card.

# 10. NARRATOR --- HIGHEST PRIORITY

The narrator must sound like a professional documentary presenter.

Narration quality is a critical production requirement.

A visually impressive video with terrible narration is a failed video.

## Prohibited voices

NEVER use:

-   eSpeak.
-   Robotic system voices.
-   Primitive formant synthesis.
-   Low-quality legacy TTS.
-   Unapproved fallback voices.
-   Randomly selected voices.
-   Inconsistent voices between scenes.

Do not use these voices even as emergency fallbacks.

## Preferred voice providers

Priority order:

1.  High-quality local neural TTS such as Kokoro, if available and
    verified.
2.  Another verified natural neural TTS provider.

Example voice candidates:

-   Kokoro: a suitable available and verified male voice.

Verify actual voice identifiers before using them.

These are candidates, not guaranteed installed voices.

## Voice personality

Default:

-   Adult male.
-   Natural and conversational.
-   Warm.
-   Confident.
-   Clear.
-   Modern documentary delivery.
-   Rich vocal presence.
-   Controlled emotional emphasis.
-   Natural sentence rhythm.
-   Proper breathing and pauses.

Avoid:

-   Robotic cadence.
-   Excessive bass.
-   Artificially exaggerated enthusiasm.
-   Monotone delivery.
-   Unnatural pauses.
-   Overly fast speech.
-   Synthetic-sounding emphasis.

The voice must sound like a human documentary narrator, not a GPS
navigation system.

## Voice audition procedure

Before generating the complete narration:

1.  Select the best available neural voice.
2.  Prepare a representative 10--15 second script.
3.  Generate a voice sample.
4.  Check pronunciation.
5.  Check pacing.
6.  Check vocal consistency.
7.  Check audio clarity.
8.  Check whether the voice matches the documentary's intended
    personality.

If an actual audio listening capability is available, listen to the
sample.

If no listening capability exists, do not pretend to have perceptually
evaluated the voice.

Use a verified high-quality neural provider and disclose any remaining
uncertainty.

If the voice is unacceptable, try another eligible neural voice.

Never silently fall back to a robotic voice.

If no suitable neural voice exists, STOP and report that professional
narration is unavailable.

Do not render the final video with a rejected narrator.

## Voice consistency

Use the same voice, language, accent, and voice settings throughout.

Generate narration per scene when practical.

Keep the final delivery coherent.

## Pronunciation

Check:

-   Technical terminology.
-   Scientific names.
-   Abbreviations.
-   Numbers.
-   Foreign words.
-   Proper nouns.

Use pronunciation dictionaries or phonetic guidance when supported.

Save:

-   `audio/narration/voice-audition.wav`
-   `audio/narration/narration-master.wav`

Record the exact provider and voice identifier.

# 11. AUDIO PRODUCTION

The audio must be professionally mixed.

Three required layers:

1.  Narration.
2.  Background music.
3.  Sound effects.

## Background music

Select music that supports the subject and narrative.

Use legally usable music.

Music should create atmosphere without distracting from narration.

Apply automatic or manually controlled ducking during speech.

## Sound effects

Synchronize sound effects with actual visual events.

Examples:

-   Mechanical movements.
-   Electrical activity.
-   Environmental sounds.
-   Air movement.
-   Impacts.
-   Cinematic transitions.
-   Interface sounds.

Avoid random sound effects.

## Audio mastering

Target:

-   48 kHz.
-   Stereo.
-   Approximately -16 LUFS integrated loudness.
-   True peak no higher than -1 dBTP.
-   AAC 192 kbps or better.

These are production targets, not substitutes for listening and
inspection.

The narration must remain intelligible at all times.

Never allow background music to overpower speech.

## Audio mastering implementation standard (mandatory)

-   Normalize narration to -16 LUFS with true peak at or below -1 dBTP.
-   Generate audio per phrase so durations are measurable.
-   Normalize background music to at least 18 dB below narration during
    speech and fade it 300 ms at scene boundaries.
-   Use sound effects only on documented visual events and record each
    in the storyboard.
-   Verify final loudness with `ffmpeg -filter_threads ... loudnorm` or
    `ffmpeg-normalize` if available.
-   Store music bed and effect mix as separate WAV stems before mastering.

# 12. CAPTION SYSTEM

Captions are mandatory.

Generate captions from the actual final narration.

Use forced alignment or word-level timestamps whenever available.

Do not estimate all subtitle timings from the original script.

Requirements:

-   One or two lines.
-   Maximum approximately 42 characters per line.
-   Accurate punctuation.
-   Proper synchronization.
-   High contrast.
-   Modern sans-serif font.
-   Consistent positioning.
-   Safe margins.
-   No obstruction of important visual information.

Use subtle emphasis for important words.

Avoid excessive bouncing, flashing, or distracting animations.

## Caption timing and styling standard (mandatory)

-   Captions must be built from measured narration durations, not
    estimated from script word count alone.
-   Generate narration per sentence/phrase and record each audio span.
-   Caption cue end times must align to phrase audio boundaries with no
    more than 80 ms error.
-   Word highlighting may interpolate within a measured phrase, but cue
    boundaries must follow actual speech.
-   Maximum 42 characters per line and two lines maximum.
-   Use one consistent sans-serif, bottom-safe placement, and 10% side
    margins.
-   Highlight one keyword per cue, synchronized with the exact phrase.
-   Generate both SRT and styled ASS with animation only at cue changes.

Generate:

-   `captions/captions.srt`
-   `captions/captions.ass`
-   `audio/narration/narration-timings.json`

# 13. PROFESSIONAL VIDEO EDITING

Use a real scene timeline.

Recommended tools:

-   FFmpeg.
-   MoviePy.
-   Remotion.
-   Python.
-   SVG animation tools.

Select tools according to availability.

Every scene must have:

-   A unique visual.
-   A defined duration.
-   Narration synchronization.
-   Visual movement where appropriate.
-   Sound synchronization.
-   A deliberate transition.

## Editing rules

-   Use varied shot compositions.
-   Alternate wide, medium, and close-up shots.
-   Cut according to narrative rhythm.
-   Highlight important components.
-   Synchronize movement with narration.
-   Avoid excessive transitions.
-   Maintain continuity.
-   Avoid repetitive visual patterns.
-   Use intentional silence and pauses where appropriate.

The video must feel edited, not automatically stitched.

## Transition standard (mandatory)

Avoid repetitive hard cuts. Use context-appropriate transitions and
vary them by scene purpose:

-   Content changes: short crossfade (8--12 frames).
-   Location/scale changes: whip pan, push, or camera travel.
-   Data reveals: mask wipe, stroke draw, or expand.
-   Emotional/payoff beats: dissolve to black then reveal.
-   Keep transition duration below 15% of scene duration.
-   Document the transition type for every scene.

## Infographic and label standard (mandatory)

Never use AI-generated text inside images for data, labels, names, or
statistics. Generate all diagrams, charts, labels, callouts, and
statistics as SVG or Remotion components. Animate them with real
stroke, node, or value transitions. Use the generated image only as a
background or environmental layer. Verify every numeric label against
research before rendering.

# 13B. REMOTION RENDER ENGINE (PREFERRED VIDEO RENDERER)

Remotion is the preferred renderer for motion-graphics-heavy sections
and full composited scenes.

Project location:

`/home/droid/stuffs/remotion` (or `work/[topic]/remotion` if a
per-topic composition is required).

Required verification before use:

-   `node --version` reports v18 or newer.
-   `npm --version` reports a working npm.
-   The Remotion project installs and builds:
    `cd /home/droid/stuffs/remotion && npm install && npx remotion bundle`
-   `npx remotion --version` runs successfully from the project root.

Authoring rules:

-   One Remotion composition per scene or scene group, with props for
    title, labels, camera moves, timing, and asset paths.
-   Use Remotion's animation primitives (`useCurrentFrame`, `spring`,
    `interpolate`) for real movement; do not fake animation with CSS.
-   Keep deterministic render settings: 1920x1080, 30 FPS, 16:9.
-   Implement reusable animated primitives for layered parallax,
    Ken Burns images, captions, SVG diagrams, numeric counters, and
    context-aware transitions.
-   A Remotion scene must show multiple moving layers or elements; a
    single centered fading image is not acceptable.
-   Render intermediate per-scene files and inspect them before final
    mastering.
-   Render per scene or per act, then master with FFmpeg for audio,
    captions, and delivery.

Commands:

```bash
cd /home/droid/stuffs/remotion
npx remotion render <CompositionId> out/<scene-id>.mp4 \
  --codec h264 --crf 18 --pixel-format yuv420p
```

Do not claim a Remotion render ran unless the command exited 0 and the
output file exists and plays. Inspect with FFprobe.

When Remotion is unavailable, disclose it in the environment report and
use the FFmpeg/MoviePy pipeline from section 14.

# 14. FINAL RENDER

Export:

-   1920x1080.
-   30 FPS.
-   16:9.
-   H.264.
-   AAC.
-   48 kHz.
-   Stereo.
-   CRF 18.
-   yuv420p.

Target a practical 1080p video bitrate appropriate for the visual
complexity, normally several Mbps.

Do not accept extremely low-bitrate flat-color renders as proof of
production quality.

Example:

``` bash
ffmpeg \
  -i assembled-video.mp4 \
  -i mastered-audio.wav \
  -vf "subtitles=captions.ass" \
  -c:v libx264 \
  -preset medium \
  -crf 18 \
  -pix_fmt yuv420p \
  -r 30 \
  -c:a aac \
  -b:a 192k \
  -ar 48000 \
  -ac 2 \
  -movflags +faststart \
  final.mp4
```

When Remotion was used, assemble its per-scene renders (`scene-*.mp4`)
into `assembled-video.mp4` before running the command above.

Adapt the command to the actual timeline and audio mix.

Do not overwrite an existing verified video.

# 15. STRICT QUALITY ASSURANCE

The final video must pass three separate quality inspections.

## A. Visual inspection

Extract frames from:

-   Opening.
-   Every scene.
-   Every major transition.
-   Internal breakdowns.
-   Final scene.

Inspect the actual rendered frames.

Check:

-   Are there real visuals?
-   Are the images relevant?
-   Are there solid-color placeholder scenes?
-   Are scenes visually distinct?
-   Is there actual movement?
-   Are labels readable?
-   Are there image-generation defects?
-   Are the objects consistent?
-   Are captions positioned correctly?
-   Does every visual directly illustrate its narration span?
-   Are any images repeated or frozen longer than 0.75 seconds?
-   Are there black frames or abrupt frame drops?
-   Are caption cues overlapping, drifting, or covering key visuals?

Reject the render if text cards dominate the video.

## Strategic scene pacing standard (mandatory)

-   Maintain 8--12 scenes for a 55--75 second production.
-   No single image may remain static for more than 2 seconds; add
    motion, overlays, or a transition.
-   Align scene changes to sentence and audio boundaries.
-   Vary scene durations deliberately; avoid equal-length scene slices.
-   Record scene durations in seconds with at least 0.1 s precision.
-   Replan pacing if the final runtime is below the minimum duration.

## Automated technical checks (mandatory)

Run and save results before final approval:

-   `ffprobe` stream and duration checks.
-   Black-frame detection with
  `ffmpeg ... blackdetect=d=0.2:pic_th=0.98:pix_th=0.10`.
-   Frozen-frame detection with
  `ffmpeg ... freezedetect=n=0.003:d=0.75`.
-   Scene-cut verification with
  `select='gt(scene,0.3)'`.
-   Duplicate frame-hash check across decoded frames.
-   Caption cue count and overlap check.
-   Loudness check for the final mix.
-   Reject if black frames, frozen frames, duplicate dominant images,
  unreadable captions, or caption/audio desync are found.

## B. Audio inspection

Check:

-   Is the narrator natural?
-   Is pronunciation correct?
-   Is the speech intelligible?
-   Is the volume consistent?
-   Is music balanced?
-   Are sound effects appropriate?
-   Is there clipping?
-   Are there awkward silences?
-   Does the audio end naturally?

Do not claim to have listened if no listening capability was available.

## C. Technical inspection

Use FFprobe and FFmpeg.

Verify:

-   File integrity.
-   Video codec.
-   Audio codec.
-   Resolution.
-   Frame rate.
-   Duration.
-   Audio stream.
-   Video stream.
-   Audio loudness.
-   Black frames.
-   Frozen frames.
-   Subtitle rendering.
-   File size.

## D. Content inspection

Verify the final video against the original research.

Check:

-   Scientific accuracy.
-   Factual accuracy.
-   Narration consistency.
-   Visual accuracy.
-   Missing qualifications.
-   Misleading representations.

## E. Automatic rejection criteria

Immediately reject the video if:

-   Any scene uses a flat-color placeholder instead of a required
    visual.
-   The video is primarily text cards.
-   Narration uses a prohibited robotic voice.
-   Narration is missing or unintelligible.
-   Captions repeat incorrectly.
-   Visuals are unrelated to the topic.
-   Required animations are missing.
-   The final file is corrupted.
-   Important facts are misrepresented.

Fix the issue and rerender.

## F. Stock media QA requirements

Extend QA to stock media. Verify:

1.  Every stock asset matches its assigned narration.
2.  The source URL is recorded.
3.  License conditions have been checked.
4.  Attribution requirements are respected.
5.  No watermarked media is present.
6.  No duplicate footage is unnecessarily repeated.
7.  Stock footage does not contradict the narration.
8.  Archival footage is not misrepresented.
9.  Stock photographs are not presented as actual video footage.
10. Generated and stock assets are correctly identified in the production
    report.

Create:

`qa/stock-media-audit.md`

## G. Additional rejection criteria for stock media

Immediately reject the video if:

-   A stock asset does not match its assigned narration.
-   A watermarked or unlicensed stock asset was used.
-   A source URL or license condition is missing.
-   Archival footage is misrepresented as original footage.
-   A stock photograph is presented as actual video footage.
-   An unverified asset was used in commercial production.

# 16. FINAL DELIVERY REQUIREMENTS

Save the final video:

`/home/droid/stuffs/output/explainer-[topic-slug].mp4`

Preserve all production assets and intermediate files, including
Remotion compositions, bundle output, and per-scene renders.

Generate:

-   `qa/inspection.md`
-   `qa/issues.md`
-   `qa/stock-media-audit.md`

The inspection report must contain:

-   Actual runtime.
-   Resolution.
-   Frame rate.
-   Video bitrate.
-   Audio codec.
-   Narration provider.
-   Narration voice.
-   Visual asset count.
-   Animated scene count.
-   Total stock videos used.
-   Total stock images used.
-   Total AI-generated images.
-   Total AI-generated videos.
-   Total original animated scenes.
-   Total licensed archival assets.
-   Unverified assets, which must be zero for assets used in commercial
    production.
-   QA findings.
-   Known limitations.
-   Any fallbacks.

## Production directories

The production directory convention must include:

```text
assets/
  stock/
    images/
    videos/
    stock-asset-registry.json
    attribution-report.md

  generated/
    images/
    videos/

  references/

preproduction/
  provider-registry.json
  resource-budget.md
  scene-asset-plan.json

qa/
  stock-media-audit.md
```

Do not assign an arbitrary quality score.

Only report what was actually inspected.

# 17. FAILURE POLICY

If premium narration is unavailable, stop.

If visual generation is unavailable, stop when suitable original or
licensed assets cannot be obtained.

If required animation cannot be produced, disclose it.

If rendering fails, diagnose the error and retry.

If storage is insufficient, report the limitation.

Never silently substitute inferior capabilities.

The user must know exactly what was produced and what was not.

# 18. FINAL PRODUCTION STANDARD

A viewer should be able to understand the topic primarily through the
combination of narration and visuals, without needing to read a series
of slides.

The narration should sound professionally directed.

The visuals should demonstrate the subject.

The animation should explain movement and relationships.

The editing should create a coherent narrative.

The sound design should reinforce the experience.

The final result should be something worth publishing, not merely
something that technically plays.


# 19. MODULAR PRODUCTION PIPELINE (OPENMONTAGE-INTEGRATED)

The production is organised into eleven independently manageable,
checkpointed stages. Each stage declares explicit inputs, outputs,
validation rules, retry policy, and preserved artifacts. Stages are NOT
restarted unless invalid.

Stage list and contract:

1. Script and narration.
   - Input: verified research outputs + topic.
   - Output: `audio/narration/script.txt`, phrase-level JSON; timings JSON
     produced in stage 8.
   - Validation: 125–150 words for ~60s, natural spoken English, no filler.
   - Retry: rewrite script only; preserve research.

2. Storyboard and visual bible.
   - Input: script + research.
   - Output: `preproduction/storyboard.json` (8–12 scenes with scene_id,
     narration_span, visual_job, asset_category, relevance_test, camera move
     name, transition, duration) plus visual bible (art direction, palette,
     lighting, camera language, composition, materials, typography,
     animation language, transition style).
   - Validation: every scene has relevance_test sentence; >=4 distinct asset
     categories; cloud images <=60%; >=2 SVG/Remotion motion-graphic scenes.
   - Retry: re-plan storyboard only.

3. Scene asset planning.
   - Input: storyboard.
   - Output: `preproduction/scene-asset-plan.json` (existing contract 7B).
   - Validation: every scene has preferred/alternative asset type, stock
     queries, visual requirements.
   - Retry: rebuild plan only; preserve storyboard.

4. Stock acquisition and validation.
   - Input: scene-asset-plan.
   - Output: downloaded licensed assets under `assets/stock/`, registry,
     attribution report.
   - Validation: source URL, license, resolution, no watermark, no duplicate.
   - Retry: re-acquire failed scenes only; cache validated hits.

5. Asset-gap detection.
   - Input: storyboard + available stock assets.
   - Output: `preproduction/asset-gap-report.json` (scenes with no/weak
     visual, insufficient duration, excessive static images, redundant use).
   - Validation: every scene covered; gaps classified; no generation when
     adequate stock exists.
   - Retry: re-run coverage analysis only.

6. AI image/video generation.
   - Input: asset-gap report; scenes needing generated imagery/motion.
   - Output: `assets/generated/images/*`, `assets/generated/videos/*`,
     generation logs.
   - Validation: visual quality gate (8); files exist and play; no artifact.
   - Retry: regenerate failed scenes only; bounded 3 attempts.

7. Original animation and composition.
   - Input: storyboard + assets + visual bible.
   - Output: original animated diagrams, SVG/Remotion compositions, per-scene
     motion layers under `work/[topic]/work_segments/`.
   - Validation: real motion present; no fake/static-only animation; motion
     budget met.
   - Retry: rebuild affected compositions only.

8. Audio mastering and captions.
   - Input: script + scene timings.
   - Output: `audio/narration/narration-master.wav`,
     `audio/narration/voice-audition.wav`, timings JSON, music stems, SFX,
     `captions/captions.srt`, `captions/captions.ass`.
   - Validation: neural voice verified, loudness -16 LUFS, no clipping; cue
     boundaries within 80 ms; max 42 chars/line; <=2 lines.
   - Retry: regenerate audio/captions only; preserve visuals.

9. Editing and timeline assembly.
   - Input: validated assets + timings + storyboard + compositions.
   - Output: per-scene renders `work/[topic]/work_segments/scene-*.mp4`,
     `assembled-video.mp4`, `assembled-timeline.json`.
   - Validation: per-scene FFprobe; no black frames; motion budget; scene
     durations aligned to narration boundaries.
   - Retry: rebuild affected scenes/segments only.

10. Final rendering.
    - Input: assembled video + mastered audio + captions.
    - Output: `output/explainer-[slug].mp4`.
    - Validation: codec/resolution/fps/duration/bitrate checks.
    - Retry: re-encode only; do not re-run earlier stages.

11. QA and delivery.
    - Input: final video + all manifests.
    - Output: `qa/inspection.md`, `qa/issues.md`, `qa/stock-media-audit.md`,
      `qa/qa-report.json`, production report.
    - Validation: all rejection criteria pass; unverified assets == 0.
    - Retry: repair only affected components, then re-run 9–11.

Stage execution rules:
- The orchestrator MUST keep a single `production-state.json` (schema below)
  as the source of truth.
- Completed and validated stages are SKIPPED on resume.
- Failed stages are retried with bounded attempts; independent scenes run
  concurrently when safe.
- Completed assets are preserved; never regenerate a validated asset.
- Every stage writes an append-only log:
  `work/[topic]/logs/stage-NN-<name>.log`.
- Stage transitions record timestamp, duration, inputs hash, outputs list.

# 20. INTELLIGENT AGENT ORCHESTRATION (OPENMONTAGE-INTEGRATED)

The master orchestrator coordinates the following specialized agents. Do
not spawn an agent when a deterministic module suffices; reuse helper
scripts (`horde_image_gen.py`, `kokoro_tts.py`) instead.

- Research agent: verifies factual claims, gathers and cites sources.
- Script agent: writes engaging narration.
- Storyboard agent: translates narration into 8–12 scenes.
- Visual researcher: finds relevant footage/images across providers.
- Asset generation agent: creates missing visuals via verified providers.
- Audio agent: narration, music bed, SFX, mastering.
- Editing agent: assembles timeline and renders.
- QA agent: evaluates rendered output and emits repair targets.

Orchestrator duties:
- Assign tasks by dependency graph (stage order above).
- Run independent tasks concurrently with configurable limits (default:
  downloads <=4, image gen <=2, video gen <=1).
- Prevent duplicate work via content-hash dedup and completed-stage skip.
- Pass STRUCTURED outputs (JSON manifests) between stages, never prose.
- Detect missing dependencies before executing a stage.
- Handle provider failures with documented fallbacks; on total failure of a
  required capability, STOP and report (failure policy 17).
- Maintain single source of truth: `production-state.json`.

# 21. INTELLIGENT ASSET ACQUISITION (ORDER AND PROVIDERS)

Unified asset acquisition priority (highest to lowest):

1. Relevant high-quality stock videos.
2. Relevant stock photographs/illustrations.
3. Public-domain / appropriately licensed archival media.
4. AI-generated images (verified providers only).
5. AI-generated video.

Use available providers where configured, in this preference:
- Pexels API
- Pixabay API (`PIXABAY_API_KEY`, verified primary)
- Unsplash API
- Wikimedia Commons
- Internet Archive
- NASA media resources

Rules:
- Search per SCENE description, never just the overall topic.
- Match assets to narration timestamps (`scene_id` binding).
- Evaluate relevance, resolution, aspect ratio, duration, quality.
- Reject duplicate footage, watermarks, low quality.
- Record source URL, attribution, license in the manifest (8B.6).
- Cache downloaded assets; dedup by content hash.
- NEVER claim an asset downloaded/generated unless file exists and is valid.
- For each scene, write an asset-selection report explaining why the
  selected visual matches the narration
  (`assets/asset-selection-report.md` or per-scene JSON).

Additional provider notes (only if verified available):
- Wikimedia Commons: use the public MediaWiki API; respect licensing per file.
- Internet Archive: use the advanced search API; verify usage rights.
- NASA: use https://images.nasa.gov API; content is generally public domain
  but verify each item's license metadata.

No silent switching to a paid provider; no hotlinking permanent images.

# 22. ASSET GAP DETECTION

Implement visual-coverage analysis before generating anything:

Compare storyboard vs. available assets. Produce
`preproduction/asset-gap-report.json` listing:
- scenes with no visual
- scenes with weakly relevant visual
- scenes with insufficient footage duration
- scenes relying excessively on static images
- repeated/redundant asset usage

Only generate replacement assets when existing assets cannot satisfy scene
requirements. Never generate images/videos when adequate stock exists.

Gap-driven rules:
- stock video present and relevant -> use it; do NOT generate.
- stock image only and scene needs motion -> add Remotion motion (parallax,
  Ken Burns) but do not fabricate motion claims.
- no adequate stock -> generate ONE candidate, validate before use.

# 23. PRODUCTION STATE AND RECOVERY (CHECKPOINT SCHEMA)

Persist `work/[topic]/production-state.json` with this schema:

```json
{
  "topic": "string",
  "slug": "string",
  "created_at": "ISO8601",
  "updated_at": "ISO8601",
  "current_stage": 1,
  "stages": {
    "1": {"name":"research","status":"completed|pending|failed|skipped","started_at":"","finished_at":"","attempts":0,"inputs_hash":"","outputs":[]}
  },
  "completed_stages": [],
  "pending_stages": [],
  "failed_operations": [],
  "downloaded_assets": [],
  "generated_assets": [],
  "api_usage": {"requests":0,"estimated_cost_usd":0.0,"actual_charges_usd":null,"providers":{}},
  "rendering_progress": {"percent":0,"current_scene":null,"output_path":null},
  "qa_results": {"visual":null,"audio":null,"technical":null,"content":null,"passed":false},
  "checkpoints": []
}
```

Checkpoint files:
- `work/[topic]/checkpoints/stage-NN-<name>.json` snapshot after each stage.
- Resume: load state, skip completed+validated stages, reprocess failed/invalid only.
- A failed render MUST NOT require re-running research, scripting, or asset
  acquisition; restart from stage 9/10 with preserved assets.
- Avoid regenerating narration/visuals unless invalidated.

# 24. RESOURCE AND API OPTIMIZATION (EXTENSION)

Extend existing 8C with:
- Estimate production requirements before execution (resource-budget.md).
- Prefer free providers when quality acceptable (already: Horde anonymous,
  Pixabay, NASA).
- Cache provider responses 24h+ and downloads indefinitely by content hash.
- Dedup requests by (provider, query, filters).
- Concurrent downloads with configurable limit (default 4).
- Memory/CPU awareness: render per scene, avoid full-project rerenders.
- Limit excessive parallel AI-gen requests (images <=2, videos <=1).
- Use local processing when practical (Kokoro, Remotion, FFmpeg).
- Adaptive resolution: do not upscale low-quality sources.
- Never silently switch to paid provider; require explicit approval and record
  in state before any charge.

# 25. TIMELINE AND SCENE COMPOSITION (STRUCTURED)

Every scene object in `assembled-timeline.json` MUST contain:
- scene_id
- narration_segment (verbatim)
- start_time, end_time (seconds, 0.1 precision)
- duration_seconds
- visual_assets (list with source path/URL)
- asset_source (stock|generated|archival|motion_graphic)
- transition (type + duration frames)
- motion_instructions (named camera move, per cinematic standard)
- subtitle_segment (text + cue ids)
- audio_instructions (music level, SFX list)

Validation:
- scene durations correspond to narration phrase boundaries.
- transitions natural; audio no abrupt cuts; subtitles sync (<=80 ms).
- no unintended black frames/empty scenes; pacing matches narration.

Use Remotion + FFmpeg; no new render engines.

# 26. INTELLIGENT EDITING DECISION RULES

Editing agent determines per scene:
- when footage should change
- close-up vs wide shot
- image pan/zoom vs static
- motion graphics usage
- text overlays
- subtle vs emphasized transition
- B-roll reinforcement of narration

Avoid identical transitions/zooms/animations across scenes. Maintain visual
consistency but allow scene-specific creativity. Preserve all prohibitions
against fake animation and low-quality fallbacks (section 2/9).

# 27. QA EXTENSION (THRESHOLDS AND REPAIR TARGETS)

Post-render QA must produce `qa/qa-report.json` with per-category results and
specific repair target (stage id + scene ids). Categories as in section 15
extended with explicit thresholds:
- black frames: reject any (blackdetect params section 15).
- frozen frames: reject >=0.75s.
- caption/audio desync: reject >80 ms.
- loudness: reject outside -16 LUFS +/-1 or TP > -1 dBTP.
- unverified assets used: reject if >0.
- factual/visual mismatch: reject with scene list.

Repair policy: fix only affected components, then rerun stages 9–11. Do not
declare ready merely because FFmpeg succeeded.

# 28. PRODUCTION REPORT (SCHEMA)

Generate `preproduction/production-report.md` (or `output/production-report.md`)
for every completed project including:
- Video title
- Total duration
- Resolution and FPS
- Number of scenes
- Stock videos used
- Stock images used
- AI-generated assets count (images/videos)
- Narration provider + voice id
- Music and SFX sources
- Total API requests
- Estimated production cost (clearly estimated, not actual)
- Actual provider-reported charges (if available; else null)
- Failed/skipped operations
- QA results
- Output file location

Distinguish estimated vs actual charges explicitly.

# 29. DIRECTORY CONVENTION (EXTENDED)

In addition to section 16:

```
work/[topic]/
  production-state.json
  checkpoints/
  logs/
  preproduction/
    storyboard.json
    scene-asset-plan.json
    asset-gap-report.json
    resource-budget.md
    provider-registry.json
    environment-report.md
  assets/
    stock/... (existing)
    generated/images, videos
    asset-selection-report.md (or .json)
  qa/
    qa-report.json
  output report
```

# 30. IMPLEMENTATION AND CHANGE REPORT

When implementing this upgrade:
1. Inspect existing skill and tools (done).
2. Map existing capabilities already satisfying requirements:
   - env discovery/provider registry (3.x), adapter architecture (3.2),
     Pixabay adapter (8B.1), stock integration (8B), resource optimization
     (8C), Remotion (13B), QA (15), failure policy (17) already present.
3. Missing added by this upgrade: explicit modular stage contracts,
   structured production-state/checkpoints, asset acquisition order including
   Wikimedia/Archive/NASA, gap detection, timeline schema, editing decision
   rules, QA thresholds/repair targets, production report schema.
4. Duplicates avoided: new sections reference existing ones rather than
   redefining Pixabay specifics or QA visual checks.
5. No existing working functionality removed.
6. Validate existing workflows unchanged (scripts and Remotion untouched).

Change report location:
`work/[topic]/preproduction/change-report.md` for per-run, plus this skill
revision itself serves as the global change report.

END OF SKILL

# APPENDIX U: ORCHESTRATION AND SEMANTIC VISUAL PRODUCTION UPGRADE

## U.1 Skill responsibilities

Main skill is the master orchestrator: research, creative direction, narrative, planning, discovery/delegation, checkpoint review.
Output skill is production specialist: executes supplied plan, providers/assets/render/QA, returns structure.

## U.2 Skill discovery/delegation

At start, discover installed skills from `~/.claude/skills/` and repository `skills/`. Read names/descriptions, match to production responsibilities (research, scripting, storyboard, visual, audio, render, QA). Invoke only relevant, record manifest `production-state.json.skill_discovery`. Never claim invocation without completion.

## U.3 Narration-first semantic visual planning

For each narration segment extract subject, objects, env, actions, cause-effect, abstract concepts, viewer understanding, required on-screen visual, misleading visuals. Create per scene visual spec including relevance_test. Example lottery ticket, not particles.

## U.4 Semantic asset evaluation

Score 0-100: subject, object, action, environment, relevance, clarity, accuracy, cinematic, duration, technical. Policy: 90-100 excellent, 80-89 acceptable, 65-79 review, <65 reject. High technical never compensates low semantic.

## U.5 Stock footage acquisition

Reuse existing provider adapters; do not duplicate. Search separately per scene with contextual queries, evaluate relevance before download, validate license and cache. No undocumented APIs.

## U.6 Visual selection hierarchy

Preferred per semantic need: relevant stock video, stock photo/archival, original AI video, AI image, 3D/procedural animation, SVG/Remotion diagrams/supporting graphics. Abstract only for abstract concepts.

## U.7 Scene diversity

Reject repeated backgrounds/particles/grids/motion/camera/composition. Require new visual info each scene; keep continuity where natural.

## U.8 Frame-level semantic QA

Inspect frames against narration and intended visual; compare actual visible subject/action. Where no vision capability exists, do not pretend verified; record limitation and repair targets.

## U.9 Pipeline integration

Keep 11-stage checkpoint pipeline. Integrate semantic validation in storyboard, asset plan, acquisition, gaps, generation, animation, assembly, final QA. Preserve cached assets and completed stages.

## U.10 End-to-end test topic

Test: "Absolute Probability Perception: The ability to see a guaranteed successful outcome."
Expected visual progression: person holding lottery ticket -> close-up numbers -> person perceives guaranteed win -> probability display to 100% -> sequence possible outcomes -> real-world consequence -> cinematic conclusion. Distinguish imagined from factual. Do not use grids/particles as substitute.

## U.11 Deliverables

Updated main skill and output skill, skill discovery/delegation, semantic visual-selection, validation, QA, sample production manifest schema, and end-to-end test notes. No third full-visual skill.

## U.12 Implementation rules

Inspect before change, preserve integrations, avoid placeholders, no invent APIs, no remove checkpoints, no paid without approval.

# FOLLOW-UP PATCH: COMPLETE MAIN-TO-OUTPUT SKILL INTEGRATION

## P1 Asset policy synchronization

Main skill owns creative direction and scene-level requirements. Output skill executes approved scene-asset plan. Priority order:
1. relevant high-quality stock video
2. relevant stock images/archival footage
3. original AI imagery/video where needed
4. original 3D/procedural visualization where needed
5. motion graphics as supporting explanations only
Do not prioritize AI generation over suitable stock. Do not generate just to meet quota.

## P2 Semantic relevance scoring

Rubric (0-100): subject 25, action 20, object 15, context/environment 15, narrative 15, visual clarity 10. Accept: 90-100 excellent, 80-89 acceptable, 65-79 reject and search again, below 65 reject. Score based on actual visual content, not filenames/tags/keywords.

## P3 Actual visual verification

Inspect representative frames for video; inspect generated images for subject/object/composition. If unavailable, report limitation; never fabricate verification.

## P4 Remove artificial quotas

Remove mandatory asset-category/motion-graphic scene counts where conflicting. Require diversity, progression, anti-repetition, and motion graphics only when they improve understanding. Predominantly real-world footage is acceptable.

## P5 Execution contract

Main supplies narration, storyboard, visual bible, scene visual requirements, timing, continuity, constraints. Output returns asset registry, selection scores, scene render paths, timeline manifest, QA, failed ops, repair targets. Main verifies execution result before completion.

## P6 Semantic final-video QA

Compare original narration, storyboard, selected asset, rendered frames. Reject semantically unrelated but pretty scenes. Provide repair instructions and preserve unaffected scenes.

## P7 Regression test

Test on Absolute Probability Perception:
- lottery narration -> lottery visuals
- human actions -> relevant humans
- probability explanations -> understandable visuals
- abstract animation not a substitute for concrete objects
- no unrelated stock footage
- no filler graphics to satisfy quotas
- inspect rendered video, not just storyboard.

## P8 Honest reporting

Report modified files, reused capabilities, conflicts resolved, and limitations. No false success.
