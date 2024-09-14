import SunsetImage from "@/assets/sunset.webp";
import Image from "next/image";

const Sunset = () => {
  return (
    <div className="animation-container">
      <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#d7ba98] to-[#fe804d]">
        <div className="sun-rays" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]" />
      </div>
      <svg className="absolute bottom-0 left-0 w-full h-1/2">
        <filter id="water-ripples" width="200%" height="100%">
          <feTurbulence
            id="turbulence"
            baseFrequency="0.006 0.0175"
            type="turbulence"
            numOctaves="2"
            result="NOISE"
          />
          <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="20" />
          <animate
            href="#turbulence"
            attributeName="baseFrequency"
            dur="15s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.2 0 0.65 1; 0.3 0 0.7 1"
            values="
            0.008 0.015;
            0.002 0.035;
            0.008 0.015
            "
            repeatCount="indefinite"
          ></animate>
        </filter>
      </svg>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 r-0 w-[110%] h-1/2">
        <Image
          src={SunsetImage}
          alt="Sunset"
          width={600}
          height={300}
          className="absolute -bottom-3 left-0 right-0 w-full h-full"
          style={{ filter: "url(#water-ripples)" }}
        />
      </div>
    </div>
  );
};

export default Sunset;
