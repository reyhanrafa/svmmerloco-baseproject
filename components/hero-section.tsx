"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useTheme } from "./theme-provider"

const content = {
  id: {
    subheading: "Made for the Streets.",
    body: "Premium streetwear built for men who move different, stand louder, and never follow the crowd.",
    cta: "GET YOUR FIT",
  },
  en: {
    subheading: "Made for the Streets.",
    body: "Premium streetwear built for men who move different, stand louder, and never follow the crowd.",
    cta: "GET YOUR FIT",
  },
}

export function HeroSection() {
  const { language } = useTheme()
  const t = content[language]

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=900&q=60"
          alt="Streetwear fashion"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Noise Texture */}
        {/* <div className="noise-overlay" /> */}
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading font-bold uppercase tracking-super-wide text-[#F5F5F5]"
            style={{ fontSize: "clamp(4rem, 10vw, 9rem)", lineHeight: 1 }}
          >
            SVMMERLOCO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-heading uppercase tracking-ultra-wide text-accent mt-4"
            style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
          >
            {t.subheading}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="font-sans text-base text-[#F5F5F5]/70 mt-6 max-w-md"
          >
            {t.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mt-8"
          >
            <a
              href="https://wa.me/6281311976385?text=Halo%20SVMMERLOCO!%20Saya%20tertarik%20untuk%20order.%20Bisa%20info%20koleksi%20yang%20tersedia%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-heading font-bold uppercase tracking-wide text-sm bg-accent text-accent-foreground px-8 py-4 rounded-sm hover:bg-secondary transition-colors duration-300"
            >
              {t.cta}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-accent text-xs uppercase tracking-widest text-[#F5F5F5]/50">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
