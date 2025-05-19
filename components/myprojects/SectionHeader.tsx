'use client'
import { motion } from 'framer-motion'

const SectionHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
        <span className="relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d8d8] via-[#00b4b4] to-[#008c8c]">
            Projects
          </span>
          <motion.span 
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00d8d8] via-[#00b4b4] to-[#008c8c] rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </span>
      </h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-[#e0e0e0] max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
      >
        Explore my portfolio of innovative solutions and creative implementations
      </motion.p>
    </motion.div>
  )
}

export default SectionHeader