'use client'
import { motion } from 'framer-motion'

const DecorativeElement = () => {
  return (
    <motion.div 
      className="mt-24 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="inline-block w-24 h-1 bg-gradient-to-r from-[#00b4b4] to-[#008c8c] rounded-full"
        animate={{
          scaleX: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  )
}

export default DecorativeElement