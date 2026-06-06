"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "./theme-provider"

const content = {
  id: {
    label: "OUR STORY",
    heading: "Born From The Streets. Built For The Culture.",
    body: "SVMMERLOCO lahir dari jalanan Indonesia, dibangun untuk mereka yang punya karakter. Kami percaya fashion bukan sekadar pakaian — tapi identitas. Setiap piece yang kami ciptakan adalah pernyataan: maskulin, urban, dan tanpa kompromi. Ini bukan tentang mengikuti tren. Ini tentang menciptakan culture.",
    tagline: "CULTURE OVER TRENDS.",
  },
  en: {
    label: "OUR STORY",
    heading: "Born From The Streets. Built For The Culture.",
    body: "SVMMERLOCO was born from the streets of Indonesia, built for those with character. We believe fashion is not just clothing — it is identity. Every piece we create is a statement: masculine, urban, and uncompromising. This is not about following trends. This is about creating culture.",
    tagline: "CULTURE OVER TRENDS.",
  },
}

export function AboutSection() {
  const { language } = useTheme()
  const t = content[language]

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-heading font-bold text-[8rem] md:text-[14rem] lg:text-[18rem] uppercase tracking-super-wide text-muted/30 whitespace-nowrap">
          {t.tagline}
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-4/5 w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80"
              alt="SVMMERLOCO streetwear"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <span className="font-accent text-sm uppercase tracking-ultra-wide text-accent">
              {t.label}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-foreground mt-4">
              {t.heading}
            </h2>
            <p className="font-sans text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
              {t.body}
            </p>

            <div className="mt-10 pt-10 border-t border-border">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <span className="font-heading font-bold text-3xl md:text-4xl text-accent">50+</span>
                  <p className="font-accent text-sm text-muted-foreground mt-2 uppercase tracking-wide">
                    {language === "id" ? "Produk" : "Products"}
                  </p>
                </div>
                <div>
                  <span className="font-heading font-bold text-3xl md:text-4xl text-accent">10K+</span>
                  <p className="font-accent text-sm text-muted-foreground mt-2 uppercase tracking-wide">
                    {language === "id" ? "Pelanggan" : "Customers"}
                  </p>
                </div>
                <div>
                  <span className="font-heading font-bold text-3xl md:text-4xl text-accent">100%</span>
                  <p className="font-accent text-sm text-muted-foreground mt-2 uppercase tracking-wide">
                    {language === "id" ? "Original" : "Original"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
