"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'
import StaticZodiacWheel from "@/components/static-zodiac-wheel"

export function MobileFirstHero() {
  const whatsappLink = "https://wa.me/919439418176"

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 z-10 pt-24">
      <div className="container mx-auto max-w-6xl">
        {/* Mobile-First Layout */}
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Main Content - Mobile First */}
          <div className="space-y-8 max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-serif bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent leading-[0.9] tracking-tight">
              VedicMitra
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-light leading-tight">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold">
                Cosmic Clarity
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Unlock the secrets of your destiny with authentic Vedic astrology readings from certified masters.
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-6 px-10 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 min-w-[300px]"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Start Your Reading Now
                </a>
              </Button>
            </div>
          </div>

          {/* Zodiac Wheel */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
            {/* Glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-purple-400/15 to-blue-500/15 rounded-full blur-2xl"></div>
            <div className="absolute inset-8 bg-gradient-to-r from-pink-400/10 to-cyan-400/10 rounded-full blur-xl"></div>

            {/* Static Zodiac Wheel Component */}
            <StaticZodiacWheel />
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 pt-8">
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
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
