"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MessageCircle, MapPin, Send } from "lucide-react"
import { useTheme } from "./theme-provider"

const content = {
  id: {
    label: "HIT US UP",
    heading: "Hubungi Kami",
    form: {
      name: "Nama",
      email: "Email",
      message: "Pesan",
      submit: "KIRIM PESAN",
    },
    social: {
      instagram: "Follow us on Instagram",
      tiktok: "Follow us on TikTok",
      whatsapp: "Chat via WhatsApp",
    },
    address: "Jakarta, Indonesia",
  },
  en: {
    label: "HIT US UP",
    heading: "Contact Us",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "SEND MESSAGE",
    },
    social: {
      instagram: "Follow us on Instagram",
      tiktok: "Follow us on TikTok",
      whatsapp: "Chat via WhatsApp",
    },
    address: "Jakarta, Indonesia",
  },
}

export function ContactSection() {
  const { language } = useTheme()
  const t = content[language]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to WhatsApp
    window.open(
      "https://wa.me/6281311976385?text=Halo%20SVMMERLOCO!%20Ada%20yang%20ingin%20saya%20tanyakan.",
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-accent text-sm uppercase tracking-ultra-wide text-accent">
              {t.label}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-foreground mt-4">
              {t.heading}
            </h2>

            <div className="mt-10 space-y-6">
              {/* Instagram */}
              <a
                href="https://instagram.com/svmmerloco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent transition-colors">
                  <svg
                    className="w-5 h-5 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-200">
                  <p className="font-heading font-medium uppercase tracking-wide text-[#F5F5F5] group-hover:text-accent transition-colors duration-200">
                    @svmmerloco
                  </p>
                  <p className="font-accent text-xs text-muted-foreground">
                    {t.social.instagram}
                  </p>
                </div>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@svmmerloco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent transition-colors">
                  <svg
                    className="w-5 h-5 text-accent"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-200">
                  <p className="font-heading font-medium uppercase tracking-wide text-[#F5F5F5] group-hover:text-accent transition-colors duration-200">
                    @svmmerloco
                  </p>
                  <p className="font-accent text-xs text-muted-foreground">
                    {t.social.tiktok}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/6281311976385?text=Halo%20SVMMERLOCO!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-accent transition-colors">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-200">
                  <p className="font-heading font-medium uppercase tracking-wide text-[#F5F5F5] group-hover:text-accent transition-colors duration-200">
                    0813-1197-6385
                  </p>
                  <p className="font-accent text-xs text-muted-foreground">
                    {t.social.whatsapp}
                  </p>
                </div>
              </a>
            </div>

            {/* Map Placeholder */}
          <div className="mt-10">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9501.208932819496!2d-2.3016183548397415!3d53.463058459015556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae72e7e47f69%3A0x6c930e96df4455fe!2sOld%20Trafford!5e0!3m2!1sid!2sid!4v1780736043825!5m2!1sid!2sid"
    width="100%"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-md border border-border"
  ></iframe>
</div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-accent text-xs uppercase tracking-wide text-muted-foreground mb-2">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-input border border-border focus:border-accent px-4 py-4 text-foreground font-sans placeholder:text-muted-foreground/50 outline-none transition-colors"
                  placeholder={t.form.name}
                />
              </div>

              <div>
                <label className="block font-accent text-xs uppercase tracking-wide text-muted-foreground mb-2">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-input border border-border focus:border-accent px-4 py-4 text-foreground font-sans placeholder:text-muted-foreground/50 outline-none transition-colors"
                  placeholder={t.form.email}
                />
              </div>

              <div>
                <label className="block font-accent text-xs uppercase tracking-wide text-muted-foreground mb-2">
                  {t.form.message}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full bg-input border border-border focus:border-accent px-4 py-4 text-foreground font-sans placeholder:text-muted-foreground/50 outline-none transition-colors resize-none"
                  placeholder={t.form.message}
                />
              </div>

              <button
                type="submit"
                className="w-full font-heading font-bold uppercase tracking-wide text-sm bg-accent text-accent-foreground px-8 py-4 rounded-sm hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {t.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
