"use client";
import { useState } from "react";

const INTERCEPT = -0.25;
const CURSOR_SIZE = 200;

type MixBlendMode =
  | "normal"
  | "multiply"
  | "color"
  | "luminosity"
  | "darken"
  | "screen"
  | "overlay";

const Kaleidoscope = () => {
  const [mixBlendMode, setMixBlendMode] = useState<MixBlendMode>("normal");
  return (
    <div className="animation-container">
      <select
        className="absolute top-1 left-1 z-10 bg-black"
        onChange={(e) => setMixBlendMode(e.target.value as MixBlendMode)}
      >
        <option value="normal">normal</option>
        <option value="color">color</option>
        <option value="luminosity">luminosity</option>
        <option value="darken">darken</option>
        <option value="screen">screen</option>
        <option value="overlay">overlay</option>
      </select>
      <div className="h-full bg-black" style={{ mixBlendMode: mixBlendMode }}>
        <svg
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          className="relative mx-auto top-1/2 -translate-y-1/2"
        >
          <filter id="filter--turbulent-cursor">
            <feTurbulence
              width={CURSOR_SIZE * 2}
              height={CURSOR_SIZE * 2}
              baseFrequency="0.025"
              result="CursorNoise"
              x="-25"
              y="-25"
            >
              <animate
                attributeName="baseFrequency"
                calcMode="spline"
                dur="18s"
                keyTimes="0; 0.5; 1"
                keySplines="0.3 0 0.7 1;0.4 0 0.6 1"
                values="0.02; 0.07; 0.020"
                repeatCount="indefinite"
              />
            </feTurbulence>

            <feGaussianBlur in="CursorNoise" stdDeviation={INTERCEPT} />
          </filter>
          <g
            id="turbulent-cursor"
            className="flex items-center justify-center contrast-[1000%]"
            x="50%"
            y="50%"
          >
            <rect
              width={CURSOR_SIZE}
              height={CURSOR_SIZE}
              filter="url(#filter--turbulent-cursor)"
              style={{
                clipPath: "circle(60px at 50% 50%)",
                transformOrigin: `${CURSOR_SIZE / 2}px ${CURSOR_SIZE / 2}px`,
                animation: "spin-reverse 12s linear infinite",
              }}
            />
            <rect
              width={CURSOR_SIZE}
              height={CURSOR_SIZE}
              filter="url(#filter--turbulent-cursor)"
              style={{
                clipPath: "circle(90px at 50% 50%)",
                transformOrigin: `${CURSOR_SIZE / 2}px ${CURSOR_SIZE / 2}px`,
                animation: "spin 12s linear infinite",
              }}
            />
            <rect
              width={CURSOR_SIZE}
              height={CURSOR_SIZE}
              filter="url(#filter--turbulent-cursor)"
              style={{
                clipPath: "circle(90px at 50% 50%)",
                transformOrigin: `${CURSOR_SIZE / 2}px ${CURSOR_SIZE / 2}px`,
                animation: "spin-reverse 7s linear infinite",
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Kaleidoscope;
