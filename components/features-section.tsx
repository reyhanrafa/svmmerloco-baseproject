"use client"

import { motion } from "framer-motion"
import { Gem, Clock, Paintbrush, Shield } from "lucide-react"
import { useTheme } from "./theme-provider"

const content = {
  id: {
    label: "KEUNGGULAN",
    heading: "Kenapa SVMMERLOCO?",
    features: [
      {
        icon: Gem,
        title: "Premium Material",
        description: "Bahan berkualitas tinggi yang nyaman dipakai seharian dan tahan lama untuk daily use.",
      },
      {
        icon: Clock,
        title: "Limited Drop",
        description: "Setiap koleksi diproduksi terbatas. Eksklusif untuk lo yang gak mau sama dengan yang lain.",
      },
      {
        icon: Paintbrush,
        title: "Urban Aesthetic",
        description: "Desain yang clean, maskulin, dan timeless. Cocok untuk segala occasion.",
      },
      {
        icon: Shield,
        title: "Built to Wear",
        description: "Dibuat untuk dipakai, bukan cuma dipajang. Durabilitas tinggi tanpa mengorbankan style.",
      },
    ],
  },
  en: {
    label: "FEATURES",
    heading: "Why SVMMERLOCO?",
    features: [
      {
        icon: Gem,
        title: "Premium Material",
        description: "High-quality materials that are comfortable to wear all day and built to last for daily use.",
      },
      {
        icon: Clock,
        title: "Limited Drop",
        description: "Each collection is produced in limited quantities. Exclusive for those who don&apos;t want to be like everyone else.",
      },
      {
        icon: Paintbrush,
        title: "Urban Aesthetic",
        description: "Clean, masculine, and timeless design. Perfect for any occasion.",
      },
      {
        icon: Shield,
        title: "Built to Wear",
        description: "Made to be worn, not just displayed. High durability without sacrificing style.",
      },
    ],
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function FeaturesSection() {
  const { language } = useTheme()
  const t = content[language]

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-accent text-sm uppercase tracking-ultra-wide text-accent">
            {t.label}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-foreground mt-4">
            {t.heading}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                className="relative p-6 border border-border bg-transparent group hover:border-accent/50 transition-colors duration-300"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />

                <div className="mb-4">
                  <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
