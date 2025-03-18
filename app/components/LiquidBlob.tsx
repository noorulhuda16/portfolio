"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const LiquidBlob = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let time = 0
    const color = "rgba(20, 184, 166, 0.15)"

    // Set canvas dimensions
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resize)
    resize()

    // Animation function
    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw blob
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.2

      ctx.save()
      ctx.translate(centerX, centerY)

      ctx.beginPath()

      for (let i = 0; i < Math.PI * 2; i += 0.01) {
        const noiseX = Math.cos(i) * 3
        const noiseY = Math.sin(i) * 3
        const noise = (Math.sin(time + i * 2) + Math.sin(time + i * 5)) * 20

        const x = Math.cos(i) * (radius + noise) + noiseX
        const y = Math.sin(i) * (radius + noise) + noiseY

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
      ctx.restore()

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  )
}

export default LiquidBlob

