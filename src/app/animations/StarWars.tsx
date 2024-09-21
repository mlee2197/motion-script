const StarWars = () => {

  return (
    <div className="animation-container [perspective:300px]">
      <svg width="111%" height="111%" xmlns="http://www.w3.org/2000/svg">
        <filter id="stars" width="100%" height={"100%"}>
          <feTurbulence
            baseFrequency="0.25"
            result="NOISE"
          />
          <feColorMatrix values="0 0 0 9 -4
                               0 0 0 9 -4
                               0 0 0 9 -4
                               0 0 0 0 1"/>
        </filter>
        <rect width={"100%"} height={"100%"} className="absolute left-0 top-0 right-0 w-full h-full" style={{
          filter: "url(#stars)"
        }}></rect>
      </svg>
      <p id="star-wars--text">
        It is a period of civil war.
        Rebel spaceships, striking
        from a hidden base, have won
        their first victory against
        the evil Galactic Empire.
        During the battle, Rebel
        spies managed to steal secret
        plans to the Empire's
        ultimate weapon, the DEATH
        STAR, an armored space
        station with enough power to
        destroy an entire planet.
        Pursued by the Empire's
        sinister agents, Princess
        Leia races home aboard her
        starship, custodian of the
        stolen plans that can save
        her people and restore
        freedom to the galaxy...
      </p>
      <div className="absolute top-0 left-0 right-0 w-full h-1/2 bg-gradient-to-b from-black to-transparent"></div>
    </div>
  )
}

export default StarWars;