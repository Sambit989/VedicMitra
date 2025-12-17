"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Star,
  Shield,
  Clock,
  Heart,
} from "lucide-react"

export function UpdatedFooter() {
  const quickLinks = [
    { name: "About VedicMitra", href: "#about" },
    { name: "Our Astrologers", href: "#astrologers" },
    { name: "Consultation Plans", href: "#plans" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Blog & Articles", href: "#blog" },
    { name: "FAQ", href: "#faq" },
  ]

  const services = [
    { name: "Birth Chart Reading", href: "#birth-chart" },
    { name: "Career Guidance", href: "#career" },
    { name: "Relationship Analysis", href: "#relationship" },
    { name: "Health Predictions", href: "#health" },
    { name: "Business Consultation", href: "#business" },
    { name: "Kundli Matching", href: "#kundli" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Refund Policy", href: "#refund" },
    { name: "Disclaimer", href: "#disclaimer" },
  ]

  const trustIndicators = [
    { icon: Star, text: "4.9/5 Rating", color: "text-yellow-400" },
    { icon: Shield, text: "100% Secure", color: "text-green-400" },
    { icon: Clock, text: "24/7 Support", color: "text-blue-400" },
    { icon: Heart, text: "2000+ Happy Clients", color: "text-pink-400" },
  ]

  return (
    <footer className="relative z-10 bg-gradient-to-t from-black via-slate-950 to-slate-900 border-t border-slate-800/50">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 font-serif">
                VedicMitra
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Your trusted companion in the journey of cosmic discovery. Experience authentic Vedic astrology guidance
                from certified masters.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <indicator.icon className={`h-4 w-4 ${indicator.color}`} />
                  <span className="text-xs text-gray-400">{indicator.text}</span>
                </div>
              ))}
            </div>

            {/* Contact Buttons */}
            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
              >
                <a href="https://wa.me/919439418176" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Consultation
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 bg-transparent"
              >
                <a href="tel:+919439418176">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <a
                    href="mailto:vedicmitrahelp@gmail.com"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    vedicmitrahelp@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <a href="tel:+919439418176" className="text-white hover:text-yellow-400 transition-colors">
                    +91 94394 18176
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white text-sm">
                    Puri, Odisha,
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="flex space-x-3">
                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10"
                >
                  <a
                    href="https://www.instagram.com/vedic.mitra?igsh=MWh5ZHA2ZjI0YnQyNA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10"
                >
                  <a href="https://www.facebook.com/share/1AuUtZ9caV/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                {/* <Button size="icon" variant="ghost" className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-red-400 hover:bg-red-400/10">
                  <Youtube className="h-5 w-5" />
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-800/50 bg-black/50">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} VedicMitra. All rights reserved.</p>
              <p className="text-gray-500 text-xs mt-1">Authentic Vedic Astrology Services | Certified Astrologers</p>
              <a href="https://sentientware.in/" > <p className="text-gray-500 text-xs mt-1">Developed By Sentientware</p></a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-500/10 text-green-400 border-green-500/20 text-xs">SSL Secured</Badge>
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs">Verified</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          asChild
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl animate-pulse"
        >
          <a href="https://wa.me/919439418176" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </footer>
  )
}
