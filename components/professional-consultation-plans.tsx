"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Clock, Star, CheckCircle } from "lucide-react"

export function ProfessionalConsultationPlans() {
  const plans = [
    {
      duration: "12 Minutes",
      originalPrice: 249,
      discount: "10% OFF",
      finalPrice: 224,
      whatsappText: "I%20want%20a%2012%20minute%20session%20with%20VedicMitra",
      features: ["Basic Life Reading", "Career Guidance", "Health Insights"],
    },
    {
      duration: "20 Minutes",
      originalPrice: 399,
      discount: "15% OFF",
      finalPrice: 339,
      whatsappText: "I%20want%20a%2020%20minute%20session%20with%20VedicMitra",
      popular: true,
      features: ["Detailed Birth Chart", "Relationship Analysis", "Future Predictions", "Remedy Suggestions"],
    },
    {
      duration: "30 Minutes",
      originalPrice: 499,
      discount: "20% OFF",
      finalPrice: 399,
      whatsappText: "I%20want%20a%2030%20minute%20session%20with%20VedicMitra",
      features: [
        "Complete Life Analysis",
        "Kundli Matching",
        "Gemstone Recommendations",
        "Mantra Guidance",
        "Follow-up Support",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-400 border-yellow-400/30 px-4 py-2 mb-6">
            Professional Consultation Plans
          </Badge>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 font-serif">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Sacred Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience authentic Vedic wisdom through personalized consultations with our certified astrology masters.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-gradient-to-b from-slate-900/50 to-slate-800/50 border backdrop-blur-sm transition-all duration-500 hover:scale-105 ${
                plan.popular
                  ? "border-yellow-400/50 shadow-2xl shadow-yellow-400/20 scale-105"
                  : "border-slate-700/50 hover:border-slate-600/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-6 py-2 text-sm">
                    <Star className="h-4 w-4 mr-1" />
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full">
                    <Clock className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>

                <CardTitle className="text-2xl text-white mb-4">{plan.duration}</CardTitle>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-xl text-gray-400 line-through">₹{plan.originalPrice}</span>
                    <Badge variant="destructive" className="bg-red-600/80 text-white">
                      {plan.discount}
                    </Badge>
                  </div>
                  <div className="text-4xl font-bold text-yellow-400">₹{plan.finalPrice}</div>
                  <p className="text-sm text-gray-400">One-time consultation</p>
                </div>
              </CardHeader>

              <CardContent className="text-center space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-left text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className={`w-full font-bold py-4 rounded-full transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black shadow-lg"
                      : "bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white"
                  }`}
                >
                  <a
                    href={`https://wa.me/919999999999?text=${plan.whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book Consultation
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            ✨ All consultations include personalized remedies and follow-up guidance
          </p>
        </div>
      </div>
    </section>
  )
}
