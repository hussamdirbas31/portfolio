'use client'
import { motion } from 'framer-motion'

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-[#00b4b4] opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#008c8c] opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  )
}

export default BackgroundElements