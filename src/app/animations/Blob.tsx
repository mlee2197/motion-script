"use client";
import useMousePosition from "@/hooks/useMousePosition";
import { GsapQuickSetter } from "@/types/types";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Blob = () => {
  const { ref, mouseX, mouseY } = useMousePosition();
  const setX = useRef<GsapQuickSetter | null>(null);
  const setY = useRef<GsapQuickSetter | null>(null);

  useEffect(() => {
    setX.current = gsap.quickSetter(".mouse-blob", "x", "px") as GsapQuickSetter;
    setY.current = gsap.quickSetter(".mouse-blob", "y", "px") as GsapQuickSetter;
  }, []);

  useEffect(() => {
    setX.current?.(mouseX - 20);
    setY.current?.(mouseY - 20);
  }, [mouseX, mouseY]);

  return <div ref={ref} className="animation-container cursor-crosshair bg-white contrast-[1000%]">
    <div className="mouse-blob w-12 h-12 rounded-full bg-black blur-lg" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full grid grid-cols-5 grid-rows-5 gap-4">
      {
        Array.from({ length: 25 }).map((_, index) => {
          return (
            <div
              key={`blob-${index}`}
              className="w-12 h-12 rounded-full bg-black blur-lg"
            />
          )
        })
      }
    </div>
  </div>;
};

export default Blob;