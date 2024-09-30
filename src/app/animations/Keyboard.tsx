import Key from "@/components/Key";
import Backspace from "@/assets/keyboard/backspace.svg";
import UpArrow from "@/assets/keyboard/up-arrow.svg";
import RightArrow from "@/assets/keyboard/right-arrow.svg";
import LeftArrow from "@/assets/keyboard/left-arrow.svg";
import DownArrow from "@/assets/keyboard/down-arrow.svg";
import Windows from "@/assets/keyboard/windows.svg";
import Light from "@/assets/keyboard/lightbulb.svg";

const Keyboard = () => {
  return (
    <div className="animation-container flex flex-col p-2">
      <textarea className="w-full p-2 text-sm h-10 bg-zinc-700 [resize:none]" placeholder="type here..."></textarea>
      <div className="h-full w-full max-w-[328px] mx-auto py-2 md:max-w-[400px]">
        <div className="grid gap-[2px] grid-rows-5 max-h-full w-full aspect-[250/86] p-[2px] bg-blue-400">
          {/* row 1 */}
          <div className="flex gap-[2px] justify-between">
            <Key keyData={{ letter: "esc" }} />
            <Key keyData={{ letter: "!", letter2: "1" }} />
            <Key keyData={{ letter: "@", letter2: "2" }} />
            <Key keyData={{ letter: "#", letter2: "3" }} />
            <Key keyData={{ letter: "$", letter2: "4" }} />
            <Key keyData={{ letter: "%", letter2: "5" }} />
            <Key keyData={{ letter: "^", letter2: "6" }} />
            <Key keyData={{ letter: "&", letter2: "7" }} />
            <Key keyData={{ letter: "*", letter2: "8" }} />
            <Key keyData={{ letter: "(", letter2: "9" }} />
            <Key keyData={{ letter: ")", letter2: "0" }} />
            <Key keyData={{ letter: "_", letter2: "-" }} />
            <Key keyData={{ letter: "+", letter2: "=" }} />
            <Key keyData={{ icon: Backspace }} width={40} />
          </div>
          {/* row 2 */}
          <div className="flex gap-[2px] justify-between">
            <Key keyData={{ letter: "TAB" }} width={40} />
            <Key keyData={{ letter: "Q" }} />
            <Key keyData={{ letter: "W" }} />
            <Key keyData={{ letter: "E" }} />
            <Key keyData={{ letter: "R" }} />
            <Key keyData={{ letter: "T" }} />
            <Key keyData={{ letter: "Y" }} />
            <Key keyData={{ letter: "U" }} />
            <Key keyData={{ letter: "I" }} />
            <Key keyData={{ letter: "O" }} />
            <Key keyData={{ letter: "P" }} />
            <Key keyData={{ letter: "{", letter2: "[" }} />
            <Key keyData={{ letter: "}", letter2: "]" }} />
            <Key keyData={{ letter: "|", letter2: "\\" }} />
          </div>
          {/* row 3 */}
          <div className="flex gap-[2px] justify-between">
            <Key keyData={{ letter: "CAPS" }} width={40} />
            <Key keyData={{ letter: "A" }} />
            <Key keyData={{ letter: "S" }} />
            <Key keyData={{ letter: "D" }} />
            <Key keyData={{ letter: "F" }} />
            <Key keyData={{ letter: "G" }} />
            <Key keyData={{ letter: "H" }} />
            <Key keyData={{ letter: "J" }} />
            <Key keyData={{ letter: "K" }} />
            <Key keyData={{ letter: "L" }} />
            <Key keyData={{ letter: ":", letter2: ";" }} />
            <Key keyData={{ letter: '"', letter2: "'" }} />
            <Key keyData={{ letter: "ENTER" }} width={42} />
          </div>
          {/* row 4 */}
          <div className="flex gap-[2px] justify-between">
            <Key keyData={{ letter: "SHIFT" }} width={39} />
            <Key keyData={{ letter: "Z" }} />
            <Key keyData={{ letter: "X" }} />
            <Key keyData={{ letter: "C" }} />
            <Key keyData={{ letter: "V" }} />
            <Key keyData={{ letter: "B" }} />
            <Key keyData={{ letter: "N" }} />
            <Key keyData={{ letter: "M" }} />
            <Key keyData={{ letter: "<", letter2: "," }} />
            <Key keyData={{ letter: ">", letter2: "." }} />
            <Key keyData={{ letter: "?", letter2: "/" }} />
            <Key keyData={{ letter: "RS" }} />
            <Key keyData={{ icon: UpArrow }} />
            <Key keyData={{ icon: Light }} />
          </div>
          {/* row 5 */}
          <div className="flex gap-[2px] justify-between">
            <Key keyData={{ letter: "CTRL" }} />
            <Key keyData={{ icon: Windows }} />
            <Key keyData={{ letter: "ALT" }} />
            <Key keyData={{ letter: "" }} width={126} />
            <Key keyData={{ letter: "ALT" }} />
            <Key keyData={{ letter: "FN" }} />
            <Key keyData={{ letter: "CTRL" }} />
            <Key keyData={{ icon: LeftArrow }} />
            <Key keyData={{ icon: DownArrow }} />
            <Key keyData={{ icon: RightArrow }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
