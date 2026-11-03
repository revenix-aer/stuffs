import React from "react";
import { Composition } from "remotion";
import { FullVisual } from "./FullVisual";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FullVisual"
        component={FullVisual}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
