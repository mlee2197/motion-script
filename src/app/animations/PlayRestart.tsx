"use client";
import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import PlayButton from "@/components/PlayButton";

import Rocket from "@/assets/rocket.svg";
import Moon from "@/assets/moon.svg";

const PlayRestart = () => {
  const ref = useRef<HTMLDivElement>(null);

  const animatePlay = () => {
    if (!ref.current) return;
    const tl = gsap.timeline();
    const select = gsap.utils.selector(ref.current);
    const circle = select("circle");
    const triangle = select(".triangle");
    const triangleContainer = select(".triangleContainer");
    const moon = select(".moon");
    const duration = 2.5;
    tl.set([circle, triangle, triangleContainer, moon], { clearProps: true });
    tl.to(triangle, {
      scale: 0.5,
      y: -40,
      duration: duration,
      delay: 0.5,
    });
    tl.to(
      triangleContainer,
      {
        rotate: 360,
        duration: duration,
      },
      "<"
    );
    tl.to(
      moon,
      {
        scale: 1,
        duration: duration,
      },
      "<"
    );
    tl.fromTo(
      circle,
      {
        transformOrigin: "center",
        scale: 0.1,
      },
      {
        strokeDashoffset: 142,
        strokeWidth: 8,
        scale: 1,
        duration: duration,
      },
      "<+0.1"
    );
  };

  return (
    <div className="animation-container">
      <PlayButton onClick={animatePlay} />
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e5b346" />
            <stop offset="90%" stopColor="#ed463a" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="33"
          fill="none"
          stroke="url(#circleGradient)"
          strokeWidth="30"
          strokeDasharray={285}
          strokeDashoffset={285}
          strokeLinecap="round"
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </svg>
      <Image
        src={Moon}
        alt="Moon"
        className="moon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.1] rounded-full shadow-[0_0_8px_8px_rgba(255,255,255,0.1)]"
        width={80}
        height={80}
      />
      <div className="triangleContainer absolute w-full h-full top-0 left-0 ">
        <Image
          src={Rocket}
          alt="Rocket"
          className="triangle absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 origin-bottom"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
};

export default PlayRestart;
