"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useTheme } from "./theme-provider"

const products = [
  {
    name: "Classic Hoodie",
    category: "Outerwear",
    price: "Rp 499.000",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    waLink: "https://wa.me/6281311976385?text=Halo!%20Saya%20tertarik%20dengan%20Classic%20Hoodie%20SVMMERLOCO.%20Bisa%20info%20ukuran%20dan%20harga%3F",
  },
  {
    name: "Urban Cargo",
    category: "Bottoms",
    price: "Rp 399.000",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    waLink: "https://wa.me/6281311976385?text=Halo!%20Saya%20tertarik%20dengan%20Urban%20Cargo%20SVMMERLOCO.%20Bisa%20info%20ukuran%20dan%20harga%3F",
  },
  {
    name: "Street Tee",
    category: "Tops",
    price: "Rp 249.000",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    waLink: "https://wa.me/6281311976385?text=Halo!%20Saya%20tertarik%20dengan%20Street%20Tee%20SVMMERLOCO.%20Bisa%20info%20ukuran%20dan%20harga%3F",
  },
  {
    name: "Varsity Jersey",
    category: "Tops",
    price: "Rp 549.000",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
    waLink: "https://wa.me/6281311976385?text=Halo!%20Saya%20tertarik%20dengan%20Varsity%20Jersey%20SVMMERLOCO.%20Bisa%20info%20ukuran%20dan%20harga%3F",
  },
  {
    name: "Tactical Vest",
    category: "Outerwear",
    price: "Rp 599.000",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    waLink: "https://wa.me/6281311976385?text=Halo!%20Saya%20tertarik%20dengan%20Tactical%20Vest%20SVMMERLOCO.%20Bisa%20info%20ukuran%20dan%20harga%3F",
  },
  {
    name: "Loose Shorts",
    category: "Bottoms",
    price: "Rp 299.000",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80",
    waLink: "https://wa.me/6281311976385?text=Halo!%20Saya%20tertarik%20dengan%20Loose%20Shorts%20SVMMERLOCO.%20Bisa%20info%20ukuran%20dan%20harga%3F",
  },
]

const content = {
  id: {
    label: "THE COLLECTION",
    heading: "Shop The Look",
    viewAll: "Lihat Semua Koleksi",
    orderViaWa: "ORDER VIA WA",
  },
  en: {
    label: "THE COLLECTION",
    heading: "Shop The Look",
    viewAll: "View All Collection",
    orderViaWa: "ORDER VIA WA",
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

export function CollectionSection() {
  const { language } = useTheme()
  const t = content[language]

  return (
    <section id="collection" className="py-24 lg:py-32 bg-background">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              {/* Product Image — no hover effect per brief */}
              <div className="relative aspect-[3/4] w-full overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div>
                <span className="font-accent text-xs uppercase tracking-ultra-wide text-accent">
                  {product.category}
                </span>
                <h3 className="font-heading font-medium text-lg uppercase tracking-wide text-foreground mt-1">
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-muted-foreground mt-1">
                  {product.price}
                </p>
                <a
                  href={product.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 font-heading font-bold text-xs uppercase tracking-wide text-accent hover:text-secondary transition-colors duration-200"
                >
                  {t.orderViaWa}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/6281311976385?text=Halo!%20Saya%20mau%20lihat%20semua%20koleksi%20SVMMERLOCO%20yang%20tersedia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-heading font-bold text-sm uppercase tracking-wide border border-accent text-accent px-8 py-4 rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            {t.viewAll}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
