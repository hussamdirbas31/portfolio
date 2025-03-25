'use client'
import { motion } from 'framer-motion'
import { RiMenu3Line } from 'react-icons/ri'

const ToggleButton = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <motion.button
      onClick={toggleSidebar}
      className="relative group"
      aria-label="Toggle menu"
      whileTap={{ scale: 0.9 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-[#00b4b4] "
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Design Element 2 - Main Button */}
      <motion.div
        className="px-6 py-3  bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#333] shadow-lg flex items-center gap-2"
        whileHover={{
          boxShadow: '0 0 20px rgba(0, 180, 180, 0.3)',
          borderColor: '#00b4b4'
        }}
      >
        {/* Animated Bars */}
        <div className="flex flex-col gap-1">
          {[1, 2, 3].map((bar) => (
            <motion.div
              key={bar}
              className="h-1 w-6 bg-[#00b4b4]"
              animate={{
                width: ['100%', '70%', '100%'],
                opacity: [1, 0.6, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: bar * 0.2
              }}
            />
          ))}
        </div>

        {/* Button Text */}
        <motion.span 
          className="text-sm font-medium text-[#00b4b4]"
          animate={{
            x: [0, 3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        >
          Open Menu
        </motion.span>
      </motion.div>

      {/* Design Element 3 - Hover Effect */}
      <motion.div
        className="absolute inset-0  bg-[#00b4b4] opacity-0 group-hover:opacity-10 -z-10"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}

export default ToggleButton