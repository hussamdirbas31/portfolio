'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import profileImage from '@/public/image.jpeg'

const HeroSection = () => {
  const buttons = [
    {
      href: "https://www.linkedin.com/in/hussam-dirbas-83a77b31b/",
      text: "Hire Me",
      className: "px-8 py-3 rounded-lg bg-[#00b4b4] hover:bg-[#00a0a0] text-white font-medium transition-all duration-300 border border-[#00b4b4] hover:border-[#00a0a0] shadow-lg shadow-[#00b4b4]/20",
      ariaLabel: "Hire Me on LinkedIn"
    },
    {
      href: "https://drive.google.com/file/d/17-zb3FFvUxxtSBQLj0tBbihyPJsAk0In/view?usp=sharing",
      text: "Download CV",
      className: "px-8 py-3 rounded-lg bg-transparent hover:bg-[#1a1a1a] text-white font-medium transition-all duration-300 border border-[#333] hover:border-[#00b4b4]",
      ariaLabel: "Download CV"
    }
  ]

  return (
    <section className="w-full py-16 md:py-40 bg-black border-b border-[#333]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello, I'm <span className="text-[#00b4b4]">Hussam Dirbas</span>
            </motion.h1>
            
            <motion.h2
              className="text-xl md:text-2xl text-[#aaa] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Frontend Developer
            </motion.h2>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={button.className}
                  aria-label={button.ariaLabel}
                >
                  {button.text}
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-[#00b4b4] p-1 overflow-hidden shadow-xl shadow-[#00b4b4]/30">
              <Image
                src={profileImage}
                alt="Hussam Dirbas - Frontend Developer"
                fill
                className="object-cover rounded-full"
                priority
              />
              <div className="absolute inset-0 rounded-full border border-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection