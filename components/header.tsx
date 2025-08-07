"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from 'lucide-react'
import Image from "next/image"

export function Header() {
  const whatsappLink = "https://wa.me/919439418176"
  const phoneLink = "tel:+919439418176"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
              <Image
                src="/images/vedic-mitra-logo.png"
                alt="VedicMitra Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-serif">
                VedicMitra
              </h1>
              <p className="text-xs text-gray-400">Authentic Vedic Astrology</p>
            </div>
          </div>

          {/* Navigation & Contact Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Phone Button - Hidden on mobile */}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden sm:flex border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 bg-transparent"
            >
              <a href={phoneLink}>
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>

            {/* WhatsApp Button */}
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">Chat</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
