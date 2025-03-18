"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterTextProps {
  text: string
  delay?: number
  className?: string
}

const TypewriterText = ({ text, delay = 2000, className = "" }: TypewriterTextProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  // Create an array of letters for the text animation
  const letters = Array.from(text)

  return (
    <motion.div
      className={`typewriter-container ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isVisible && (
        <motion.span
          className="relative group inline-block"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.05 * index,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
          <motion.span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full"
            transition={{ duration: 0.3 }}
            whileHover={{ width: "100%" }}
          />
        </motion.span>
      )}
    </motion.div>
  )
}

export default TypewriterText

