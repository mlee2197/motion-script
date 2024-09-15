"use client";
import PlayButton from "@/components/PlayButton";
import clsx from "clsx";
import { useState } from "react";
import FireSound from "@/assets/fire-sound_out.mp3";

const Fire = () => {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    if (play) return;
    setPlay(true);
    const audio = new Audio(FireSound);
    audio.play();
    setTimeout(() => {
      setPlay(false);
    }, 2900);
  };

  return (
    <div className="animation-container bg-[#1b1823]">
      <PlayButton onClick={handlePlay} />
      <div
        className={clsx(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-400 rounded-full aspect-square transition-opacity duration-300",
          play ? "opacity-20" : "opacity-0"
        )}
        style={{
          background: "radial-gradient(circle, yellow , transparent 75%)",
        }}
      />

      {play && (
        <svg className="relative w-full h-full">
          <filter id="fire" width="100%" height="100%">
            <feTurbulence
              id="turbulence-fire"
              baseFrequency="0.1 0.1"
              numOctaves="10"
            ></feTurbulence>
            <feDisplacementMap
              id="fire-displacement-map"
              in="SourceGraphic"
              in2="NOISE"
              scale="100"
            ></feDisplacementMap>
            <animate
              href="#turbulence-fire"
              attributeName="baseFrequency"
              dur="3s"
              calcMode="spline"
              from="0.005 0.005"
              to="0.025 0.025"
              keyTimes="0;1"
              keySplines="0.6 0.3 0.9 0.7"
              repeatCount="indefinite"
            />
            <animate
              href="#fire-displacement-map"
              attributeName="scale"
              dur="3s"
              calcMode="spline"
              values="1000;100;100;1000"
              keyTimes="0;0.05;0.9;1"
              keySplines="0.4 0 0.6 1; 0 0 1 1; 0.4 0 0.6 1"
              repeatCount="indefinite"
            />
          </filter>

          <circle
            cx="50%"
            cy="50%"
            r="80"
            fill="red"
            filter="url(#fire)"
            stroke="darkred"
            strokeWidth="5"
            className="rotate-45 origin-center"
          />
          <circle
            cx="50%"
            cy="50%"
            r="40"
            fill="orange"
            filter="url(#fire)"
            stroke="darkorange"
            strokeWidth="5"
            className="rotate-45 origin-center"
          />
          <circle
            cx="50%"
            cy="50%"
            r="20"
            fill="yellow"
            filter="url(#fire)"
            className="rotate-45 origin-center"
          />
        </svg>
      )}
      <div
        className={clsx(
          "absolute bottom-10 left-1/2 -translate-x-[112px] w-36 h-8 bg-gradient-to-t from-[#241003] rotate-45",
          play ? "to-orange-900" : "to-orange-950"
        )}
      />
      <div
        className={clsx(
          "absolute bottom-10 left-1/2 -translate-x-[32px] w-36 h-8 bg-gradient-to-t from-[#241003] -rotate-45",
          play ? "to-orange-900" : "to-orange-950"
        )}
      />
      <div
        className={clsx(
          "absolute bottom-5 left-1/2 -translate-x-1/2 w-56 h-8 bg-gradient-to-t from-[#241003]",
          play ? "to-orange-900" : "to-orange-950"
        )}
      />
    </div>
  );
};

export default Fire;
