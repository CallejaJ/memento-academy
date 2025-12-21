"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true) // Default to dark theme

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = savedTheme === "dark" || (!savedTheme && true)
    setIsDark(prefersDark)

    // Apply theme to document
    if (prefersDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    // Save preference
    localStorage.setItem("theme", newTheme ? "dark" : "light")

    // Apply theme to document
    if (newTheme) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden transition-all duration-300 hover:scale-105"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 text-amber-500"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
            isDark ? "rotate-0 scale-100 opacity-100 text-cyan-400" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
