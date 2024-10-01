"use client";
import PlayButton from "@/components/PlayButton";
import gsap from "gsap";
import { useState } from "react";

const RippleEffect = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const animate = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    const circles = document.querySelectorAll('.water-circle');
    const meteor = document.getElementById("meteor");
    const tl = gsap.timeline({ onComplete: () => { setIsPlaying(false) } });
    tl.fromTo(meteor, {
      y: "0",
    }, {
      y: 300,
      duration: 1.25
    })
    tl.fromTo(circles, {
      y: 0,
    }, {
      y: -30,
      ease: "bounce.inOut",
      duration: 0.25,
      stagger: {
        grid: [7, 1],
        from: "center",
        amount: 0.25
      }
    }, "<+30%")
    tl.to(circles, {
      y: 0,
      ease: "bounce.out",
      duration: 2,
      stagger: {
        grid: [7, 1],
        from: "center",
        amount: 0.25
      }
    }, "<+60%");
  }

  return (
    <div className="animation-container">
      <PlayButton onClick={animate} />
      <div className="relative h-full grid grid-cols-6 contrast-[2000%]">
        <div id="meteor" className="absolute -top-1/4 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-20 rounded-full bg-blue-900 blur-md" />
        </div>

        {[...Array(6)].map((_, index) => (
          <div key={index} className="w-[120%] h-16 translate-x-[18%] -m-4 rounded-full bg-gray-400"></div>
        ))}

        <div className="absolute bottom-0 left-0 grid grid-cols-7 w-full h-10 blur-md">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="water-circle translate-x-[10%] w-[110%] h-36 -m-4 rounded-full bg-blue-900"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RippleEffect;