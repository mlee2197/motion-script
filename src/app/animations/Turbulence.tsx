"use client";
import PlayButton from "@/components/PlayButton";
import gsap from "gsap";
import { useRef } from "react";

const Turbulence = () => {
  const ref = useRef(null);
  const animate = () => {
    gsap.fromTo(
      ref.current,
      {
        attr: { baseFrequency: "0.05 0.05" },
      },
      {
        attr: { baseFrequency: "0.04 0.04" },
        duration: 1,
        ease: "power2.inOut",
      }
    );
  };

  return (
    <div className="relative h-[248px] overflow-hidden">
      <PlayButton onClick={animate} />
      <svg width="500" height="250">
        <filter id="noise" x="0%" y="0%" width="200%" height="100%">
          <feTurbulence ref={ref} baseFrequency="0.06 0.06" result="noise" seed="1" />
          <feDiffuseLighting in="noise" lightingColor="#e7dfc6" surfaceScale="1">
            <feDistantLight azimuth="45" elevation="25" />
          </feDiffuseLighting>
        </filter>
      </svg>
      <div id="test" ref={ref} className="absolute top-0 left-0 w-[200%] h-full" />
    </div>
  );
};

export default Turbulence;
