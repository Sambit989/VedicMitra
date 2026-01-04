"use client"

export function CSSZodiacWheel() {
  const zodiacSigns = [
    { symbol: "♈", name: "Aries", angle: 0, color: "text-red-400" },
    { symbol: "♉", name: "Taurus", angle: 30, color: "text-green-400" },
    { symbol: "♊", name: "Gemini", angle: 60, color: "text-yellow-400" },
    { symbol: "♋", name: "Cancer", angle: 90, color: "text-blue-400" },
    { symbol: "♌", name: "Leo", angle: 120, color: "text-orange-400" },
    { symbol: "♍", name: "Virgo", angle: 150, color: "text-emerald-400" },
    { symbol: "♎", name: "Libra", angle: 180, color: "text-pink-400" },
    { symbol: "♏", name: "Scorpio", angle: 210, color: "text-purple-400" },
    { symbol: "♐", name: "Sagittarius", angle: 240, color: "text-indigo-400" },
    { symbol: "♑", name: "Capricorn", angle: 270, color: "text-teal-400" },
    { symbol: "♒", name: "Aquarius", angle: 300, color: "text-cyan-400" },
    { symbol: "♓", name: "Pisces", angle: 330, color: "text-violet-400" },
  ]

  return (
    <div className="relative w-full h-full">
      {/* Multiple rotating rings for depth */}
      <div
        className="absolute inset-0 rounded-full border-4 border-orange-500/60 animate-spin shadow-2xl"
        style={{
          animationDuration: "60s",
          background:
            "conic-gradient(from 0deg, rgba(255, 215, 0, 0.3), rgba(255, 140, 0, 0.3), rgba(255, 215, 0, 0.3))",
        }}
      ></div>

      <div
        className="absolute inset-6 rounded-full border-[3px] border-orange-400/50 animate-spin"
        style={{ animationDuration: "45s", animationDirection: "reverse" }}
      ></div>

      <div
        className="absolute inset-12 rounded-full border-2 border-yellow-400/40 animate-spin"
        style={{ animationDuration: "90s" }}
      ></div>

      <div
        className="absolute inset-16 rounded-full border border-purple-400/30 animate-spin"
        style={{ animationDuration: "120s", animationDirection: "reverse" }}
      ></div>

      {/* Central Sun with rays */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-24 h-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-full flex items-center justify-center text-5xl animate-pulse shadow-2xl">
          ☉{/* Sun rays */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-8 bg-yellow-400/60"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-40px)`,
                transformOrigin: "center bottom",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Zodiac Signs */}
      {zodiacSigns.map((sign, index) => {
        const radius = 40
        const angleRad = (sign.angle * Math.PI) / 180
        const x = 50 + Math.cos(angleRad) * radius
        const y = 50 + Math.sin(angleRad) * radius

        return (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center group cursor-pointer"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <div
              className={`text-4xl font-bold mb-2 drop-shadow-lg ${sign.color} group-hover:scale-125 transition-transform duration-300`}
            >
              {sign.symbol}
            </div>
            <div className="text-sm text-orange-400 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              {sign.name}
            </div>
          </div>
        )
      })}

      {/* Decorative stars */}
      {Array.from({ length: 32 }).map((_, i) => {
        const angle = (i / 32) * 360
        const radius = 32 + (i % 3) * 4
        const angleRad = (angle * Math.PI) / 180
        const x = 50 + Math.cos(angleRad) * radius
        const y = 50 + Math.sin(angleRad) * radius

        return (
          <div
            key={i}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animationDelay: `${i * 0.1}s`,
            }}
          >
            <div className="w-1 h-1 bg-yellow-400/60 rounded-full animate-pulse"></div>
          </div>
        )
      })}

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {zodiacSigns.map((sign, index) => {
          const nextIndex = (index + 1) % zodiacSigns.length
          const radius = 200
          const angle1 = (sign.angle * Math.PI) / 180
          const angle2 = (zodiacSigns[nextIndex].angle * Math.PI) / 180

          const x1 = 50 + (Math.cos(angle1) * radius * 100) / 500
          const y1 = 50 + (Math.sin(angle1) * radius * 100) / 500
          const x2 = 50 + (Math.cos(angle2) * radius * 100) / 500
          const y2 = 50 + (Math.sin(angle2) * radius * 100) / 500

          return (
            <line
              key={index}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="rgba(255, 215, 0, 0.2)"
              strokeWidth="1"
              className="animate-pulse"
            />
          )
        })}
      </svg>
    </div>
  )
}
