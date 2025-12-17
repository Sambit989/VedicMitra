"use client"

import { useEffect, useRef } from "react"

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grahas (Planets), Nakshatras, and celestial elements
    const celestialBodies: Array<{
      x: number
      y: number
      size: number
      opacity: number
      type: string
      color: string
      speed: number
    }> = []

    const grahas = ["☉", "☽", "♂", "☿", "♃", "♀", "♄", "⚷", "♆"] // Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Uranus, Neptune
    const nakshatras = ["✦", "✧", "⭐", "🌟", "✨", "💫"] // Different star types
    const zodiacSymbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"]

    // Create celestial bodies
    for (let i = 0; i < 150; i++) {
      const type = Math.random()
      let symbol, color, size

      if (type < 0.3) {
        // Grahas (Planets)
        symbol = grahas[Math.floor(Math.random() * grahas.length)]
        color = `rgba(255, 215, 0, ${Math.random() * 0.8 + 0.2})`
        size = Math.random() * 15 + 8
      } else if (type < 0.6) {
        // Nakshatras (Stars)
        symbol = nakshatras[Math.floor(Math.random() * nakshatras.length)]
        color = `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2})`
        size = Math.random() * 12 + 6
      } else {
        // Zodiac symbols
        symbol = zodiacSymbols[Math.floor(Math.random() * zodiacSymbols.length)]
        color = `rgba(255, 140, 0, ${Math.random() * 0.4 + 0.1})`
        size = Math.random() * 10 + 5
      }

      celestialBodies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        opacity: Math.random() * 0.8 + 0.2,
        type: symbol,
        color,
        speed: Math.random() * 0.5 + 0.1,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      celestialBodies.forEach((body) => {
        // Gentle floating movement
        body.y -= body.speed
        body.opacity += (Math.random() - 0.5) * 0.02

        // Reset position when it goes off screen
        if (body.y < -50) {
          body.y = canvas.height + 50
          body.x = Math.random() * canvas.width
        }

        // Keep opacity in bounds
        body.opacity = Math.max(0.1, Math.min(0.8, body.opacity))

        // Draw the celestial body
        ctx.font = `${body.size}px serif`
        ctx.fillStyle = body.color
        ctx.textAlign = "center"
        ctx.fillText(body.type, body.x, body.y)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(75, 0, 130, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(25, 25, 112, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)
        `,
      }}
    />
  )
}
