"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"
import { useTheme } from "./theme-provider"

const testimonials = [
  {
    name: "Raka Pratama",
    location: "Jakarta",
    quote: {
      id: "Material hoodie-nya beda banget sama brand lain. Tebel, nyaman, dan desainnya clean abis. Worth every penny!",
      en: "The hoodie material is totally different from other brands. Thick, comfortable, and the design is super clean. Worth every penny!",
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Dimas Arya",
    location: "Bandung",
    quote: {
      id: "Gue suka konsep limited drop-nya. Bikin outfit gue beda dari yang lain. SVMMERLOCO paham banget culture streetwear.",
      en: "I love the limited drop concept. Makes my outfit different from others. SVMMERLOCO really understands streetwear culture.",
    },
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Fajar Rahman",
    location: "Surabaya",
    quote: {
      id: "Sizing-nya pas, quality kontrol ketat. Udah beli 5 piece dan semuanya mantap. Pasti bakal repeat order lagi.",
      en: "The sizing is perfect, tight quality control. Already bought 5 pieces and all are great. Will definitely repeat order.",
    },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
]

const content = {
  id: {
    label: "WHAT THEY SAY",
    heading: "Dari Mereka yang Udah Pakai",
  },
  en: {
    label: "WHAT THEY SAY",
    heading: "From Those Who Already Wear",
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function TestimonialsSection() {
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
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="p-6 border border-border bg-transparent"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-base italic text-foreground/90 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote[language]}&rdquo;
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-sm uppercase tracking-wide text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="font-accent text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
