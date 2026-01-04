"use client"

export default function StaticZodiacWheel() {
  const zodiacSigns = [
    { symbol: "♈", name: "Aries", angle: 0 },
    { symbol: "♉", name: "Taurus", angle: 30 },
    { symbol: "♊", name: "Gemini", angle: 60 },
    { symbol: "♋", name: "Cancer", angle: 90 },
    { symbol: "♌", name: "Leo", angle: 120 },
    { symbol: "♍", name: "Virgo", angle: 150 },
    { symbol: "♎", name: "Libra", angle: 180 },
    { symbol: "♏", name: "Scorpio", angle: 210 },
    { symbol: "♐", name: "Sagittarius", angle: 240 },
    { symbol: "♑", name: "Capricorn", angle: 270 },
    { symbol: "♒", name: "Aquarius", angle: 300 },
    { symbol: "♓", name: "Pisces", angle: 330 },
  ]

  return (
    <div className="relative w-full h-full">
      {/* Outer Ring */}
      <div
        className="absolute inset-16 rounded-full border-4 border-yellow-400/60 animate-spin"
        style={{ animationDuration: "20s" }}
      ></div>

      {/* Middle Ring */}
      <div
        className="absolute inset-20 rounded-full border-2 border-orange-400/40 animate-spin"
        style={{ animationDuration: "15s", animationDirection: "reverse" }}
      ></div>

      {/* Inner Ring */}
      <div
        className="absolute inset-24 rounded-full border-2 border-yellow-400/30 animate-spin"
        style={{ animationDuration: "25s" }}
      ></div>

      {/* Central Sun */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl animate-pulse">
        ☉
      </div>

      {/* Zodiac Signs */}
      {/* Revolving Zodiac Signs Container */}
      <div
        className="absolute inset-0 animate-spin"
        style={{ animationDuration: "60s" }}
      >
        {zodiacSigns.map((sign, index) => {
          const radius = 30
          const angleRad = (sign.angle * Math.PI) / 180
          const x = 50 + Math.cos(angleRad) * radius
          const y = 50 + Math.sin(angleRad) * radius

          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              <div
                className="animate-spin"
                style={{
                  animationDuration: "60s",
                  animationDirection: "reverse",
                }}
              >
                <div className="text-2xl text-yellow-400 font-bold mb-1">{sign.symbol}</div>
                <div className="text-xs text-orange-400 font-medium">{sign.name}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
