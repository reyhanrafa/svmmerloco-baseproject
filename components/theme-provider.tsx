"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"
type Language = "id" | "en"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  language: Language
  toggleLanguage: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [language, setLanguage] = useState<Language>("id")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("svmmerloco-theme") as Theme
    const savedLang = localStorage.getItem("svmmerloco-lang") as Language
    if (savedTheme) setTheme(savedTheme)
    if (savedLang) setLanguage(savedLang)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove("dark", "light")
      document.documentElement.classList.add(theme)
      localStorage.setItem("svmmerloco-theme", theme)
    }
  }, [theme, mounted])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("svmmerloco-lang", language)
    }
  }, [language, mounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"))
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    // Return default values when not inside provider (during SSR)
    return {
      theme: "dark" as Theme,
      toggleTheme: () => {},
      language: "id" as Language,
      toggleLanguage: () => {},
    }
  }
  return context
}
