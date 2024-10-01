"use client";
import Key from "@/components/Key";
import Backspace from "@/assets/keyboard/backspace.svg";
import UpArrow from "@/assets/keyboard/up-arrow.svg";
import RightArrow from "@/assets/keyboard/right-arrow.svg";
import LeftArrow from "@/assets/keyboard/left-arrow.svg";
import DownArrow from "@/assets/keyboard/down-arrow.svg";
import Windows from "@/assets/keyboard/windows.svg";
import Light from "@/assets/keyboard/lightbulb.svg";
import { useState } from "react";
import MuteButton from "@/components/MuteButton";

const KEYBOARD_BACKGROUND_STYLES = [
  {
    backgroundColor: "#2a506b",
  },
  {
    backgroundColor: "#d36161",
  },
  {
    backgroundColor: "#4ecdc4",
  },
  {
    backgroundColor: "#feca57",
  },
  {
    animation: "gradient-rtl 5s linear infinite",
    backgroundSize: "240% 200%",
    backgroundImage:
      "linear-gradient(90deg, #ff9ff3, #be2edd, #2e86de, #22a6b3, #ff9ff3, #be2edd, #2e86de, #22a6b3)",
  },
  {
    animation: "gradient-ttb 5s linear infinite",
    backgroundSize: "200% 240%",
    backgroundImage:
      "linear-gradient(to bottom, #6a11cb, #2575fc, #00b09b, #96c93d, #6a11cb, #2575fc, #00b09b, #96c93d)",
  },
  {
    animation: "rainbow-shift 10s linear infinite",
  },
];

const Keyboard = () => {
  const [styleIndex, setStyleIndex] = useState(0);
  const [isMute, setIsMute] = useState(false);
  const handleLightClick = () => {
    setStyleIndex((styleIndex + 1) % KEYBOARD_BACKGROUND_STYLES.length);
  };
  const toggleMute = () => {
    setIsMute(!isMute);
  };
  return (
    <div className="animation-container flex flex-col p-2">
      <MuteButton isMute={isMute} toggleMute={toggleMute} />
      <textarea
        id="keyboard-textarea"
        className="w-full p-2 text-sm h-10 bg-zinc-700 [resize:none]"
        placeholder="type here..."
      ></textarea>
      <div className="h-full w-full max-w-[328px] mx-auto py-2 md:max-w-[360px]">
        <div className="relative top-1/2 -translate-y-1/2 border border-b-[6px] rounded-md">
          <div
            className="absolute w-full h-full rounded-t-md"
            style={{ ...KEYBOARD_BACKGROUND_STYLES[styleIndex] }}
          />
          <div
            className="relative grid gap-[2px] grid-rows-5 max-h-full w-full aspect-[250/86] p-[2px] rounded-t-md"
            // style={{
            //   ...KEYBOARD_BACKGROUND_STYLES[styleIndex],
            //   // boxShadow: "inset 0 0 6px 1px white",
            // }}
          >
            {/* row 1 */}
            <div className="flex gap-[2px] justify-between">
              <Key
                keyData={{ key: "Escape", letter: "esc" }}
                color="#f59494"
                isMute={isMute}
              />
              <Key
                keyData={{ key: "1", letter: "!", letter2: "1", keyShift: "!" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "2", letter: "@", letter2: "2", keyShift: "@" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "3", letter: "#", letter2: "3", keyShift: "#" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "4", letter: "$", letter2: "4", keyShift: "$" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "5", letter: "%", letter2: "5", keyShift: "%" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "6", letter: "^", letter2: "6", keyShift: "^" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "7", letter: "&", letter2: "7", keyShift: "&" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "8", letter: "*", letter2: "8", keyShift: "*" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "9", letter: "(", letter2: "9", keyShift: "(" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "0", letter: ")", letter2: "0", keyShift: ")" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "-", letter: "_", letter2: "-", keyShift: "_" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "=", letter: "+", letter2: "=", keyShift: "+" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "Backspace", icon: Backspace }}
                width={40}
                color="#d3d3d3"
                isMute={isMute}
              />
            </div>
            {/* row 2 */}
            <div className="flex gap-[2px] justify-between">
              <Key
                keyData={{ key: "Tab", letter: "TAB" }}
                width={40}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "q", letter: "Q", keyShift: "Q" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "w", letter: "W", keyShift: "W" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "e", letter: "E", keyShift: "E" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "r", letter: "R", keyShift: "R" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "t", letter: "T", keyShift: "T" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "y", letter: "Y", keyShift: "Y" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "u", letter: "U", keyShift: "U" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "i", letter: "I", keyShift: "I" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "o", letter: "O", keyShift: "O" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "p", letter: "P", keyShift: "P" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "[", letter: "{", letter2: "[", keyShift: "{" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "]", letter: "}", letter2: "]", keyShift: "}" }}
                isMute={isMute}
              />
              <Key
                keyData={{
                  key: "\\",
                  letter: "|",
                  letter2: "\\",
                  keyShift: "|",
                }}
                isMute={isMute}
              />
            </div>
            {/* row 3 */}
            <div className="flex gap-[2px] justify-between">
              <Key
                keyData={{ key: "CapsLock", letter: "CAPS" }}
                width={40}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "a", letter: "A", keyShift: "A" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "s", letter: "S", keyShift: "S" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "d", letter: "D", keyShift: "D" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "f", letter: "F", keyShift: "F" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "g", letter: "G", keyShift: "G" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "h", letter: "H", keyShift: "H" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "j", letter: "J", keyShift: "J" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "k", letter: "K", keyShift: "K" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "l", letter: "L", keyShift: "L" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: ";", letter: ":", letter2: ";", keyShift: ":" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "'", letter: '"', letter2: "'", keyShift: '"' }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "Enter", letter: "ENTER" }}
                width={42}
                color="#d3d3d3"
                isMute={isMute}
              />
            </div>
            {/* row 4 */}
            <div className="flex gap-[2px] justify-between">
              <Key
                keyData={{ key: "Shift", letter: "SHIFT" }}
                width={39}
                color="#d3d3d3"
                isMute={isMute}
              />
              <Key
                keyData={{ key: "z", letter: "Z", keyShift: "Z" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "x", letter: "X", keyShift: "X" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "c", letter: "C", keyShift: "C" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "v", letter: "V", keyShift: "V" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "b", letter: "B", keyShift: "B" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "n", letter: "N", keyShift: "N" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "m", letter: "M", keyShift: "M" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: ",", letter: "<", letter2: ",", keyShift: "<" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: ".", letter: ">", letter2: ".", keyShift: ">" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "/", letter: "?", letter2: "/", keyShift: "?" }}
                isMute={isMute}
              />
              <Key keyData={{ key: "Shift", letter: "RS" }} isMute={isMute} />
              <Key
                keyData={{ key: "ArrowUp", icon: UpArrow }}
                color="#c0ccd9"
                isMute={isMute}
              />
              <Key
                keyData={{ key: "F5", icon: Light }}
                onClick={handleLightClick}
                isMute={isMute}
              />
            </div>
            {/* row 5 */}
            <div className="flex gap-[2px] justify-between">
              <Key
                keyData={{ key: "Control", letter: "CTRL" }}
                isMute={isMute}
              />
              <Key keyData={{ key: "Meta", icon: Windows }} isMute={isMute} />
              <Key keyData={{ key: "Alt", letter: "ALT" }} isMute={isMute} />
              <Key
                keyData={{ key: " ", letter: "" }}
                width={126}
                isMute={isMute}
              />
              <Key keyData={{ key: "Alt", letter: "ALT" }} isMute={isMute} />
              <Key keyData={{ key: "Fn", letter: "FN" }} isMute={isMute} />
              <Key
                keyData={{ key: "Control", letter: "CTRL" }}
                isMute={isMute}
              />
              <Key
                keyData={{ key: "ArrowLeft", icon: LeftArrow }}
                color="#c0ccd9"
                isMute={isMute}
              />
              <Key
                keyData={{ key: "ArrowDown", icon: DownArrow }}
                color="#c0ccd9"
                isMute={isMute}
              />
              <Key
                keyData={{ key: "ArrowRight", icon: RightArrow }}
                color="#c0ccd9"
                isMute={isMute}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
