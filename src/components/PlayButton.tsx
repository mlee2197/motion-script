"use client";
import clsx from "clsx";
import gsap from "gsap";
import { useRef, useState } from "react";

interface PlayButtonProps {
  onClick: () => void;
  className?: string;
}

const PlayButton = ({ onClick, className }: PlayButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"play" | "replay">("play");

  const animatePlay = () => {
    if (!ref.current) return;
    const tl = gsap.timeline({ onComplete: () => setState("replay") });
    const select = gsap.utils.selector(ref.current);
    const circle = select("circle");
    const triangle = select(".triangle");
    const triangleContainer = select(".triangleContainer");

    tl.to(triangle, {
      borderLeftWidth: 10,
      borderTopWidth: 6,
      borderBottomWidth: 6,
      y: -3,
    });
    tl.to(triangleContainer, {
      rotate: 90,
      duration: 0.5,
      ease: "power1.in",
    });
    tl.to(triangleContainer, {
      rotate: 360,
      duration: 1.5,
      ease: "power1.out",
    });
    tl.to(
      circle,
      {
        strokeDashoffset: 105,
        duration: 1.5,
        ease: "power1.out",
      },
      "<"
    );
  };

  const animateReplay = () => {
    if (!ref.current) return;
    gsap.fromTo(ref.current, { rotate: 0 }, { rotate: 360, duration: 1 });
  };

  const handleClick = () => {
    if (state === "play") animatePlay();
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={state === "replay" ? animateReplay : undefined}
      className={clsx(
        "absolute aspect-square h-10 w-10 p-1 m-2 border-2 border-white/30 rounded-lg overflow-hidden z-10",
        className
      )}
    >
      <div ref={ref} className="relative h-full w-full">
        <svg viewBox="0 0 100 100" className="absolute w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="39"
            fill="none"
            stroke="#656565"
            strokeWidth="10"
            strokeDasharray={285}
            strokeDashoffset={285}
          />
        </svg>
        <div className="triangleContainer absolute w-full h-full top-0 left-0 ">
          <div className="triangle absolute top-[2px] left-1/2 -translate-x-1/2 border-l-[20px] border-y-[12px] border-r-0 border-t-transparent border-b-transparent border-l-[#656565]" />
        </div>
      </div>
    </button>
  );
};

export default PlayButton;
