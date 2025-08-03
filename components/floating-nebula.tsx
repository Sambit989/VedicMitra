"use client"

import { useEffect, useRef } from "react"

export function FloatingNebula() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createNebula = () => {
      const nebula = document.createElement("div")
      nebula.className = "absolute rounded-full opacity-20 pointer-events-none animate-pulse"

      const size = Math.random() * 300 + 100
      const colors = [
        "bg-gradient-to-r from-purple-500/30 to-pink-500/30",
        "bg-gradient-to-r from-blue-500/30 to-cyan-500/30",
        "bg-gradient-to-r from-yellow-500/30 to-orange-500/30",
        "bg-gradient-to-r from-green-500/30 to-teal-500/30",
      ]

      nebula.className += ` ${colors[Math.floor(Math.random() * colors.length)]}`
      nebula.style.width = `${size}px`
      nebula.style.height = `${size}px`
      nebula.style.left = `${Math.random() * 100}%`
      nebula.style.top = `${Math.random() * 100}%`
      nebula.style.filter = "blur(40px)"
      nebula.style.animation = `float ${Math.random() * 20 + 30}s linear infinite`

      container.appendChild(nebula)

      setTimeout(() => {
        if (container.contains(nebula)) {
          container.removeChild(nebula)
        }
      }, 50000)
    }

    // Create initial nebulae
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createNebula(), i * 2000)
    }

    const interval = setInterval(createNebula, 8000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-1 overflow-hidden" />
}
