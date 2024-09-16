"use client";
import useMousePosition from "@/hooks/useMousePosition";
import gsap from "gsap";
import { useEffect } from "react";

const INTERCEPT = -0.25;
const CURSOR_SIZE = 200;
const Cursor = () => {
  const { ref, mouseX, mouseY } = useMousePosition();
  const xSet = gsap.quickTo("#turbulent-cursor", "x");
  const ySet = gsap.quickTo("#turbulent-cursor", "y");
  useEffect(() => {
    xSet(mouseX - (CURSOR_SIZE / 2));
    ySet(mouseY - (CURSOR_SIZE / 2));
  }, [mouseX, mouseY]);

  return (
    <div ref={ref} className="animation-container">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="filter--turbulent-cursor">
          <feTurbulence width={CURSOR_SIZE} height={CURSOR_SIZE} baseFrequency="0.025" result="CursorNoise" x="-25" y="-25">
            <animate
              attributeName="baseFrequency"
              calcMode="spline"
              dur="10s"
              keyTimes="0; 0.5; 1"
              keySplines="0.3 0 0.7 1;0.4 0 0.6 1"
              values="0.02; 0.07; 0.020"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feComponentTransfer in="CursorNoise" result="CursorContrast">
            <feFuncR type="linear" slope="1.5" intercept={INTERCEPT} />
            <feFuncG type="linear" slope="1.5" intercept={INTERCEPT} />
            <feFuncB type="linear" slope="1.5" intercept={INTERCEPT} />
          </feComponentTransfer>
          <feGaussianBlur in="CursorContrast" stdDeviation={3} />
        </filter>
        <g id="turbulent-cursor" className="flex items-center justify-center contrast-[1000%]">
          <rect width={CURSOR_SIZE} height={CURSOR_SIZE} filter="url(#filter--turbulent-cursor)" style={{
            clipPath: "circle(30px at 50% 50%)",
            transformOrigin: `${CURSOR_SIZE / 2}px ${CURSOR_SIZE / 2}px`,
            animation: "spin 12s linear infinite",
          }} />
        </g>
      </svg>
    </div>
  )
}

export default Cursor;