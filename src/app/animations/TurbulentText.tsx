"use client";
import PlayButton from "@/components/PlayButton";
import gsap from "gsap";

const TurbulentText = () => {
  const handleClick = () => {
    const turb = document.querySelector("#turbulent-text--filter feTurbulence");
    gsap.fromTo(
      turb,
      {
        attr: {
          baseFrequency: "0 0",
        },
      },
      {
        attr: {
          baseFrequency: "0 0.1",
        },
        duration: 0.35,
        ease: "linear",
        yoyo: true,
        repeat: 1,
      }
    );
  };

  return (
    <div className="animation-container">
      <PlayButton onClick={handleClick} />
      <svg id="turbulent-text--svg" width={"100%"} height={"100%"}>
        <defs>
          <linearGradient
            id="turbulent-text--gradient"
            x1="0%"
            y1="20%"
            x2="0%"
            y2="75%"
          >
            <stop offset="0%" style={{ stopColor: "white" }} />
            <stop offset="12.5%" style={{ stopColor: "white" }} />
            <stop offset="12.5%" style={{ stopColor: "transparent" }} />
            <stop offset="25%" style={{ stopColor: "transparent" }} />
            <stop offset="25%" style={{ stopColor: "white" }} />
            <stop offset="37.5%" style={{ stopColor: "white" }} />
            <stop offset="37.5%" style={{ stopColor: "transparent" }} />
            <stop offset="50%" style={{ stopColor: "transparent" }} />
            <stop offset="50%" style={{ stopColor: "white" }} />
            <stop offset="62.5%" style={{ stopColor: "white" }} />
            <stop offset="62.5%" style={{ stopColor: "transparent" }} />
            <stop offset="75%" style={{ stopColor: "transparent" }} />
            <stop offset="75%" style={{ stopColor: "white" }} />
            <stop offset="87.5%" style={{ stopColor: "white" }} />
            <stop offset="87.5%" style={{ stopColor: "transparent" }} />
            <stop offset="100%" style={{ stopColor: "transparent" }} />
          </linearGradient>
        </defs>
        <filter id="turbulent-text--filter">
          <feTurbulence
            baseFrequency="0 0"
            type="fractalNoise"
            numOctaves="6"
            result="noise"
          ></feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="R"
          ></feDisplacementMap>
        </filter>
        <text
          y="57%"
          x="15%"
          filter="url(#turbulent-text--filter)"
          fill="url(#turbulent-text--gradient)"
          fontSize={64}
          className="font-shrikhand"
          stroke="white"
          strokeWidth={2}
          onClick={handleClick}
        >
          Glitched
        </text>
      </svg>
    </div>
  );
};

export default TurbulentText;
