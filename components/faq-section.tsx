"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useTheme } from "./theme-provider"

const faqData = {
  id: {
    label: "FAQ",
    heading: "Ada Pertanyaan?",
    items: [
      {
        question: "Bagaimana cara memilih ukuran yang tepat?",
        answer: "Kami menyediakan size chart lengkap di setiap halaman produk. Ukur badan lo dan cocokkan dengan panduan ukuran kami. Kalau masih ragu, pilih ukuran yang lebih besar karena produk kami cenderung slightly fitted. Lo juga bisa DM kami untuk konsultasi ukuran.",
      },
      {
        question: "Berapa lama estimasi pengiriman?",
        answer: "Untuk area Jabodetabek, pengiriman memakan waktu 1-3 hari kerja. Untuk luar Jabodetabek, estimasi 3-7 hari kerja tergantung lokasi. Kami bekerja sama dengan ekspedisi terpercaya dan semua paket dilengkapi tracking number.",
      },
      {
        question: "Bahan apa yang digunakan untuk produk SVMMERLOCO?",
        answer: "Kami menggunakan 100% premium cotton untuk tees (180-220 GSM) dan heavy fleece cotton untuk hoodies (350-400 GSM). Semua bahan dipilih untuk durabilitas dan kenyamanan maksimal. Pre-shrunk treatment sudah dilakukan sehingga ukuran tidak berubah setelah dicuci.",
      },
      {
        question: "Metode pembayaran apa saja yang tersedia?",
        answer: "Kami menerima transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, DANA, ShopeePay), kartu kredit/debit, dan COD untuk area tertentu. Semua transaksi dijamin aman dan terenkripsi.",
      },
      {
        question: "Apakah bisa retur atau tukar ukuran?",
        answer: "Ya, kami menyediakan opsi tukar ukuran dalam 7 hari setelah barang diterima dengan syarat produk belum dipakai/dicuci dan tag masih terpasang. Untuk retur, kami hanya menerima jika ada cacat produksi. Biaya ongkir tukar ukuran ditanggung pembeli.",
      },
    ],
  },
  en: {
    label: "FAQ",
    heading: "Got Questions?",
    items: [
      {
        question: "How do I choose the right size?",
        answer: "We provide a complete size chart on each product page. Measure yourself and match it with our size guide. If unsure, choose a larger size as our products tend to be slightly fitted. You can also DM us for size consultation.",
      },
      {
        question: "How long is the estimated delivery?",
        answer: "For Jabodetabek area, delivery takes 1-3 business days. Outside Jabodetabek, estimated 3-7 business days depending on location. We work with trusted couriers and all packages come with tracking numbers.",
      },
      {
        question: "What materials are used for SVMMERLOCO products?",
        answer: "We use 100% premium cotton for tees (180-220 GSM) and heavy fleece cotton for hoodies (350-400 GSM). All materials are selected for maximum durability and comfort. Pre-shrunk treatment is applied so sizes don&apos;t change after washing.",
      },
      {
        question: "What payment methods are available?",
        answer: "We accept bank transfers (BCA, Mandiri, BNI, BRI), e-wallets (GoPay, OVO, DANA, ShopeePay), credit/debit cards, and COD for certain areas. All transactions are guaranteed safe and encrypted.",
      },
      {
        question: "Can I return or exchange sizes?",
        answer: "Yes, we provide size exchange option within 7 days after receiving with conditions that product is unworn/unwashed and tags still attached. For returns, we only accept manufacturing defects. Shipping cost for exchange is borne by buyer.",
      },
    ],
  },
}

export function FAQSection() {
  const { language } = useTheme()
  const t = faqData[language]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-0"
        >
          {t.items.map((item, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-heading font-medium text-base md:text-lg uppercase tracking-wide text-foreground group-hover:text-accent transition-colors pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-accent" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-sm md:text-base text-muted-foreground pb-6 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
