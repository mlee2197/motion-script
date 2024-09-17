const TurbulentText = () => {
  return (
    <div className="animation-container">
      <svg width={"100%"} height={"100%"}>
        <filter id="turbulent-text--filter">
          <feTurbulence
            baseFrequency="0 0.06"
            numOctaves="6"
            result="noise"
          >
            {/* <animate
              attributeName="baseFrequency"
              from="0.02"
              to="0.08"
              dur={3} 
              repeatCount="indefinite"
            /> */}
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
          {/* <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="2" result="noise-light">
            <feDistantLight azimuth="25" elevation="65" />
          </feDiffuseLighting>
          <feComposite operator="in" in="noise-light" in2="SourceGraphic" /> */}
        </filter>
        <text
          y="57%"
          filter="url(#turbulent-text--filter)"
          fontSize={64}
          className="font-shrikhand"
        >
          Cat attack
        </text>
      </svg>
    </div>
  )
}

export default TurbulentText;