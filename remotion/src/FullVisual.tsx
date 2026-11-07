import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

const COLORS = { bg: "#070b16", deep: "#0d1630", accent: "#4fd1c5", warm: "#f6ad55", text: "#f7fafc", muted: "#a0aec0", pink: "#f472b6" };

const Caption: React.FC<{ text: string; start: number; end: number }> = ({ text, start, end }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [start, start + 10, end - 8, end], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const y = spring({ frame: frame - start, fps, config: { damping: 18, mass: 0.6 } });
  return (
    <div style={{ position: "absolute", left: 140, right: 140, bottom: 70, opacity, transform: `translateY(${interpolate(y, [0,1],[18,0])}px)`, fontSize: 40, lineHeight: 1.25, fontWeight: 600, color: COLORS.text, textAlign: "center", textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}>
      {text}
    </div>
  );
};

const Scene: React.FC<{ children: React.ReactNode; start: number; end: number }> = ({ children, start, end }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [start, start + 12, end - 12, end], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

export const FullVisual: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pulse = 1 + 0.018 * Math.sin(frame / 11);
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: "Inter, Helvetica Neue, Arial, sans-serif", transform: `scale(${pulse})`, transformOrigin: "center center" }}>
      <AbsoluteFill style={{ background: "radial-gradient(circle at 50% 40%, rgba(79,209,197,0.18), transparent 45%), radial-gradient(circle at 70% 25%, rgba(246,173,85,0.12), transparent 40%)" }} />
      {/* Scene 1 */}
      <Scene start={0} end={285}>
        <div style={{ position: "absolute", top: 150, left: 140, fontSize: 78, fontWeight: 900, letterSpacing: -2, lineHeight: 1.05 }}>
          Absolute Probability Vision
        </div>
        <div style={{ position: "absolute", top: 260, left: 140, fontSize: 34, color: COLORS.muted, maxWidth: 900 }}>
          What happens when every outcome carries an exact number?
        </div>
        <svg width="760" height="520" style={{ position: "absolute", right: 120, bottom: 150 }}>
          {Array.from({ length: 14 }).map((_, i) => {
            const a = (i / 14) * Math.PI * 2 + frame / 55;
            const r = 180 + 26 * Math.sin(frame / 18 + i);
            const x = 380 + r * Math.cos(a);
            const y = 260 + r * Math.sin(a);
            return (
              <g key={i}>
                <circle cx={x} cy={y} r={8 + (i % 4) * 3 + 2 * Math.sin(frame / 9 + i)} fill={i % 3 === 0 ? COLORS.warm : i % 3 === 1 ? COLORS.accent : COLORS.pink} opacity={0.85} />
                <text x={x + 14} y={y + 6} fill={COLORS.text} fontSize={24} fontWeight={700}>{(30 + (i * 17 + frame) % 61)}%</text>
              </g>
            );
          })}
        </svg>
      </Scene>
      {/* Scene 2 */}
      <Scene start={270} end={555}>
        <div style={{ position: "absolute", top: 120, left: 140, fontSize: 62, fontWeight: 800 }}>A storm of fractions</div>
        <svg width="1700" height="640" style={{ position: "absolute", left: 100, top: 260 }}>
          {Array.from({ length: 48 }).map((_, i) => {
            const t = (frame / 40 + i * 0.4) % (Math.PI * 2);
            const cx = 100 + (i % 12) * 135 + 14 * Math.sin(t);
            const cy = 60 + Math.floor(i / 12) * 150 + 10 * Math.cos(t * 1.3);
            return <circle key={i} cx={cx} cy={cy} r={4 + 3 * Math.sin(t)} fill={i % 2 === 0 ? "rgba(79,209,197,0.7)" : "rgba(246,173,85,0.6)"} />;
          })}
        </svg>
      </Scene>
      {/* Scene 3 */}
      <Scene start={540} end={825}>
        <div style={{ position: "absolute", top: 120, left: 140, fontSize: 62, fontWeight: 800 }}>Absolute hesitation</div>
        <svg width="900" height="520" style={{ position: "absolute", left: 140, top: 280 }}>
          {Array.from({ length: 6 }).map((_, i) => {
            const progress = interpolate(frame, [540 + i * 18, 540 + i * 18 + 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            return (
              <g key={i}>
                <rect x={40} y={40 + i * 70} width={760} height={46} rx={10} fill="rgba(247,250,252,0.08)" />
                <rect x={40} y={40 + i * 70} width={760 * progress} height={46} rx={10} fill={i % 2 === 0 ? COLORS.accent : COLORS.warm} opacity={0.75} />
                <text x={815} y={72 + i * 70} fill={COLORS.text} fontSize={26} fontWeight={700}>{Math.round(progress * 100)}%</text>
              </g>
            );
          })}
        </svg>
      </Scene>
      {/* Scene 4 */}
      <Scene start={810} end={1095}>
        <div style={{ position: "absolute", top: 120, left: 140, fontSize: 62, fontWeight: 800 }}>Intentions become distributions</div>
        <svg width="1100" height="620" style={{ position: "absolute", left: 410, top: 240 }}>
          {Array.from({ length: 10 }).map((_, row) =>
            Array.from({ length: 14 }).map((_, col) => {
              const idx = row * 14 + col;
              const v = (Math.sin(idx * 0.6 + frame / 24) + 1) / 2;
              return <rect key={idx} x={col * 70} y={row * 52} width={62} height={44} rx={6} fill={`rgba(79,209,197,${0.15 + v * 0.6})`} />;
            })
          )}
        </svg>
      </Scene>
      {/* Scene 5 */}
      <Scene start={1080} end={1350}>
        <div style={{ position: "absolute", top: 120, left: 140, fontSize: 62, fontWeight: 800 }}>Meaning is what we do with the odds</div>
        <svg width="900" height="500" style={{ position: "absolute", left: 900, top: 300 }}>
          <path d={`M40,400 C ${160 + 40*Math.sin(frame/18)},260 ${320 + 30*Math.cos(frame/21)},160 ${500 + 20*Math.sin(frame/24)},80 ${680 + 10*Math.cos(frame/19)},40`} fill="none" stroke={COLORS.accent} strokeWidth="10" strokeLinecap="round" />
          {Array.from({ length: 6 }).map((_, i) => (
            <circle key={i} cx={100 + i * 130} cy={360 - i * i * 8 + 10 * Math.sin(frame / 12 + i)} r={12 + 3 * Math.sin(frame / 9 + i)} fill={COLORS.warm} />
          ))}
        </svg>
      </Scene>

      {/* Captions */}
      <Caption start={0} end={60} text="Imagine waking up with a new sense." />
      <Caption start={63} end={224} text="Every possible outcome, from a coin flip to a marriage proposal, carries a live percentage." />
      <Caption start={228} end={288} text="At first it feels like omniscience." />
      <Caption start={291} end={373} text="A seventy-three percent chance the train arrives late." />
      <Caption start={377} end={456} text="A twelve percent chance a stranger smiles back." />
      <Caption start={460} end={538} text="But certainty of numbers is not certainty of meaning." />
      <Caption start={542} end={635} text="Absolute clarity can become absolute hesitation." />
      <Caption start={639} end={762} text="When every action is a distribution, courage competes with calculation." />
      <Caption start={766} end={861} text="You stop seeing intentions, and start reading likelihoods." />
      <Caption start={865} end={917} text="Yet probabilities describe." />
      <Caption start={920} end={956} text="They do not decide." />
      <Caption start={960} end={1000} text="The dice do not act." />
      <Caption start={1003} end={1029} text="People do." />
      <Caption start={1033} end={1199} text="The courage to act, imperfectly, with incomplete certainty, is what turns odds into outcomes." />
      <Caption start={1202} end={1254} text="Meaning is not the percentage." />
      <Caption start={1257} end={1315} text="Meaning is what we do with the odds." />
</AbsoluteFill>
  );
};
