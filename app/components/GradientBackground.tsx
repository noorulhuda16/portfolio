"use client"

import { motion } from "framer-motion"

export default function GradientBackground() {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      animate={{
        background: [
          "radial-gradient(circle at 30% 30%, rgba(153, 246, 228, 0.15), transparent 70%)",
          "radial-gradient(circle at 70% 70%, rgba(153, 246, 228, 0.15), transparent 70%)",
          "radial-gradient(circle at 30% 70%, rgba(153, 246, 228, 0.15), transparent 70%)",
          "radial-gradient(circle at 70% 30%, rgba(153, 246, 228, 0.15), transparent 70%)",
        ],
      }}
      transition={{
        duration: 15,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  )
}

