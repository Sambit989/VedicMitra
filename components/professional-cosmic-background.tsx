"use client"

import { useEffect, useRef } from "react"

export function ProfessionalCosmicBackground() {
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

    // Professional celestial elements with refined appearance
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
      layer: number
    }> = []

    const professionalElements = {
      primary: ["☉", "☽", "⭐"], // Main celestial bodies
      secondary: ["✦", "✧", "💫"], // Supporting stars
      zodiac: ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"],
      subtle: ["·", "∘", "◦"], // Subtle dots for depth
    }

    // Create refined layers with professional distribution
    for (let layer = 0; layer < 3; layer++) {
      const bodiesInLayer = layer === 0 ? 15 : layer === 1 ? 25 : 35

      for (let i = 0; i < bodiesInLayer; i++) {
        const type = Math.random()
        let symbol, color, size, glowIntensity

        if (layer === 0 && type < 0.3) {
          // Primary celestial bodies - most prominent
          symbol = professionalElements.primary[Math.floor(Math.random() * professionalElements.primary.length)]
          color = `rgba(255, 215, 0, ${Math.random() * 0.6 + 0.4})`
          size = Math.random() * 16 + 12
          glowIntensity = Math.random() * 12 + 8
        } else if (layer === 1 && type < 0.4) {
          // Secondary stars
          symbol = professionalElements.secondary[Math.floor(Math.random() * professionalElements.secondary.length)]
          color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`
          size = Math.random() * 12 + 8
          glowIntensity = Math.random() * 8 + 5
        } else if (type < 0.6) {
          // Zodiac symbols - refined
          symbol = professionalElements.zodiac[Math.floor(Math.random() * professionalElements.zodiac.length)]
          color = `rgba(255, 140, 0, ${Math.random() * 0.4 + 0.2})`
          size = Math.random() * 10 + 6
          glowIntensity = Math.random() * 6 + 3
        } else {
          // Subtle background elements
          symbol = professionalElements.subtle[Math.floor(Math.random() * professionalElements.subtle.length)]
          color = `rgba(200, 200, 255, ${Math.random() * 0.3 + 0.1})`
          size = Math.random() * 6 + 3
          glowIntensity = Math.random() * 3 + 1
        }

        // Professional orbital patterns
        const baseRadius = 150 + layer * 200
        const radius = baseRadius + Math.random() * 150
        const angle = Math.random() * Math.PI * 2

        // Refined orbital speeds
        let orbitSpeed = (Math.random() * 0.002 + 0.0003) * (Math.random() > 0.5 ? 1 : -1)
        if (layer === 0) orbitSpeed *= 0.8 // Slower, more majestic movement
        if (layer === 2) orbitSpeed *= 1.5 // Faster background elements

        celestialBodies.push({
          x: 0,
          y: 0,
          size,
          opacity: Math.random() * 0.6 + 0.2,
          type: symbol,
          color,
          speed: Math.random() * 0.3 + 0.1,
          angle,
          radius,
          centerX: 0,
          centerY: 0,
          orbitSpeed,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          glowIntensity,
          layer,
        })
      }
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Professional center positioning
      const centerX = canvas.width > 1024 ? canvas.width * 0.72 : canvas.width / 2
      const centerY = canvas.height / 2

      celestialBodies.forEach((body) => {
        body.centerX = centerX
        body.centerY = centerY

        // Smooth orbital movement
        body.angle += body.orbitSpeed

        // Professional positioning with subtle variation
        const smoothWobble = Math.sin(Date.now() * 0.0005 + body.angle * 2) * 5
        body.x = body.centerX + Math.cos(body.angle) * (body.radius + smoothWobble)
        body.y = body.centerY + Math.sin(body.angle) * (body.radius + smoothWobble)

        // Refined twinkling
        body.opacity += Math.sin(Date.now() * body.twinkleSpeed) * 0.2
        body.opacity = Math.max(0.1, Math.min(0.8, body.opacity))

        // Professional rendering
        ctx.font = `${body.size}px serif`
        ctx.fillStyle = body.color
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        // Subtle glow for primary elements only
        if (body.layer === 0 && body.glowIntensity > 5) {
          ctx.shadowColor = body.color
          ctx.shadowBlur = body.glowIntensity * 0.5
        } else {
          ctx.shadowBlur = 0
        }

        ctx.fillText(body.type, body.x, body.y)
        ctx.shadowBlur = 0
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
          radial-gradient(circle at 70% 50%, rgba(25, 25, 112, 0.15) 0%, transparent 60%),
          radial-gradient(circle at 30% 30%, rgba(75, 0, 130, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.08) 0%, transparent 40%),
          linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(15, 15, 35, 0.9) 50%, rgba(0, 0, 0, 0.98) 100%)
        `,
      }}
    />
  )
}
