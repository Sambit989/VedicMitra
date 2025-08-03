"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Clock } from "lucide-react"

export function ConsultationPlans() {
  const plans = [
    {
      duration: "12 Minutes",
      originalPrice: 249,
      discount: "10% OFF",
      finalPrice: 224,
      whatsappText: "I%20want%20a%2012%20minute%20session%20with%20VedicMitra",
    },
    {
      duration: "20 Minutes",
      originalPrice: 399,
      discount: "15% OFF",
      finalPrice: 339,
      whatsappText: "I%20want%20a%2020%20minute%20session%20with%20VedicMitra",
      popular: true,
    },
    {
      duration: "30 Minutes",
      originalPrice: 499,
      discount: "20% OFF",
      finalPrice: 399,
      whatsappText: "I%20want%20a%2030%20minute%20session%20with%20VedicMitra",
    },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Choose Your Session & Get Instant Guidance</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Speak directly with a certified Vedic astrologer and get accurate readings in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-gradient-to-b from-purple-900/50 to-indigo-900/50 border-2 backdrop-blur-sm ${
                plan.popular ? "border-yellow-400 scale-105" : "border-purple-700"
              } hover:scale-105 transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                  MOST POPULAR
                </Badge>
              )}

              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-yellow-400 mr-2" />
                  <CardTitle className="text-2xl text-white">{plan.duration}</CardTitle>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl text-gray-400 line-through">₹{plan.originalPrice}</span>
                    <Badge variant="destructive" className="bg-red-600">
                      🔻{plan.discount}
                    </Badge>
                  </div>
                  <div className="text-4xl font-bold text-yellow-400">₹{plan.finalPrice}</div>
                </div>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-gray-300 mb-6">
                  Get personalized Vedic astrology insights and guidance for your life's important decisions.
                </p>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 rounded-full"
                >
                  <a
                    href={`https://wa.me/919999999999?text=${plan.whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
