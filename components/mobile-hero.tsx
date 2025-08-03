"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles } from "lucide-react"
import Image from "next/image"

export function MobileHero() {
  const whatsappLink = "https://wa.me/919999999999"

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-base">Authentic Vedic Astrology</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent leading-tight">
              VedicMitra
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-light leading-tight">
              Your Gateway to <span className="text-yellow-400">Cosmic Clarity</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Unlock the secrets of your destiny with authentic Vedic astrology readings from certified astrologers.
            </p>

            <div className="space-y-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-6 w-6" />💬 Talk to Astrologer on WhatsApp
                </a>
              </Button>

              <div className="grid grid-cols-3 gap-4 text-sm text-gray-400 max-w-md mx-auto lg:mx-0">
                <div className="flex flex-col items-center lg:items-start gap-1">
                  <span className="text-2xl">✨</span>
                  <span>Instant Consultation</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-1">
                  <span className="text-2xl">🔒</span>
                  <span>100% Confidential</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-1">
                  <span className="text-2xl">⭐</span>
                  <span>1000+ Happy Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Zodiac Wheel */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
              {/* Multiple glow layers for enhanced effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-pink-400/15 to-cyan-400/15 rounded-full blur-xl"></div>

              {/* Main zodiac wheel */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-yellow-400/40 shadow-2xl zodiac-wheel-glow">
                <Image
                  src="/images/zodiac-wheel.png"
                  alt="Vedic Astrology Zodiac Wheel"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/20 rounded-full"></div>
              </div>

              {/* Rotating outer ring */}
              <div
                className="absolute inset-0 border-2 border-yellow-400/20 rounded-full animate-spin"
                style={{ animationDuration: "30s" }}
              ></div>
              <div
                className="absolute inset-2 border border-orange-400/15 rounded-full animate-spin"
                style={{ animationDuration: "45s", animationDirection: "reverse" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
