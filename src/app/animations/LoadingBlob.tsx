const LoadingBlob = () => {
  return (
    <div className="animation-container blur-sm">
      <div className="w-full h-full contrast-[1000%]">
        <div className="absolute left-1/2 top-1/2 w-16 h-[72px] bg-blue-400 rounded-full blur-lg origin-[10%_10%]" style={{
          animation: "spin 8s linear infinite"
        }} />
        <div className="absolute left-1/2 top-1/2 w-20 h-20 bg-red-400 rounded-full blur-lg origin-[5%_5%]" style={{
          animation: "spin-reverse 7s linear infinite"
        }} />
        <div className="absolute left-1/2 top-1/3 w-20 h-16 bg-green-400 rounded-full blur-lg origin-bottom-left" style={{
          animation: "spin 10s linear infinite"
        }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white opacity-25 blur-lg" />

      </div>
    </div>
  )
}

export default LoadingBlob;