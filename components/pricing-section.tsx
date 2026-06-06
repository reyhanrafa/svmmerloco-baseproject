"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useTheme } from "./theme-provider"

const pricingData = {
  id: {
    label: "PRICE RANGE",
    heading: "Investasi Style Kamu",
    tiers: [
      {
        name: "Essentials",
        description: "Tee & Basics",
        price: "Rp 199.000 – Rp 299.000",
        features: [
          "Premium cotton tees",
          "Basic streetwear pieces",
          "Comfortable daily wear",
          "Clean minimal design",
        ],
        featured: false,
        waText: "Halo%20SVMMERLOCO!%20Saya%20tertarik%20dengan%20koleksi%20Essentials%20(Tee%20%26%20Basics).%20Bisa%20info%20lebih%20lanjut%3F",
      },
      {
        name: "Premium",
        description: "Hoodie & Outerwear",
        price: "Rp 399.000 – Rp 599.000",
        features: [
          "Heavy weight hoodies",
          "Premium outerwear",
          "Statement pieces",
          "Exclusive colorways",
          "Limited quantities",
        ],
        featured: true,
        waText: "Halo%20SVMMERLOCO!%20Saya%20tertarik%20dengan%20koleksi%20Premium%20(Hoodie%20%26%20Outerwear).%20Bisa%20info%20lebih%20lanjut%3F",
      },
      {
        name: "Limited",
        description: "Exclusive Drops",
        price: "Rp 699.000 – Rp 999.000+",
        features: [
          "Super limited edition",
          "Collaboration pieces",
          "Numbered items",
          "Collector quality",
          "Special packaging",
        ],
        featured: false,
        waText: "Halo%20SVMMERLOCO!%20Saya%20tertarik%20dengan%20koleksi%20Limited%20(Exclusive%20Drops).%20Bisa%20info%20lebih%20lanjut%3F",
      },
    ],
    cta: "PILIH SEKARANG",
  },
  en: {
    label: "PRICE RANGE",
    heading: "Invest in Your Style",
    tiers: [
      {
        name: "Essentials",
        description: "Tee & Basics",
        price: "IDR 199K – IDR 299K",
        features: [
          "Premium cotton tees",
          "Basic streetwear pieces",
          "Comfortable daily wear",
          "Clean minimal design",
        ],
        featured: false,
        waText: "Halo%20SVMMERLOCO!%20Saya%20tertarik%20dengan%20koleksi%20Essentials%20(Tee%20%26%20Basics).%20Bisa%20info%20lebih%20lanjut%3F",
      },
      {
        name: "Premium",
        description: "Hoodie & Outerwear",
        price: "IDR 399K – IDR 599K",
        features: [
          "Heavy weight hoodies",
          "Premium outerwear",
          "Statement pieces",
          "Exclusive colorways",
          "Limited quantities",
        ],
        featured: true,
        waText: "Halo%20SVMMERLOCO!%20Saya%20tertarik%20dengan%20koleksi%20Premium%20(Hoodie%20%26%20Outerwear).%20Bisa%20info%20lebih%20lanjut%3F",
      },
      {
        name: "Limited",
        description: "Exclusive Drops",
        price: "IDR 699K – IDR 999K+",
        features: [
          "Super limited edition",
          "Collaboration pieces",
          "Numbered items",
          "Collector quality",
          "Special packaging",
        ],
        featured: false,
        waText: "Halo%20SVMMERLOCO!%20Saya%20tertarik%20dengan%20koleksi%20Limited%20(Exclusive%20Drops).%20Bisa%20info%20lebih%20lanjut%3F",
      },
    ],
    cta: "CHOOSE NOW",
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

export function PricingSection() {
  const { language } = useTheme()
  const t = pricingData[language]

  return (
    <section className="py-24 lg:py-32 bg-background">
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
          {t.tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className={`relative p-8 border bg-card ${
                tier.featured
                  ? "border-accent"
                  : "border-border"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="font-accent text-xs uppercase tracking-wide bg-accent text-accent-foreground px-4 py-1">
                    Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-foreground">
                  {tier.name}
                </h3>
                <p className="font-accent text-sm text-muted-foreground mt-1">
                  {tier.description}
                </p>
              </div>

              <div className="text-center mb-8">
                <span className="font-heading font-bold text-2xl text-accent">
                  {tier.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="font-sans text-sm text-foreground/90">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* WA link — fully functional button */}
              <a
                href={`https://wa.me/6281311976385?text=${tier.waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-heading font-bold text-sm uppercase tracking-wide py-4 rounded-sm transition-colors duration-300 ${
                  tier.featured
                    ? "bg-accent text-accent-foreground hover:bg-secondary"
                    : "border border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {t.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
