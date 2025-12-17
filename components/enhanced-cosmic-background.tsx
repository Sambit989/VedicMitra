"use client"

import { useEffect, useRef } from "react"

export function EnhancedCosmicBackground() {
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

    // Enhanced celestial bodies with more variety and better distribution
    const celestialBodies: Array<{
      x: number
      y: number
      size: number
      opacity: number
      type: string
      color: string
      speed: number
      angle: number
      radius: number
      centerX: number
      centerY: number
      orbitSpeed: number
      twinkleSpeed: number
      glowIntensity: number
    }> = []

    const grahas = ["☉", "☽", "♂", "☿", "♃", "♀", "♄", "⚷", "♆"] // Planets
    const nakshatras = ["✦", "✧", "⭐", "🌟", "✨", "💫", "⋆", "✩", "🌠"] // Stars
    const zodiacSymbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"]
    const cosmicElements = ["🌙", "☄️", "🪐", "🌌", "⚡", "🔮", "🌀", "💎", "🔥", "❄️"]

    // Create multiple layers of celestial bodies
    for (let layer = 0; layer < 4; layer++) {
      const bodiesInLayer = layer === 0 ? 40 : layer === 1 ? 30 : layer === 2 ? 25 : 20

      for (let i = 0; i < bodiesInLayer; i++) {
        const type = Math.random()
        let symbol, color, size, glowIntensity

        if (type < 0.2) {
          // Grahas (Planets) - most prominent
          symbol = grahas[Math.floor(Math.random() * grahas.length)]
          color = `rgba(255, 215, 0, ${Math.random() * 0.8 + 0.4})`
          size = Math.random() * 20 + 15
          glowIntensity = Math.random() * 15 + 10
        } else if (type < 0.4) {
          // Nakshatras (Stars) - twinkling
          symbol = nakshatras[Math.floor(Math.random() * nakshatras.length)]
          color = `rgba(255, 255, 255, ${Math.random() * 0.9 + 0.3})`
          size = Math.random() * 16 + 10
          glowIntensity = Math.random() * 20 + 15
        } else if (type < 0.65) {
          // Zodiac symbols - medium prominence
          symbol = zodiacSymbols[Math.floor(Math.random() * zodiacSymbols.length)]
          color = `rgba(255, 140, 0, ${Math.random() * 0.6 + 0.3})`
          size = Math.random() * 14 + 8
          glowIntensity = Math.random() * 10 + 5
        } else {
          // Cosmic elements - special mystical effects
          symbol = cosmicElements[Math.floor(Math.random() * cosmicElements.length)]
          const colors = [
            `rgba(138, 43, 226, ${Math.random() * 0.7 + 0.3})`, // Purple
            `rgba(75, 0, 130, ${Math.random() * 0.6 + 0.2})`, // Indigo
            `rgba(0, 191, 255, ${Math.random() * 0.5 + 0.2})`, // Deep Sky Blue
            `rgba(255, 20, 147, ${Math.random() * 0.4 + 0.2})`, // Deep Pink
          ]
          color = colors[Math.floor(Math.random() * colors.length)]
          size = Math.random() * 18 + 12
          glowIntensity = Math.random() * 25 + 20
        }

        // Different orbital patterns for each layer
        const baseRadius = 100 + layer * 150
        const radius = baseRadius + Math.random() * 200
        const angle = Math.random() * Math.PI * 2

        // Vary orbital speeds by layer and type
        let orbitSpeed = (Math.random() * 0.003 + 0.0005) * (Math.random() > 0.5 ? 1 : -1)
        if (layer === 0) orbitSpeed *= 1.5 // Innermost layer moves faster
        if (layer === 3) orbitSpeed *= 0.3 // Outermost layer moves slower

        celestialBodies.push({
          x: 0,
          y: 0,
          size,
          opacity: Math.random() * 0.8 + 0.3,
          type: symbol,
          color,
          speed: Math.random() * 0.5 + 0.1,
          angle,
          radius,
          centerX: 0,
          centerY: 0,
          orbitSpeed,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          glowIntensity,
        })
      }
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dynamic center that follows the zodiac wheel position
      const centerX = canvas.width > 1024 ? canvas.width * 0.75 : canvas.width / 2
      const centerY = canvas.height / 2

      celestialBodies.forEach((body) => {
        // Update center position
        body.centerX = centerX
        body.centerY = centerY

        // Orbital movement around the center
        body.angle += body.orbitSpeed

        // Calculate new position with some randomness for organic movement
        const wobble = Math.sin(Date.now() * 0.001 + body.angle * 3) * 10
        body.x = body.centerX + Math.cos(body.angle) * (body.radius + wobble)
        body.y = body.centerY + Math.sin(body.angle) * (body.radius + wobble)

        // Enhanced twinkling effect
        body.opacity += Math.sin(Date.now() * body.twinkleSpeed) * 0.3
        body.opacity = Math.max(0.1, Math.min(1, body.opacity))

        // Draw with enhanced glow effects
        ctx.font = `${body.size}px serif`
        ctx.fillStyle = body.color
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        // Multiple glow layers for enhanced effect
        if (body.glowIntensity > 10) {
          ctx.shadowColor = body.color
          ctx.shadowBlur = body.glowIntensity
          ctx.fillText(body.type, body.x, body.y)

          ctx.shadowBlur = body.glowIntensity * 0.5
          ctx.fillText(body.type, body.x, body.y)
        }

        ctx.shadowBlur = 0
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
          radial-gradient(circle at 75% 50%, rgba(25, 25, 112, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 25% 25%, rgba(75, 0, 130, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 25% 75%, rgba(0, 191, 255, 0.2) 0%, transparent 40%),
          radial-gradient(circle at 50% 25%, rgba(255, 20, 147, 0.2) 0%, transparent 40%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(25, 25, 112, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%)
        `,
      }}
    />
  )
}
