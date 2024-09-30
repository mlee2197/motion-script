interface MuteButtonProps {
  isMute: boolean;
  toggleMute: () => void;
}
const MuteButton = ({ isMute, toggleMute }: MuteButtonProps) => {
  return (
    <button
      onClick={toggleMute}
      className={
        "absolute bottom-0 left-0 aspect-square h-10 w-10 p-1 m-2 border-2 border-white/30 rounded-lg overflow-hidden z-10"
      }
      aria-label="Play"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
      {isMute && (
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 w-[100%] h-0.5 bg-white/80 -translate-x-1/2 -translate-y-1/2 rotate-45" />
        </div>
      )}
    </button>
  )
}

export default MuteButton;