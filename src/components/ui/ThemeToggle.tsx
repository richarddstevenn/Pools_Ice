"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by waiting for component to mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-[68px] h-[34px]" />
  }

  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center w-[68px] h-[34px] rounded-full p-1 transition-colors duration-300 focus:outline-none ${
        isDark 
          ? "bg-slate-950 border border-slate-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]" 
          : "bg-slate-200 border border-slate-300/50 shadow-[inset_0_2px_5px_rgba(0,0,0,0.1)]"
      }`}
      aria-label="Toggle theme"
      style={{ justifyContent: isDark ? "flex-end" : "flex-start" }}
    >
      {/* Background Icons (shows on the empty side of the track) */}
      <div className="absolute inset-0 flex justify-between items-center px-2.5 pointer-events-none">
        <Moon className={`w-3.5 h-3.5 text-slate-400 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`} />
        <Sun className={`w-4 h-4 text-slate-500 transition-opacity duration-300 ${!isDark ? 'opacity-0' : 'opacity-100'}`} />
      </div>

      {/* Sliding Thumb */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`flex items-center justify-center w-6 h-6 rounded-full z-10 ${
          isDark 
            ? "bg-slate-800 border border-slate-700 shadow-[0_0_15px_rgba(6,182,212,0.4)]" 
            : "bg-white border border-slate-200 shadow-sm"
        }`}
      >
        <motion.div
          initial={{ rotate: isDark ? -180 : 180, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          key={isDark ? "moon" : "sun"}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-cyan-400" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-amber-500" />
          )}
        </motion.div>
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

