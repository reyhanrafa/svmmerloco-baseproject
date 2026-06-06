"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "./theme-provider"

const content = {
  id: {
    heading: "JOIN THE MOVEMENT",
    subtext: "Jadi bagian dari kultur streetwear yang sesungguhnya.",
    cta: "ORDER NOW",
  },
  en: {
    heading: "JOIN THE MOVEMENT",
    subtext: "Be part of the true streetwear culture.",
    cta: "ORDER NOW",
  },
}

export function CTASection() {
  const { language } = useTheme()
  const t = content[language]

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1920&q=80"
          alt="Streetwear group"
          fill
          className="object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Noise Texture */}
        <div className="noise-overlay" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl uppercase tracking-super-wide text-[#F5F5F5]"
        >
          {t.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-lg md:text-xl text-[#F5F5F5]/70 mt-6"
        >
          {t.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="https://wa.me/6281311976385?text=Halo%20SVMMERLOCO!%20Saya%20mau%20order%20sekarang.%20Bisa%20dibantu%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-heading font-bold uppercase tracking-wide text-sm bg-accent text-accent-foreground px-10 py-5 rounded-sm hover:bg-secondary transition-colors duration-300"
          >
            {t.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
