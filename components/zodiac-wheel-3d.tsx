"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, Ring, Sphere, Box } from "@react-three/drei"
import { useRef, useMemo } from "react"
import type * as THREE from "three"

function ZodiacSign({
  position,
  symbol,
  name,
  angle,
}: { position: [number, number, number]; symbol: string; name: string; angle: number }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = -angle // Counter-rotate to keep text upright
    }
  })

  return (
    <group position={position} ref={groupRef}>
      <Text fontSize={0.4} color="#FFD700" anchorX="center" anchorY="middle" font="/fonts/Inter-Bold.ttf">
        {symbol}
      </Text>
      <Text
        position={[0, -0.6, 0]}
        fontSize={0.15}
        color="#FF8C00"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Regular.ttf"
      >
        {name}
      </Text>
    </group>
  )
}

function CelestialElements() {
  const elementsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (elementsRef.current) {
      elementsRef.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })

  const celestialElements = useMemo(() => {
    const elements = []
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2
      const radius = 4 + Math.random() * 2
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      const z = (Math.random() - 0.5) * 0.5

      elements.push({
        position: [x, y, z] as [number, number, number],
        type: Math.floor(Math.random() * 4),
        scale: 0.05 + Math.random() * 0.1,
      })
    }
    return elements
  }, [])

  const getElementSymbol = (type: number) => {
    switch (type) {
      case 0:
        return "✦"
      case 1:
        return "☽"
      case 2:
        return "☉"
      case 3:
        return "✧"
      default:
        return "✦"
    }
  }

  return (
    <group ref={elementsRef}>
      {celestialElements.map((element, index) => (
        <Text
          key={index}
          position={element.position}
          fontSize={element.scale * 4}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.ttf"
        >
          {getElementSymbol(element.type)}
        </Text>
      ))}
    </group>
  )
}

function ZodiacRings() {
  const outerRingRef = useRef<THREE.Group>(null)
  const middleRingRef = useRef<THREE.Group>(null)
  const innerRingRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
    if (middleRingRef.current) {
      middleRingRef.current.rotation.z = -state.clock.elapsedTime * 0.08
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = state.clock.elapsedTime * 0.12
    }
  })

  return (
    <>
      {/* Outer Ring */}
      <group ref={outerRingRef}>
        <Ring args={[3.2, 3.4, 64]} rotation={[0, 0, 0]}>
          <meshBasicMaterial color="#FFD700" transparent opacity={0.6} />
        </Ring>
        <Ring args={[3.0, 3.2, 64]} rotation={[0, 0, 0]}>
          <meshBasicMaterial color="#FF8C00" transparent opacity={0.3} />
        </Ring>
      </group>

      {/* Middle Ring */}
      <group ref={middleRingRef}>
        <Ring args={[2.4, 2.6, 64]} rotation={[0, 0, 0]}>
          <meshBasicMaterial color="#FFD700" transparent opacity={0.4} />
        </Ring>
      </group>

      {/* Inner Ring */}
      <group ref={innerRingRef}>
        <Ring args={[1.8, 2.0, 64]} rotation={[0, 0, 0]}>
          <meshBasicMaterial color="#FF8C00" transparent opacity={0.5} />
        </Ring>
      </group>
    </>
  )
}

function CentralSun() {
  const sunRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (sunRef.current) {
      sunRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={sunRef}>
      {/* Central Sun */}
      <Sphere args={[0.3]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#FFD700" />
      </Sphere>

      {/* Sun Rays */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        const x = Math.cos(angle) * 0.6
        const y = Math.sin(angle) * 0.6
        return (
          <Box key={i} args={[0.02, 0.3, 0.02]} position={[x, y, 0]} rotation={[0, 0, angle]}>
            <meshBasicMaterial color="#FFD700" />
          </Box>
        )
      })}

      {/* Inner sun symbol */}
      <Text fontSize={0.2} color="#000000" anchorX="center" anchorY="middle" font="/fonts/Inter-Bold.ttf">
        ☉
      </Text>
    </group>
  )
}

function ZodiacWheel() {
  const wheelRef = useRef<THREE.Group>(null)

  const zodiacSigns = [
    { symbol: "♈", name: "Aries", constellation: "Ram" },
    { symbol: "♉", name: "Taurus", constellation: "Bull" },
    { symbol: "♊", name: "Gemini", constellation: "Twins" },
    { symbol: "♋", name: "Cancer", constellation: "Crab" },
    { symbol: "♌", name: "Leo", constellation: "Lion" },
    { symbol: "♍", name: "Virgo", constellation: "Virgin" },
    { symbol: "♎", name: "Libra", constellation: "Scales" },
    { symbol: "♏", name: "Scorpio", constellation: "Scorpion" },
    { symbol: "♐", name: "Sagittarius", constellation: "Archer" },
    { symbol: "♑", name: "Capricorn", constellation: "Goat" },
    { symbol: "♒", name: "Aquarius", constellation: "Water Bearer" },
    { symbol: "♓", name: "Pisces", constellation: "Fish" },
  ]

  useFrame((state) => {
    if (wheelRef.current) {
      wheelRef.current.rotation.z = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={wheelRef}>
      {zodiacSigns.map((sign, index) => {
        const angle = (index / zodiacSigns.length) * Math.PI * 2
        const radius = 2.7
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return <ZodiacSign key={index} position={[x, y, 0]} symbol={sign.symbol} name={sign.name} angle={angle} />
      })}
    </group>
  )
}

export function ZodiacWheel3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, 10]} intensity={0.4} color="#FF8C00" />

        <CelestialElements />
        <ZodiacRings />
        <ZodiacWheel />
        <CentralSun />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
