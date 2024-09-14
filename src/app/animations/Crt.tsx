"use client";
import React, { useState, useEffect } from "react";
import ClickSound from "@/assets/switch_compressed.mp3";

const Crt = () => {
  const [on, setOn] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioObj = new Audio(ClickSound);
    setAudio(audioObj);

    return () => {
      audioObj.pause();
      audioObj.src = '';
    };
  }, []);

  const toggleTv = () => {
    if (audio) {
      audio.currentTime = 0; // Reset the audio to the beginning
      audio.play();
    }
    setOn(!on);
  };

  return (
    <div className="animation-container">
      <div className="grid grid-cols-10 w-full max-w-[420px] mx-auto h-full border-[24px] border-gray-800">
        <div className="col-span-8 border-[10px] border-x-gray-700 border-y-gray-750">
          {
            on && (
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className=" rounded-[40%/10%]">
                <filter id="turbulence" width="110%" height="110%">
                  <feTurbulence baseFrequency="0.40" type="fractalNoise">
                    <animate
                      attributeName="seed"
                      from="0"
                      to="100"
                      dur="3.5s"
                      repeatCount="indefinite"
                    />
                  </feTurbulence>
                </filter>
                <rect width="100%" height="100%" filter="url(#turbulence)" />
              </svg>
            )
          }
        </div>
        <div className="col-span-2 flex flex-col h-full border-[5px] border-x-gray-800 border-y-gray-750 bg-gray-800 box-border">
          <div className="relative top-3 w-[calc(100%-16px)] max-w-[40px] h-6 mx-auto bg-gray-750" onClick={toggleTv}>
            <div className="switch" style={{ transform: on ? 'skewY(-10deg)' : 'skewY(10deg)' }}>
              <span className="absolute top-1/2 -translate-y-1/2 right-[4px] w-2 h-2 rounded-full border border-gray-400 skew-y-12 pointer-events-none" />
              <span className="absolute top-1/2 -translate-y-1/2 left-[6px] w-[1px] h-2 bg-gray-400 -skew-y-12">
              </span>
            </div>
          </div>
          <svg width="100%" height="40%" xmlns="http://www.w3.org/2000/svg" className="relative bottom-2 mt-auto">
            <defs>
              <pattern id="tilePattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <rect width="6" height="6" fill="#2F3745" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tilePattern)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Crt;
