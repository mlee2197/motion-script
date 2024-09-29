"use client";

import useMousePosition from "@/hooks/useMousePosition";
import { GsapQuickSetter } from "@/types/types";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Pixel = () => {
  const { ref, mouseX, mouseY } = useMousePosition();
  const setClipPath = useRef<GsapQuickSetter | null>(null);
  useEffect(() => {
    setClipPath.current = gsap.quickSetter("#pikachu", "clipPath") as GsapQuickSetter;
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      setClipPath.current?.(`circle(45px at ${mouseX}px ${mouseY}px)`);
    }, ref);
    return () => ctx.revert();
  }, [mouseX, mouseY, ref]);
  
  useEffect(() => {
    const morph = document.querySelector("#filter-pixel--morph");
    const ctx = gsap.context(() => {
      gsap.fromTo(morph, {
        attr: { radius: 1 }
      }, {
        attr: { radius: 4 },
        repeat: -1,
        duration: 6,
        ease: "linear"
      })
    }, []);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="animation-container">
      <svg x={0} y={0} height={"100%"} width={"100%"}>
        <filter id="filter-pixel">
          <feFlood x="4" y="4" height="1" width="1" />
          <feComposite width="10" height="10" />
          <feTile result="a" />
          <feComposite in="SourceGraphic" in2="a" operator="in" />
          <feMorphology id="filter-pixel--morph" operator="dilate" radius="1" />
        </filter>
        <image width="100%" height="100%"
          preserveAspectRatio="xMidYMid slice"
          filter="url(#filter-pixel)"
          href="/pikachu.webp" />
        <g id="pikachu">
          <rect fill="#232323" width={"100%"} height={"100%"} />
          <image width="100%" height="100%"
            preserveAspectRatio="xMidYMid slice"
            href="/pikachu.webp"
            className="absolute top-0 left-0"
          />
        </g>
      </svg>
    </div>
  )
};

export default Pixel;