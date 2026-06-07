"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { CollectionSection } from "@/components/collection-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { CookieConsent } from "@/components/cookie-consent"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <ThemeProvider>
    { /* <LoadingScreen /> */}
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <CollectionSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </main>
      <FloatingWhatsApp />
      <CookieConsent />
    </ThemeProvider>
  )
}
