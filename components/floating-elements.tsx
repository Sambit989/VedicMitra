"use client"

import { useEffect, useRef } from "react"

export function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = [
      "✦",
      "☽",
      "☉",
      "✧",
      "⭐",
      "🌟",
      "✨",
      "🌙",
      "☄️",
      "🪐",
      "♈",
      "♉",
      "♊",
      "♋",
      "♌",
      "♍",
      "♎",
      "♏",
      "♐",
      "♑",
      "♒",
      "♓",
    ]

    const createFloatingElement = () => {
      const element = document.createElement("div")
      element.textContent = elements[Math.floor(Math.random() * elements.length)]
      element.className = "absolute text-yellow-400 pointer-events-none select-none opacity-20"
      element.style.fontSize = `${Math.random() * 20 + 10}px`
      element.style.left = `${Math.random() * 100}%`
      element.style.top = `${Math.random() * 100}%`
      element.style.animation = `float ${Math.random() * 10 + 15}s linear infinite`

      container.appendChild(element)

      setTimeout(() => {
        if (container.contains(element)) {
          container.removeChild(element)
        }
      }, 20000)
    }

    const interval = setInterval(createFloatingElement, 2000)

    // Create initial elements
    for (let i = 0; i < 10; i++) {
      setTimeout(createFloatingElement, i * 200)
    }

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-5 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.05) 0%, transparent 50%)
        `,
      }}
    />
  )
}
