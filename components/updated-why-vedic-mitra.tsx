"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Shield, Award, Clock, Heart, CheckCircle } from "lucide-react"

export function UpdatedWhyVedicMitra() {
  const features = [
    {
      icon: Award,
      title: "Certified Masters",
      description: "Learn from authentic Vedic astrology masters with decades of experience and traditional training.",
      stats: "3+ Years Experience",
      color: "text-yellow-400",
      bgColor: "from-yellow-400/10 to-orange-500/10",
    },
    {
      icon: Star,
      title: "Proven Accuracy",
      description: "Our predictions have helped thousands make life-changing decisions with 95% accuracy rate.",
      stats: "95% Accuracy Rate",
      color: "text-blue-400",
      bgColor: "from-blue-400/10 to-cyan-500/10",
    },
    {
      icon: Shield,
      title: "Complete Privacy",
      description: "Your personal information and consultations are kept strictly confidential and secure.",
      stats: "100% Confidential",
      color: "text-green-400",
      bgColor: "from-green-400/10 to-emerald-500/10",
    },
    {
      icon: Users,
      title: "Trusted Community",
      description: "Join thousands of satisfied clients who have transformed their lives through our guidance.",
      stats: "2000+ Happy Clients",
      color: "text-purple-400",
      bgColor: "from-purple-400/10 to-pink-500/10",
    },
    {
      icon: Clock,
      title: "Instant Availability",
      description: "Get immediate consultations 24/7 through WhatsApp without any waiting time.",
      stats: "24/7 Available",
      color: "text-orange-400",
      bgColor: "from-orange-400/10 to-red-500/10",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every reading is tailored specifically to your birth chart and life circumstances.",
      stats: "100% Personalized",
      color: "text-pink-400",
      bgColor: "from-pink-400/10 to-rose-500/10",
    },
  ]

  const testimonials = [
    {
      name: "Soubhagya Bhoi",
      location: "Mumbai, Maharashtra",
      text: "VedicMitra's guidance helped me choose the right career path. The predictions about my job change came true exactly as predicted. Highly recommended!",
      rating: 5,
      image: "\WhatsApp Image 2025-08-03 at 23.35.58_95902202.jpg?height=60&width=60",
      consultation: "Career Guidance",
    },
    {
      name: "Rudra Satapathy",
      location: "Delhi, NCR",
      text: "Amazing accuracy in relationship predictions. The astrologer provided practical solutions that actually worked. My marriage is now much happier!",
      rating: 5,
      image: "/WhatsApp Image 2025-08-03 at 23.38.19_51758e8b.jpg?height=60&width=60",
      consultation: "Relationship Analysis",
    },
    {
      name: "Anit Patel",
      location: "Ahmedabad, Gujarat",
      text: "The gemstone recommendations and mantras suggested have brought positive changes in my life. Very knowledgeable and authentic astrologers.",
      rating: 5,
      image: "/Screenshot 2025-08-03 234207.png?height=60&width=60",
      consultation: "Life Analysis",
    },
    {
      name: "Chandan Reddy",
      location: "Hyderabad, Telangana",
      text: "Business predictions were spot on! The timing for launching my new venture was perfect. Made significant profits as predicted.",
      rating: 5,
      image: "/Screenshot 2025-06-20 024904.png?height=60&width=60",
      consultation: "Business Consultation",
    },
  ]

  const achievements = [
    { number: "2000+", label: "Happy Clients", icon: Users },
    { number: "3+", label: "Years Experience", icon: Award },
    { number: "95%", label: "Accuracy Rate", icon: Star },
    { number: "24/7", label: "Availability", icon: Clock },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <Badge className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-400 border-yellow-400/30 px-4 py-2 mb-6">
            Why Choose VedicMitra
          </Badge> */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 font-serif">
            Experience{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Authentic Vedic Wisdom
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover why thousands trust VedicMitra for life-changing astrological guidance and spiritual insights.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 text-center p-6"
            >
              <CardContent className="p-0">
                <div className="flex justify-center mb-3">
                  <achievement.icon className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-sm text-gray-400">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${feature.bgColor} border-slate-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 group`}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 bg-slate-800/50 rounded-lg ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">{feature.description}</p>
                    <Badge className={`${feature.color} bg-slate-800/50 border-current/20`}>{feature.stats}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-gradient-to-r from-slate-900/30 to-slate-800/30 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-slate-700/30">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-serif">What Our Clients Say</h3>
            <p className="text-gray-300 text-lg">Real experiences from real people who transformed their lives</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-600/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-yellow-400/30"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <div className="flex">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">{testimonial.location}</p>
                      <Badge className="text-xs mt-1 bg-yellow-400/10 text-yellow-400 border-yellow-400/20">
                        {testimonial.consultation}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm italic leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us Summary */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span className="text-gray-300">Authentic Vedic Methods</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span className="text-gray-300">Instant WhatsApp Consultation</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span className="text-gray-300">Lifetime Guidance Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
