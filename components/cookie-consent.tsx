"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("svmmerloco-cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("svmmerloco-cookie-consent", "accepted")
    setShowConsent(false)
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#0D0D0D] border-t border-border p-4"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-sm text-foreground/80 text-center sm:text-left">
              Kami menggunakan cookies untuk meningkatkan pengalaman browsing kamu.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={acceptCookies}
                className="font-heading font-bold text-xs uppercase tracking-wide bg-accent text-accent-foreground px-6 py-2 hover:bg-secondary transition-colors"
              >
                Accept
              </button>
              <button
                onClick={() => setShowConsent(false)}
                className="p-2 text-foreground/60 hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
