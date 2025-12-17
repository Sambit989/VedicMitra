"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Clock, CheckCircle } from "lucide-react"

export function NewConsultationPlans() {
  const plans = [
    {
      number: "1",
      title: "Vedic Prediction with Birth Details + Palmistry",
      price: 299,
      duration: "30–45 Minutes",
      whatsappText:
        "I%20want%20Plan%201%3A%20Vedic%20Prediction%20with%20Birth%20Details%20%2B%20Palmistry%20session%20with%20VedicMitra",
      features: [
        "Only Chat",
      ],
      popular: true,
    },
    {
      number: "2",
      title: "Prediction Without Birth Details",
      price: 333,
      duration: "30-40 Minutes",
      whatsappText: "I%20want%20Plan%202%3A%20Prediction%20Without%20Birth%20Details%20session%20with%20VedicMitra",
      features: [
        "शास्त्र पद्धति/card reading",
        "Life guidance (career, relationship, health, etc.) without date of birth",
      ],
    },
    {
      number: "3",
      title: "Reiki Healing  + Aura Boost",
      price: 333,
      duration: "30-45 Minutes",
      whatsappText:
        "I%20want%20Plan%203%3A%20Reiki%20Healing%20%2B%20Karma%20Cleansing%20%2B%20Aura%20Boost%20session%20with%20VedicMitra",
      features: [
        "Full body Reiki healing",
        "Chakra balancing",
        "7 chakra blockage removal",
        "Aura strengthening",
        "Negative energy removal",
        "Only Chat",
      ],
    },
    {
      number: "4",
      title: "Manifestation & Rituals (Money, Love, Desires)",
      price: 444,
      duration: "45–60 Minutes",
      whatsappText: "I%20want%20Plan%204%3A%20Manifestation%20%26%20Rituals%20session%20with%20VedicMitra",
      features: [
        "Deep Kundali Reading",
        "Plam Reading",
        "All Questions Answered",
        "Guidance",
        "GemStone",
        "Both Call & Chat Available",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
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

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full">
                    <span className="text-2xl font-bold text-yellow-400">🔢</span>
                  </div>
                </div>

                <CardTitle className="text-xl text-white mb-4">
                  Plan {plan.number}: {plan.title}
                </CardTitle>

                <div className="space-y-3">
                  <div className="text-4xl font-bold text-yellow-400">₹{plan.price}</div>
                  <div className="flex items-center justify-center gap-2 text-gray-300">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{plan.duration}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="text-center space-y-6">
                <div className="space-y-3 text-left">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-3">📋 Includes:</h4>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
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
                    href={`https://wa.me/919439418176?text=${plan.whatsappText}`}
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
