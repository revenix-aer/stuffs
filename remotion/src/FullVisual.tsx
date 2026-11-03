import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

const COLORS = {
  bg: "#0b1020",
  deep: "#101a33",
  accent: "#4fd1c5",
  warm: "#f6ad55",
  text: "#f7fafc",
  muted: "#a0aec0",
};

const Caption: React.FC<{
  text: string;
  highlight?: string;
  startFrame: number;
}> = ({ text, highlight, startFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame: frame - startFrame, fps, config: { damping: 18, mass: 0.6 } });
  const opacity = interpolate(frame, [startFrame, startFrame + 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(enter, [0, 1], [26, 0]);
  const words = text.split(" ");
  return (
    <div
      style={{
        position: "absolute",
        left: 120,
        right: 120,
        bottom: 72,
        opacity,
        transform: `translateY(${y}px)`,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 10,
        fontSize: 40,
        lineHeight: 1.25,
        fontWeight: 600,
        color: COLORS.text,
        textAlign: "center",
        textShadow: "0 2px 18px rgba(0,0,0,0.45)",
      }}
    >
      {words.map((word, index) => {
        const isHighlight = highlight ? word.toLowerCase().includes(highlight.toLowerCase()) : false;
        return (
          <span
            key={index}
            style={{
              color: isHighlight ? COLORS.warm : COLORS.text,
              transform: isHighlight ? `scale(${interpolate(enter, [0, 1], [0.9, 1.08])})` : "none",
              display: "inline-block",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

const ParallaxBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const phase = frame / 18;
  const back = 38 * Math.sin(phase) + interpolate(frame, [0, 300], [0, 30], { extrapolateRight: "clamp" });
  const mid = -28 * Math.cos(phase * 1.3) + interpolate(frame, [0, 300], [0, -22], { extrapolateRight: "clamp" });
  const fore = 16 * Math.sin(phase * 0.7) + interpolate(frame, [0, 300], [0, 14], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: COLORS.bg }}>
      <div
        style={{
          position: "absolute",
          inset: -120,
          background:
            "radial-gradient(circle at 30% 35%, rgba(79,209,197,0.22), transparent 38%), radial-gradient(circle at 70% 30%, rgba(246,173,85,0.18), transparent 42%)",
          transform: `translate3d(${back}px, -${back * 0.35}px, 0) scale(1.08)`,
        }}
      />
      <svg width="1920" height="1080" style={{ position: "absolute", inset: 0, transform: `translate3d(${mid}px, ${mid * 0.25}px, 0)` }}>
        {Array.from({ length: 18 }).map((_, i) => (
          <circle
            key={i}
            cx={120 + i * 110 + 18 * Math.sin(frame / 20 + i)}
            cy={180 + (i % 5) * 150 + 14 * Math.cos(frame / 16 + i)}
            r={16 + (i % 4) * 8 + 3 * Math.sin(frame / 14 + i)}
            fill="rgba(247,250,252,0.06)"
          />
        ))}
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(10,16,32,0.35), rgba(10,16,32,0.72))",
          transform: `translate3d(${fore}px, ${fore * 0.2}px, 0)`,
        }}
      />
    </AbsoluteFill>
  );
};

export const FullVisual: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const introOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const introScale = spring({ frame, fps, config: { damping: 14, mass: 0.8 } });

  const scene2Opacity = interpolate(frame, [105, 125], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scene3Opacity = interpolate(frame, [210, 230], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const drawProgress = interpolate(frame, [125, 185], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const count = Math.round(interpolate(frame, [225, 285], [0, 84], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }));

  const pulse = 1 + 0.025 * Math.sin(frame / 9);
  const tilt = 0.35 * Math.sin(frame / 13);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: "Inter, Helvetica Neue, Arial, sans-serif", transform: `scale(${pulse}) rotate(${tilt}deg)`, transformOrigin: "center center" }}>
      <ParallaxBackground />

      {/* Scene 1: thesis and animated hierarchy */}
      <AbsoluteFill style={{ opacity: introOpacity }}>
        <div
          style={{
            position: "absolute",
            top: 130,
            left: 120,
            transform: `scale(${interpolate(introScale, [0, 1], [0.92, 1])})`,
          }}
        >
          <div style={{ fontSize: 74, fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.05 }}>
            Trees on every part of land
          </div>
          <div style={{ marginTop: 18, fontSize: 34, color: COLORS.muted, maxWidth: 1050 }}>
            A preview of programmatic motion graphics, layered parallax, SVG diagram animation, counters, and caption styling.
          </div>
        </div>
        <svg width="760" height="420" viewBox="0 0 760 420" style={{ position: "absolute", right: 110, bottom: 150 }}>
          <rect x="40" y="300" width="680" height="12" fill="rgba(247,250,252,0.16)" rx="6" />
          {Array.from({ length: 7 }).map((_, index) => {
            const height = 50 + ((index * 37) % 180);
            const grow = spring({ frame: frame - index * 4, fps, config: { damping: 15 } });
            return (
              <rect
                key={index}
                x={60 + index * 95}
                y={300 - height * grow}
                width={52}
                height={height * grow}
                rx="8"
                fill={index % 2 === 0 ? COLORS.accent : COLORS.warm}
                opacity={0.88}
              />
            );
          })}
        </svg>
      </AbsoluteFill>

      {/* Scene 2: animated SVG diagram */}
      <AbsoluteFill style={{ opacity: scene2Opacity }}>
        <div style={{ position: "absolute", top: 110, left: 120, fontSize: 62, fontWeight: 800 }}>
          Layered ecosystem diagram
        </div>
        <svg width="860" height="620" viewBox="0 0 860 620" style={{ position: "absolute", left: 110, top: 230 }}>
          <path
            d="M80 500 C260 390, 420 450, 560 300 S760 120, 820 160"
            fill="none"
            stroke={COLORS.accent}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="1000"
            strokeDashoffset={1000 * (1 - drawProgress)}
          />
          <circle cx={120 + drawProgress * 640} cy={450 - drawProgress * 260} r="16" fill={COLORS.warm} />
          <foreignObject x="600" y="70" width="220" height="120">
            <div style={{ color: COLORS.text, fontSize: 26, fontWeight: 700 }}>Carbon flows</div>
          </foreignObject>
        </svg>
      </AbsoluteFill>

      {/* Scene 3: statistic counter */}
      <AbsoluteFill style={{ opacity: scene3Opacity, justifyContent: "center", alignItems: "center" }}>
        <div style={{ fontSize: 190, fontWeight: 900, color: COLORS.accent, letterSpacing: -4 }}>
          {count}%
        </div>
        <div style={{ fontSize: 42, color: COLORS.muted, marginTop: 16 }}>
          Remotion-driven overlays, captions, and transitions.
        </div>
      </AbsoluteFill>

      <Caption
        text="Every part of the land on Earth has trees."
        highlight="trees"
        startFrame={0}
      />
      <Caption
        text="This preview exercises cinematic motion without paid services."
        highlight="motion"
        startFrame={105}
      />
      <Caption
        text="Final scenes connect real narration to measured timestamps."
        highlight="timestamps"
        startFrame={210}
      />
    </AbsoluteFill>
  );
};