"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Sparkles, Star, Shield, Clock } from "lucide-react"

export function ProfessionalHero() {
  const whatsappLink = "https://wa.me/919999999999"

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            {/* Trust Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <Badge className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-400 border-yellow-400/30 px-4 py-2 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                Certified Vedic Astrologers
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-serif bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent leading-[0.9] tracking-tight">
                VedicMitra
              </h1>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-light leading-tight">
                  Your Gateway to
                </h2>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent leading-tight">
                  Cosmic Clarity
                </h2>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Unlock the secrets of your destiny with authentic Vedic astrology readings from certified masters.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 py-6 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="text-2xl font-bold text-white">4.9</span>
                </div>
                <p className="text-sm text-gray-400">Rating</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="text-2xl font-bold text-white">1000+</span>
                </div>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <p className="text-sm text-gray-400">Available</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-6 px-10 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[300px]"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Start Your Reading Now
                </a>
              </Button>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Instant Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>Authentic Vedic Methods</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Zodiac Wheel - CSS-based design */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px]">
              {/* Professional glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-400/10 to-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-pink-400/5 to-cyan-400/5 rounded-full blur-xl"></div>

              {/* CSS-based Zodiac Wheel */}
              <div className="relative w-full h-full">
                {/* Outer Ring */}
                <div
                  className="absolute inset-0 rounded-full border-4 border-yellow-400/60 animate-spin"
                  style={{ animationDuration: "60s" }}
                ></div>

                {/* Middle Ring */}
                <div
                  className="absolute inset-8 rounded-full border-2 border-orange-400/40 animate-spin"
                  style={{ animationDuration: "45s", animationDirection: "reverse" }}
                ></div>

                {/* Inner Ring */}
                <div
                  className="absolute inset-16 rounded-full border-2 border-yellow-400/30 animate-spin"
                  style={{ animationDuration: "90s" }}
                ></div>

                {/* Central Sun */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl animate-pulse shadow-2xl">
                  ☉
                </div>

                {/* Zodiac Signs positioned around the wheel */}
                {[
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
                ].map((sign, index) => {
                  const radius = 180
                  const angleRad = (sign.angle * Math.PI) / 180
                  const x = Math.cos(angleRad) * radius
                  const y = Math.sin(angleRad) * radius

                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
                      style={{
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                      }}
                    >
                      <div className="text-3xl text-yellow-400 font-bold mb-1 drop-shadow-lg">{sign.symbol}</div>
                      <div className="text-xs text-orange-400 font-medium">{sign.name}</div>
                    </div>
                  )
                })}

                {/* Decorative elements */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i / 24) * 360
                  const radius = 140
                  const angleRad = (angle * Math.PI) / 180
                  const x = Math.cos(angleRad) * radius
                  const y = Math.sin(angleRad) * radius

                  return (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                      }}
                    >
                      <div className="w-2 h-2 bg-yellow-400/40 rounded-full animate-pulse"></div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
