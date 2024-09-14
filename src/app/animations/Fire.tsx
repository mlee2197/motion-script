"use client";
import PlayButton from "@/components/PlayButton";
import clsx from "clsx";
import { useState } from "react";

const Fire = () => {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    if (play) return;
    setPlay(true);
    // const audio = new Audio("/audio/fire.mp3");
    // audio.play();
    setTimeout(() => {
      setPlay(false);
    }, 7500);
  };

  return (
    <div className="animation-container bg-[#1b1823]">
      <PlayButton onClick={handlePlay} />
      {play && <svg className="relative w-full h-full">
        <filter id="fire" width="100%" height="100%">
          <feTurbulence id="turbulence-fire" baseFrequency="0.1 0.1" numOctaves="10">
          </feTurbulence>
          <feDisplacementMap id="fire-displacement-map" in="SourceGraphic" in2="NOISE" scale="100"></feDisplacementMap>
          <animate
            href="#turbulence-fire"
            attributeName="baseFrequency"
            dur="8s"
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
            dur="8s"
            calcMode="spline"
            values="1000;100;100;1000"
            keyTimes="0;0.05;0.9;1"
            keySplines="0.4 0 0.6 1; 0 0 1 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </filter>
        
        {/* <circle cx="60%" cy="-10%" r="80" fill="red" filter="url(#fire)" stroke="darkred" strokeWidth="5" className="rotate-45" /> */}
        <circle cx="60%" cy="-10%" r="80" fill="red" filter="url(#fire)" stroke="darkred" strokeWidth="5" className="rotate-45" />
        <circle cx="65.5%" cy="-3%" r="60" fill="orange" filter="url(#fire)" stroke="darkorange" strokeWidth="5" className="rotate-45" />
        <circle cx="71%" cy="4%" r="40" fill="yellow" filter="url(#fire)" className="rotate-45" />
      </svg>
      }
      <div className={
        clsx("absolute bottom-10 left-1/2 -translate-x-[127px] w-36 h-8 bg-gradient-to-t from-[#241003] rotate-45", play ? "to-orange-900" : "to-orange-950")} />
      <div className={
        clsx("absolute bottom-10 left-1/2 -translate-x-[37px] w-36 h-8 bg-gradient-to-t from-[#241003] -rotate-45", play ? "to-orange-900" : "to-orange-950")} />
      <div className={
        clsx("absolute bottom-5 left-1/2 -translate-x-1/2 w-56 h-8 bg-gradient-to-t from-[#241003] to-orange-950", play ? "to-orange-900" : "to-orange-950")} />
    </div>
  );
};

export default Fire;