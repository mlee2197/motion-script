import Image from "next/image";

type LetterKey = {
  letter: string;
  letter2?: string;
};

type IconKey = {
  icon: string;
};

interface KeyProps {
  keyData: LetterKey | IconKey;
  width?: number;
  color?: string;
}

const Key = ({ keyData, width, color }: KeyProps) => {
  return (
    <div
      className={"h-[20px]"}
      style={width ? { width: `${width}px` } : { aspectRatio: 1 / 1 }}
    >
      <div
        className={
          "flex flex-col items-center justify-center h-full w-full rounded-sm text-black font-bold"
        }
        style={{ backgroundColor: color ?? "#fffff4" }}
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
