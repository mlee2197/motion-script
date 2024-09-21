const CLASS_GRID = [
  ["1", "1", "1", "1", "1", "1", "1"],
  ["1", "2", "2", "2", "2", "2", "1"],
  ["1", "2", "3", "3", "3", "2", "1"],
  ["1", "2", "3", "4", "3", "2", "1"],
  ["1", "2", "3", "3", "3", "2", "1"],
  ["1", "2", "2", "2", "2", "2", "1"],
  ["1", "1", "1", "1", "1", "1", "1"],
]

const Bump = () => {

  return (
    <div className="animation-container relative flex items-center justify-center">
      <div id="animation-bump">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={`bump-${i}`} className="box-col">
            {
              Array.from({ length: 7 }).map((_, j) => (
                <div key={`bump-box-${j}`} className={"box-container " + `circle-${CLASS_GRID[i][j]}`}>
                  <div className={"box "} />
                </div>
              ))
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bump;