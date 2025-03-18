"use client"

import { motion } from "framer-motion"

const BackgroundGraphics = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Floating elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            opacity: 0.5,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <div
            className={`w-full h-full ${
              i % 3 === 0
                ? "rounded-full border border-accent/20"
                : i % 3 === 1
                  ? "bg-accent/10 rounded-md"
                  : "border border-accent/20 rounded-lg"
            }`}
          />
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl opacity-30 animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl opacity-20 animate-float" />
    </div>
  )
}

export default BackgroundGraphics

