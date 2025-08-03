"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { ZodiacWheel3D } from "./zodiac-wheel-3d"

export function Hero() {
  const whatsappLink = "https://wa.me/919999999999"

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-serif bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent leading-tight">
                VedicMitra
              </h1>
              <h2 className="text-2xl lg:text-4xl text-white font-light">Your Gateway to Cosmic Clarity</h2>
              <p className="text-lg lg:text-xl text-gray-300 max-w-2xl">
                Unlock the secrets of your destiny with authentic Vedic astrology readings.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />💬 Talk to Astrologer on WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-96 h-96 relative">
              <ZodiacWheel3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
