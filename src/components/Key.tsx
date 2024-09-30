"use client";
import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";
import ClickUpAudio from "@/assets/keyboard/click-up.mp3";
import ClickDownAudio from "@/assets/keyboard/click-down.mp3";

type Key = {
  key: string;
  keyShift?: string;
};

type DoubleLetterKey = {
  letter: string;
  letter2?: string;
} & Key;

type IconKey = {
  icon: string;
} & Key;

interface KeyProps {
  keyData: DoubleLetterKey | IconKey;
  width?: number;
  color?: string;
  isMute: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

const Key = ({ keyData, width, color, onClick, isMute }: KeyProps) => {
  const [keyDown, setKeyDown] = useState<boolean | null>(null);
  useEffect(() => {
    const textarea = document.getElementById("keyboard-textarea");
    if (!textarea) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === keyData.key || e.key === keyData.keyShift) {
        // console.log("keydown", keyData.key);
        setKeyDown(true);
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === keyData.key || e.key === keyData.keyShift) {
        // console.log("keyup", keyData.key);
        setKeyDown(false);
      }
    };
    textarea.addEventListener("keydown", handleKeyDown);
    textarea.addEventListener("keyup", handleKeyUp);
    return () => {
      textarea.removeEventListener("keydown", handleKeyDown);
      textarea.removeEventListener("keyup", handleKeyUp);
    };
  }, [keyData.key, keyData.keyShift]);

  useEffect(() => {
    if (isMute) return;
    const clickDownAudio = new Audio(ClickDownAudio);
    const clickUpAudio = new Audio(ClickUpAudio);

    if (keyDown === false) {
      clickDownAudio.play();
    } else if (keyDown === true) {
      clickUpAudio.play();
    }

    return () => {
      clickDownAudio.pause();
      clickDownAudio.src = "";
      clickUpAudio.pause();
      clickUpAudio.src = "";
    };
  }, [keyDown, isMute]);

  return (
    <div
      className={"h-[20px]"}
      style={width ? { width: `${width}px` } : { aspectRatio: 1 / 1 }}
    >
      <div
      onClick={onClick ? onClick : undefined}
      className={
          "flex flex-col items-center justify-center h-full w-full rounded-sm text-black font-bold " +
          "before:h-full before:w-full before:absolute before:top-0 before:left-0 before:rounded-sm before:z-[-1] before:transition-transform before:duration-200 before:transform before:scale-95 before:translate-x-[-1px] before:translate-y-[-1px] before:shadow-md"
        }
        style={{
          backgroundColor: color ?? "#fffff4",
          filter: keyDown ? "brightness(0.8)" : "brightness(1)",
          transform: keyDown ? "scale(0.97)" : "scale(1)",
        }}
      >
        {"letter" in keyData ? (
          <>
            <div className={keyData.letter2 ? "text-[6px]" : "text-[8px]"}>
              {keyData.letter}
            </div>
            {keyData.letter2 && (
              <div className={keyData.letter2 ? "text-[6px]" : "text-[8px]"}>
                {keyData.letter2}
              </div>
            )}
          </>
        ) : (
          <Image src={keyData.icon} alt={keyData.icon} width={8} height={8} />
        )}
      </div>
    </div>
  );
};

export default Key;
