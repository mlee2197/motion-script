"use client";

import PlayButton from "@/components/PlayButton";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const OrigamiHeart = () => {
  const ref = useRef<HTMLDivElement>(null);
  // const ref = useRef<HTMLCanvasElement>(null);
  const handleClick = () => {
    if (!ref.current) return;
    const tl = gsap.timeline();
    const topTriangle = ref.current.querySelector(".t-triangle");
    const leftBox = ref.current.querySelector(".l-box");
    const rightBox = ref.current.querySelector(".r-box");
    const tlTriangle = ref.current.querySelector(".tl-triangle");
    const trTriangle = ref.current.querySelector(".tr-triangle");
    const bBox = ref.current.querySelector(".b-box");
    const brTriangle = ref.current.querySelector(".br-triangle");
    const blTriangle = ref.current.querySelector(".bl-triangle");

    tl.fromTo(topTriangle, {
      rotateY: 0,
    }, {
      rotateY: 180,
      delay: 0.5,
    });
    tl.fromTo(blTriangle, {
      rotateY: 0,
    }, {
      rotateY: 180,
      duration: 3,

    });
    tl.fromTo(brTriangle, {
      rotateY: 0,
    }, {
      rotateY: 180,
      duration: 3,
    }, "<");
    tl.fromTo(bBox, {

      // transformOrigin: "top",
      rotateY: 0,
    }, {
      rotateY: 180,
      duration: 3,
    }, "<");

  };

  return (
    <div className="animation-container flex justify-center items-center">
      <PlayButton onClick={handleClick} />
      {/* <canvas ref={ref} width={150} height={150}>

      </canvas> */}
      <div ref={ref} className="relative w-[150px] h-[150px] bg-white/20">
        <div className="absolute top-0 left-0 w-[100px] h-[100px] bg-gradient-to-br from-transparent via-transparent via-[38%] to-[38%] to-blue-400"></div>
        <div className="t-triangle absolute -top-1/2 -left-1/2 translate-x-[5px] translate-y-[59.5px] border-[54px] border-transparent border-r-white origin-right rotate-45"></div>

        <div className="l-box absolute bottom-0 left-0 h-[50px] w-[50px] bg-purple-400"></div>
        <div className="r-box absolute top-0 right-0 h-[50px] w-[50px] bg-pink-400"></div>

        <div className="tr-triangle absolute bottom-[50px] right-0 translate-y-[10.5px] -translate-x-[25px] border-[35.5px] border-transparent border-r-orange-400 origin-right rotate-45"></div>
        <div className="tl-triangle absolute bottom-0 right-[50px] translate-y-[10.5px] -translate-x-[25px] border-[35.5px] border-transparent border-r-orange-400 origin-right rotate-45"></div>

        {/* <div className="b-box absolute -bottom-0 -right-0 h-[50px] w-[50px] bg-green-400 rotate-45 origin-top"></div> */}
        <div className="b-box absolute bottom-[25px] -right-[0px] h-[50px] w-[50px] rotate-45 origin-left">
          <div className="absolute bottom-0 -right-[10.5px] h-[50px] w-[50px] bg-green-400 rotate-45" />
        </div>
        <div className="bl-triangle absolute bottom-0 right-0 translate-y-[10.5px] -translate-x-[4px] border-[35.5px] border-transparent border-l-yellow-400 origin-left rotate-45"></div>
        <div className="br-triangle absolute bottom-[50px] -right-[50px] translate-y-[10.5px] -translate-x-[4px] border-[35.5px] border-transparent border-l-yellow-400 origin-left rotate-45"></div>
      </div>
    </div>
  );
};

export default OrigamiHeart;