'use client'
import { motion } from 'framer-motion'

const BubblesBackground = () => {
  const bubbles = Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 100 + 50
    return {
      id: i,
      size,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    }
  })

  return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      {bubbles.map(bubble => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-[#00b4b4]"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            opacity: 0.5
          }}
          animate={{
            y: [0, -10],
            x: [0, (Math.random() - 0.5) * 200],
            opacity: [0.3, 0]
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

export default BubblesBackground
