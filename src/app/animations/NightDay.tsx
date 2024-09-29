"use client";

import useMousePosition from "@/hooks/useMousePosition";
import { GsapQuickSetter } from "@/types/types";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const NightDay = () => {
  const { mouseY, ref } = useMousePosition();
  const setHeight = useRef<GsapQuickSetter | null>(null);
  const containerHeight = useRef<number>(0);

  useEffect(() => {
    if (!ref.current) return;
    setHeight.current = gsap.quickSetter("#stroke-sun", "height", "%") as GsapQuickSetter;
    containerHeight.current = ref.current.getBoundingClientRect().height;
  }, [ref]);

  useEffect(() => {
    if (!setHeight.current || !ref.current) return;
    const percentage = (mouseY / containerHeight.current) * 100;
    setHeight.current(percentage > 99 ? 100 : percentage);
  }, [mouseY, setHeight, ref]);

  return (
    <div ref={ref} className="animation-container">
      {/* light */}
      <div className="absolute bottom-0 w-full h-[100%] bg-[#96a5d0]">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="50" cy="50" r="20" fill="#E9D37C" stroke="#dbb084" strokeWidth={4} />
          {/* Sun rays */}
          <rect x="47" y="8" width="6" height="16" rx="3" fill="#E9D37C" stroke="#dbb084" strokeWidth={2} />
          <rect x="47" y="8" width="6" height="16" rx="3" fill="#E9D37C" transform="rotate(60 50 50)" stroke="#dbb084" strokeWidth={2} />
          <rect x="47" y="8" width="6" height="16" rx="3" fill="#E9D37C" transform="rotate(120 50 50)" stroke="#dbb084" strokeWidth={2} />
          <rect x="47" y="8" width="6" height="16" rx="3" fill="#E9D37C" transform="rotate(180 50 50)" stroke="#dbb084" strokeWidth={2} />
          <rect x="47" y="8" width="6" height="16" rx="3" fill="#E9D37C" transform="rotate(240 50 50)" stroke="#dbb084" strokeWidth={2} />
          <rect x="47" y="8" width="6" height="16" rx="3" fill="#E9D37C" transform="rotate(300 50 50)" stroke="#dbb084" strokeWidth={2} />
        </svg>
      </div>

      {/* dark */}
      <div id="stroke-sun" className="absolute w-full h-[100%] bg-black overflow-hidden">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-[248px]">
          <circle cx="50" cy="50" r="20" stroke="#dbb084" strokeWidth={2} strokeDasharray={"8"} strokeLinecap="round" />
          {/* Sun rays */}
          <rect x="47" y="8" width="6" height="16" rx="3" stroke="#dbb084" strokeWidth={1} strokeDasharray={"3"} strokeLinecap="round" />
          <rect x="47" y="8" width="6" height="16" rx="3" transform="rotate(60 50 50)"  stroke="#dbb084" strokeWidth={1} strokeDasharray={"3"} strokeLinecap="round" />
          <rect x="47" y="8" width="6" height="16" rx="3" transform="rotate(120 50 50)" stroke="#dbb084" strokeWidth={1} strokeDasharray={"3"} strokeLinecap="round" />
          <rect x="47" y="8" width="6" height="16" rx="3" transform="rotate(180 50 50)" stroke="#dbb084" strokeWidth={1} strokeDasharray={"3"} strokeLinecap="round" />
          <rect x="47" y="8" width="6" height="16" rx="3" transform="rotate(240 50 50)" stroke="#dbb084" strokeWidth={1} strokeDasharray={"3"} strokeLinecap="round" />
          <rect x="47" y="8" width="6" height="16" rx="3" transform="rotate(300 50 50)" stroke="#dbb084" strokeWidth={1} strokeDasharray={"3"} strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default NightDay;
