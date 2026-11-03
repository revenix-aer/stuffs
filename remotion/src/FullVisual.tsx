import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

export const FullVisual: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const scale = spring({ frame, fps: 30, config: { damping: 200 } });
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0b0f1a",
        color: "#f5f7fa",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 64,
        fontFamily: "sans-serif",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      Remotion render ready
    </AbsoluteFill>
  );
};
