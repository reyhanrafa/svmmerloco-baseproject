"use client"

import { MessageCircle } from "lucide-react"
import { useTheme } from "./theme-provider"

const content = {
  id: {
    tagline: "Culture Over Trends.",
    description: "Premium streetwear Indonesia untuk mereka yang punya karakter.",
    links: {
      title: "Quick Links",
      items: ["Home", "Collection", "About", "Contact", "FAQ"],
    },
    newsletter: "Newsletter",
    placeholder: "Email kamu",
    subscribe: "Subscribe",
    copyright: "© 2025 SVMMERLOCO. All Rights Reserved.",
  },
  en: {
    tagline: "Culture Over Trends.",
    description: "Premium Indonesian streetwear for those with character.",
    links: {
      title: "Quick Links",
      items: ["Home", "Collection", "About", "Contact", "FAQ"],
    },
    newsletter: "Newsletter",
    placeholder: "Your email",
    subscribe: "Subscribe",
    copyright: "© 2025 SVMMERLOCO. All Rights Reserved.",
  },
}

const linkHrefs = ["#home", "#collection", "#about", "#contact", "#faq"]

export function Footer() {
  const { language } = useTheme()
  const t = content[language]

  return (
    <footer className="bg-card py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-super-wide text-foreground">
              SVMMERLOCO
            </h3>
            <p className="font-heading text-sm uppercase tracking-wide text-accent mt-2">
              {t.tagline}
            </p>
            <p className="font-sans text-sm text-muted-foreground mt-4">
              {t.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wide text-foreground mb-6">
              {t.links.title}
            </h4>
            <nav className="space-y-3">
              {t.links.items.map((item, index) => (
                <a
                  key={item}
                  href={linkHrefs[index]}
                  className="block font-sans text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wide text-foreground mb-6">
              {t.newsletter}
            </h4>
            <div className="flex gap-2 mb-8">
              <input
                type="email"
                placeholder={t.placeholder}
                className="flex-1 bg-input border border-border focus:border-accent px-4 py-3 text-sm text-foreground font-sans placeholder:text-muted-foreground/50 outline-none transition-colors"
              />
              <button className="font-heading font-bold text-xs uppercase tracking-wide bg-accent text-accent-foreground px-4 py-3 hover:bg-secondary transition-colors">
                {t.subscribe}
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/svmmerloco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors duration-200 text-foreground"
              >
                <svg
                  className="w-4 h-4"
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
              </a>
              <a
                href="https://tiktok.com/@svmmerloco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors duration-200 text-foreground"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://wa.me/6281311976385"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors duration-200 text-foreground"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="font-sans text-xs text-foreground/40 text-center">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
