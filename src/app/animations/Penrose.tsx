"use client";
import Image from "next/image";
import PenroseBottom from "@/assets/penrose-bottom.svg";
import PenroseLeft from "@/assets/penrose-left.svg";
import PenroseRight from "@/assets/penrose-right.svg";

const Penrose = () => {
  return (
    <div className="animation-container p-6">
      <div className="relative w-full h-full">
        <Image src={PenroseBottom} alt="penrose-bottom" fill />
        <Image src={PenroseLeft} alt="penrose-left" fill />
        <Image src={PenroseRight} alt="penrose-right" fill />
        <div id="penrose-ball" />
      </div>
    </div>
  )
}

export default Penrose;