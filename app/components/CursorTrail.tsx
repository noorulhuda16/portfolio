"use client"

import { useEffect, useRef } from "react"

interface Point {
  x: number
  y: number
  dx: number
  dy: number
  age: number
  maxAge: number
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resize)
    resize()

    // Trail points
    const points: Point[] = []
    const maxPoints = 50
    const trailColor = "rgba(20, 184, 166, 0.2)"

    // Mouse position
    let mouseX = 0
    let mouseY = 0
    let lastX = 0
    let lastY = 0

    const addPoint = (x: number, y: number) => {
      const dx = x - lastX
      const dy = y - lastY

      lastX = x
      lastY = y

      points.push({
        x,
        y,
        dx,
        dy,
        age: 0,
        maxAge: Math.random() * 50 + 50,
      })

      if (points.length > maxPoints) {
        points.shift()
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      addPoint(mouseX, mouseY)
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw points
      for (let i = 0; i < points.length; i++) {
        const point = points[i]
        point.age++

        if (point.age > point.maxAge) {
          points.splice(i, 1)
          i--
          continue
        }

        const size = (1 - point.age / point.maxAge) * 15

        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fillStyle = trailColor
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" style={{ mixBlendMode: "lighten" }} />
  )
}

export default CursorTrail

