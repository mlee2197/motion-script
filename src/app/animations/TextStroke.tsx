"use client";

import PlayButton from "@/components/PlayButton";
import gsap from "gsap";
import { useRef } from "react";

const TextStroke = () => {
  const ref = useRef(null);
  const animate = () => {
    if (!ref.current) return;
    gsap.fromTo(ref.current, {
      strokeDashoffset: 300
    }, {
      strokeDashoffset: 0,
      duration: 3,

    })
  }

  return (
    <div className="animation-container">
      <PlayButton onClick={animate} />
      <svg height={"100%"} width={"100%"} style={{
        animation: "hue-rotate 3s linear infinite"
      }}>
        <defs>
          <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "red", stopOpacity: 1 }} />
            <stop offset="20%" style={{ stopColor: "orange", stopOpacity: 1 }} />
            <stop offset="40%" style={{ stopColor: "yellow", stopOpacity: 1 }} />
            <stop offset="60%" style={{ stopColor: "green", stopOpacity: 1 }} />
            <stop offset="80%" style={{ stopColor: "blue", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "purple", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <text
          ref={ref}
          x={"50%"}
          y={"50%"}
          textAnchor="middle"
          dominantBaseline="middle"
          className="absolute top-1/2 left-1/2"
          fill="transparent"
          fontSize={60}
          fontFamily="shrikhand"
          stroke="url(#rainbow-gradient)"
          strokeDasharray={"300 0 0"}
          strokeDashoffset={300}
        >
          Tax Fraud
        </text>
      </svg>
    </div>
  )
}

export default TextStroke;