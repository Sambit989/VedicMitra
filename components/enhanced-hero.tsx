"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles } from "lucide-react"
import { ZodiacWheel3D } from "./zodiac-wheel-3d"

export function EnhancedHero() {
  const whatsappLink = "https://wa.me/919999999999"

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Sparkles className="h-8 w-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-lg">Authentic Vedic Astrology</span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-bold font-serif bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent leading-tight">
                VedicMitra
              </h1>

              <h2 className="text-3xl lg:text-5xl text-white font-light leading-tight">
                Your Gateway to <span className="text-yellow-400">Cosmic Clarity</span>
              </h2>

              <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                Unlock the secrets of your destiny with authentic Vedic astrology readings from certified astrologers.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-6 px-10 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-7 w-7" />💬 Talk to Astrologer on WhatsApp
                </a>
              </Button>

              <p className="text-sm text-gray-400">
                ✨ Instant consultation • 🔒 100% Confidential • ⭐ 1000+ Happy Clients
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-[500px] h-[500px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
              <ZodiacWheel3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
