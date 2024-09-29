"use client";
import Image from "next/image";
import PenroseBottom from "@/assets/penrose-bottom.svg";
import PenroseLeft from "@/assets/penrose-left.svg";
import PenroseRight from "@/assets/penrose-right.svg";

const Penrose = () => {
  return (
    <div id="penrose" className="animation-container p-6">
      <div className="relative w-full h-full">
        <Image id="penrose-bottom" src={PenroseBottom} alt="penrose-bottom" fill />
        <Image id="penrose-left" src={PenroseLeft} alt="penrose-left" fill />
        <Image id="penrose-right" src={PenroseRight} alt="penrose-right" fill />
        <div id="penrose-ball">
          <div id="penrose-ball-inner" />
        </div>
      </div>
    </div>
  )
}

export default Penrose;