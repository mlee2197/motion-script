"use client";

import PlayButton from "@/components/PlayButton";
import { gsap } from "gsap";
import { useRef } from "react";

const OrigamiHeart = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!ref.current) return;
    const tl = gsap.timeline();
    const topTriangle = ref.current.querySelector(".t-triangle");
    const leftBox = ref.current.querySelector(".l-box");
    const rightBox = ref.current.querySelector(".r-box");
    const tlTriangle = ref.current.querySelector(".tl-triangle");
    const trTriangle = ref.current.querySelector(".tr-triangle");
    const brTriangle = ref.current.querySelector(".br-triangle");
    const blTriangle = ref.current.querySelector(".bl-triangle");
    const bBoxContainer = ref.current.querySelector(".b-box-container");
    const bBox = ref.current.querySelector(".b-box");
    const tFold = ref.current.querySelector(".t-fold");
    const lFold = ref.current.querySelector(".l-fold");
    const rFold = ref.current.querySelector(".r-fold");

    const duration = 1.5;
    const ease = "power1.inOut";
    tl.set(
      [
        topTriangle,
        leftBox,
        rightBox,
        tlTriangle,
        trTriangle,
        bBoxContainer,
        bBox,
        brTriangle,
        blTriangle,
        tFold,
        lFold,
        rFold,
      ],
      {
        clearProps: true,
      }
    );

    tl.to(topTriangle, {
      rotateY: 180,
      delay: 0.5,
      ease: ease,
      duration: duration,
    });
    tl.to(
      topTriangle,
      {
        borderRightColor: "red",
        duration: 0,
      },
      "<+50%"
    );

    tl.to([blTriangle, brTriangle, bBoxContainer], {
      rotateY: 180,
      duration: duration,
      ease: ease,
    });
    tl.to(
      [blTriangle, brTriangle],
      {
        borderLeftColor: "red",
        duration: 0,
      },
      "<+50%"
    );
    tl.to(
      bBox,
      {
        backgroundColor: "red",
        duration: 0,
      },
      "<"
    );

    tl.to([trTriangle, tlTriangle], {
      borderLeftColor: "red",
      borderTopColor: "red",
      duration: 0,
    });
    tl.to([blTriangle, brTriangle], {
      display: "none",
      duration: 0,
    });

    tl.to([leftBox, tlTriangle], {
      rotateX: 180,
      duration: duration,
      ease: ease,
    });
    tl.to(
      [trTriangle, rightBox],
      {
        rotateY: 180,
        duration: duration,
        ease: ease,
      },
      "<"
    );
    tl.to(
      [leftBox, rightBox],
      {
        backgroundColor: "red",
        duration: 0,
      },
      "<+50%"
    );

    tl.to([tFold, lFold, rFold], {
      zIndex: 1,
      duration: 0,
    });

    tl.to([tFold, lFold, rFold], {
      translateX: 0,
      duration,
      ease: "power1.out",
    });
  };

  return (
    <div className="animation-container flex justify-center items-center">
      <PlayButton onClick={handleClick} />
      <div ref={ref} className="relative w-[150px] h-[150px] rotate-45">
        <div className="t-fold absolute top-4 -left-6 -translate-x-[15px] w-24 h-5 bg-[#232323] -rotate-45 z-0"></div>
        <div className="l-fold absolute bottom-4 -left-6 -translate-x-[15px] w-24 h-5 bg-[#232323] rotate-45 z-0"></div>
        <div className="r-fold absolute top-4 -right-6 translate-x-[15px] w-24 h-5 bg-[#232323] rotate-45 z-0"></div>

        <div className="absolute top-0 left-0 w-[100px] h-[100px] bg-gradient-to-br from-transparent via-transparent via-[48%] to-[48%] to-red-200"></div>
        <div className="t-triangle absolute -top-1/2 -left-1/2 -translate-x-[13px] translate-y-[55px] border-[68px] border-transparent border-r-red-200 origin-right rotate-45"></div>

        <div className="l-box absolute bottom-0 left-0 h-[50px] w-[50px] bg-red-200 origin-top"></div>
        <div className="r-box absolute top-0 right-0 h-[50px] w-[50px] bg-red-200 origin-left"></div>

        <div className="tr-triangle absolute bottom-1/2 translate-y-1/2 -right-[0px] border-[25px] border-transparent border-l-red-200 border-t-red-200 origin-left"></div>
        <div className="tl-triangle absolute bottom-0 right-1/2 translate-x-1/2 border-[25px] border-transparent border-l-red-200 border-t-red-200 origin-top"></div>

        <div className="b-box-container absolute bottom-[25px] -right-[0px] h-[50px] w-[50px] rotate-45 origin-left">
          <div className="b-box absolute bottom-[0.5px] -right-[11px] h-[50px] w-[50px] bg-red-200 rotate-45" />
        </div>
        <div className="bl-triangle absolute bottom-0 right-0 translate-y-[10.5px] -translate-x-[4px] border-[35.5px] border-transparent border-l-red-200 origin-left rotate-45"></div>
        <div className="br-triangle absolute bottom-[50px] -right-[50px] translate-y-[10.5px] -translate-x-[4px] border-[35.5px] border-transparent border-l-red-200 origin-left rotate-45"></div>
      </div>
    </div>
  );
};

export default OrigamiHeart;
