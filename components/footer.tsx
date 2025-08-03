"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-4 relative z-10 border-t border-purple-700/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
              VedicMitra
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Your trusted companion in the journey of cosmic discovery. Connect with us for authentic Vedic astrology
              guidance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="bg-gradient-to-r from-green-500 to-green-600 border-green-500 text-white hover:from-green-600 hover:to-green-700"
            >
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
            >
              <a href="mailto:contact@vedicmitra.com">
                <Mail className="mr-2 h-5 w-5" />
                contact@vedicmitra.com
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button size="icon" variant="ghost" className="text-yellow-400 hover:text-yellow-300">
              <Instagram className="h-6 w-6" />
            </Button>
            <Button size="icon" variant="ghost" className="text-yellow-400 hover:text-yellow-300">
              <Facebook className="h-6 w-6" />
            </Button>
            <Button size="icon" variant="ghost" className="text-yellow-400 hover:text-yellow-300">
              <Twitter className="h-6 w-6" />
            </Button>
          </div>

          <div className="pt-8 border-t border-purple-700/50">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} VedicMitra. All rights reserved. | Authentic Vedic Astrology Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
