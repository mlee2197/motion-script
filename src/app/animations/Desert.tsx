"use client";
import useMousePosition from "@/hooks/useMousePosition";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

import Bone from "@/assets/bone.svg";
import Diamond from "@/assets/diamond.svg";
import Skull from "@/assets/skull.svg";
import Snake from "@/assets/snake.svg";
import { GsapQuickSetter } from "@/types/types";

const Desert = () => {
  const { ref, mouseX, mouseY } = useMousePosition();
  const setClipPath = useRef<GsapQuickSetter | null>(null);

  useEffect(() => {
    setClipPath.current = gsap.quickSetter("#treasure-container", "clipPath") as GsapQuickSetter;
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      setClipPath.current?.(`circle(30px at ${mouseX}px ${mouseY}px)`);
    }, ref);
    return () => ctx.revert();
  }, [mouseX, mouseY, ref]);

  return (
    <div ref={ref} className="relative h-[248px] overflow-hidden cursor-crosshair">
      <svg width="500" height="250" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise" x="0%" y="0%" width="200%" height="100%">
          <feTurbulence baseFrequency="0.02 0.02" result="NOISE" />
          <feDiffuseLighting in="NOISE" lightingColor="#EBD0A2" surfaceScale="1">
            <feDistantLight azimuth="45" elevation="25" />
          </feDiffuseLighting>
        </filter>
      </svg>
      <div
        className="absolute top-0 left-0 w-[200%] h-full"
        style={{
          filter: "url(#noise)",
        }}
      />
      <div id="treasure-container" className="absolute top-0 left-0 w-full h-full bg-black mix-blend-hue" style={{ clipPath: "circle(30px at 50% 50%)" }}>
        <div>
          <Image src={Bone} alt="bone" width={75} height={50} className="absolute left-1/2 top-1/2 -translate-x-1/2" />
          <Image src={Bone} alt="bone" width={60} height={40} className="absolute left-1/4 top-1/4 -translate-x-1/2 rotate-90" />
          <Image src={Diamond} alt="diamond" width={40} height={30} className="absolute left-3/4 bottom-[20%] rotate-12" />
          <Image src={Skull} alt="skull" width={40} height={30} className="absolute right-1/4 top-[10%] -rotate-12" />
          <Image src={Snake} alt="snake" width={40} height={30} className="absolute left-[10%] bottom-[15%]" />
        </div>
      </div>

    </div>
  );
};

export default Desert;
