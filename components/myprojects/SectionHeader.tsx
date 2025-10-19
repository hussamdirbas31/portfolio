'use client'
import { motion } from 'framer-motion'

const SectionHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-12 md:mb-20"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
        <span className="relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d8d8] via-[#00b4b4] to-[#008c8c]">
            Projects
          </span>
          <motion.span 
            className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-[#00d8d8] via-[#00b4b4] to-[#008c8c] rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          />
        </span>
      </h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-[#e0e0e0] max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed px-4"
      >
        Explore my portfolio of innovative solutions and creative implementations
      </motion.p>
    </motion.div>
  )
}

export default SectionHeader