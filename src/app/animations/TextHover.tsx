const WORD = ["V", "e", "r", "y", "D", "e", "m", "u", "r", "e"];
const TextHover = () => {
  return (
    <div className="animation-container flex items-center justify-center">
      <div className="relative h-10 w-full text-center overflow-hidden group">
        <p className="absolute top-0 w-full mx-auto font-shrikhand text-4xl">
          {WORD.map((letter, index) => (
            <span key={`${letter}-${index}-visible`} className="inline-block transition-transform duration-300 group-hover:translate-y-full" style={{ transitionDelay: `${index * 25}ms` }}>
              {letter}
            </span>
          ))}
        </p>
        <p className="absolute -top-full w-full mx-auto font-shrikhand text-4xl">
          {WORD.map((letter, index) => (
            <span key={`${letter}-${index}-hidden`} className="inline-block transition-transform duration-300 group-hover:translate-y-full text-pink-300" style={{ transitionDelay: `${index * 25}ms` }}>
              {letter}
            </span>
          ))}
        </p>

      </div>
    </div>
  )
}

export default TextHover;