import { Header } from "@/components/header"
import { MobileFirstHero } from "@/components/mobile-first-hero"
import { NewConsultationPlans } from "@/components/new-consultation-plans"
import { UpdatedWhyVedicMitra } from "@/components/updated-why-vedic-mitra"
import { UpdatedFooter } from "@/components/updated-footer"
import { ProfessionalCosmicBackground } from "@/components/professional-cosmic-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden">
      <ProfessionalCosmicBackground />
       <Header />
      <MobileFirstHero />
      <NewConsultationPlans />
      <UpdatedWhyVedicMitra />
      <UpdatedFooter />
      <link rel="icon" href="\images\vedic-mitra-logo.png" type="image/x-icon" />
    </div>
  )
}
