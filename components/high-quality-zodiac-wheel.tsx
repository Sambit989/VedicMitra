"use client"

import Image from "next/image"

export function HighQualityZodiacWheel() {
  return (
    <div className="relative w-full h-full">
      {/* Enhanced glow effects for the high-quality image */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/25 to-orange-500/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute inset-2 bg-gradient-to-r from-purple-400/15 to-blue-500/15 rounded-full blur-2xl"></div>
      <div className="absolute inset-4 bg-gradient-to-r from-pink-400/10 to-cyan-400/10 rounded-full blur-xl"></div>

      {/* Main high-quality zodiac wheel */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-yellow-400/30 shadow-2xl">
        <Image
          src="/images/zodiac-wheel.png"
          alt="High Quality Vedic Astrology Zodiac Wheel"
          fill
          className="object-cover rounded-full"
          priority
          quality={100}
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 550px"
        />

        {/* Subtle overlay for better integration */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-400/5 to-transparent rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-full"></div>
      </div>

      {/* Refined rotating rings */}
      <div
        className="absolute inset-0 border border-yellow-400/15 rounded-full animate-spin"
        style={{ animationDuration: "45s" }}
      ></div>
      <div
        className="absolute inset-2 border border-orange-400/12 rounded-full animate-spin"
        style={{ animationDuration: "60s", animationDirection: "reverse" }}
      ></div>
      <div
        className="absolute inset-4 border border-purple-400/10 rounded-full animate-spin"
        style={{ animationDuration: "75s" }}
      ></div>
    </div>
  )
}
