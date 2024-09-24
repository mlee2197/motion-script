"use client";

import { ChangeEvent, useState } from "react";

const CLIP_PATHS = {
  4: "rhombus-2",
  5: "pentagon-2",
  6: "hexagon-2",
  7: "heptagon-2",
  8: "octagon-2",
  9: "nonagon-2"
}
const MIN_VALUE = 4;
const MAX_VALUE = 9;
const ShapeClip = () => {
  const [numSides, setNumSides] = useState(MIN_VALUE);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumSides(parseInt(e.target.value));
  }

  return (
    <div className="animation-container p-6">
      <div className="absolute top-1 left-2 flex items-center gap-1">
        <span>{MIN_VALUE}</span>
        <input type="range" value={numSides} min={MIN_VALUE} max={MAX_VALUE} onChange={handleChange} />
        <span>{MAX_VALUE}</span>
      </div>
      <div className={"h-full aspect-square mt-2 mx-auto transition-all " + CLIP_PATHS[numSides as keyof typeof CLIP_PATHS]} />
    </div>
  )
}

export default ShapeClip;