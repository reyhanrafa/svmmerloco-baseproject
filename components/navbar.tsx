"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"
import { useTheme } from "./theme-provider"

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme, language, toggleLanguage } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              className="font-heading text-2xl md:text-3xl font-bold tracking-super-wide text-foreground"
            >
              SVMMERLOCO
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-sm font-medium uppercase tracking-wide text-foreground hover:text-accent transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-foreground hover:text-accent transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="font-accent text-xs uppercase">{language}</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-foreground hover:text-accent transition-colors"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* CTA Button */}
              <a
                href="https://wa.me/6281311976385?text=Halo%20SVMMERLOCO!%20Saya%20mau%20lihat%20koleksi%20terbaru.%20Ada%20yang%20ready%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-bold text-sm uppercase tracking-wide bg-accent text-accent-foreground px-6 py-3 rounded-sm hover:bg-secondary transition-colors duration-300"
              >
                Shop Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-foreground"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-background z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-heading text-xl font-bold tracking-super-wide text-foreground">
                    SVMMERLOCO
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-foreground"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground hover:text-accent transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-border">
                  <div className="flex items-center gap-4 mb-6">
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                      <span className="font-accent text-sm uppercase">{language}</span>
                    </button>
                    <button
                      onClick={toggleTheme}
                      className="p-2 text-foreground hover:text-accent transition-colors"
                    >
                      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                  </div>

                  <a
                    href="https://wa.me/6281311976385?text=Halo%20SVMMERLOCO!%20Saya%20mau%20lihat%20koleksi%20terbaru.%20Ada%20yang%20ready%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center font-heading font-bold text-sm uppercase tracking-wide bg-accent text-accent-foreground px-6 py-4 rounded-sm"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
