"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, Shield } from "lucide-react"

export function WhyVedicMitra() {
  const features = [
    {
      icon: Users,
      title: "1000+ Happy Clients",
      description: "Trusted by thousands for accurate predictions and life guidance",
    },
    {
      icon: Star,
      title: "Accurate Predictions",
      description: "Authentic Vedic astrology with proven track record of precision",
    },
    {
      icon: Shield,
      title: "Confidential & Personalized",
      description: "Your privacy is sacred. Get personalized readings tailored just for you",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "VedicMitra helped me understand my career path. The predictions were spot on!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      text: "Amazing accuracy in relationship guidance. Highly recommended for anyone seeking clarity.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      text: "The astrologer was very knowledgeable and provided practical solutions to my problems.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-300">Experience the power of authentic Vedic wisdom</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-purple-900/30 to-indigo-900/30 border-purple-700 backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <CardContent className="text-center p-8">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-700">
          <h3 className="text-3xl font-bold text-center text-white mb-8">What Our Clients Say</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-b from-yellow-400/10 to-orange-500/10 border-yellow-400/30">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-yellow-400 font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
