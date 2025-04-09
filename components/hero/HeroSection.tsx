'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import profileImage from '@/public/image.png'

const HeroSection = () => {
  const buttons = [
    {
      href: "https://www.linkedin.com/in/hussam-dirbas-83a77b31b/",
      text: "Hire Me",
      className: "px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-lg bg-[#00b4b4] hover:bg-[#00a0a0] text-white font-medium transition-all duration-300 border border-[#00b4b4] hover:border-[#00a0a0] shadow-lg shadow-[#00b4b4]/20 text-sm sm:text-base",
      ariaLabel: "Hire Me on LinkedIn"
    },
    {
      href: "https://drive.google.com/file/d/1zoxhMgtbmwZyzDczrzda_pJXU4SRAuKz/view?usp=sharing",
      text: "Download CV",
      className: "px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-lg bg-transparent hover:bg-[#1a1a1a] text-white font-medium transition-all duration-300 border border-[#333] hover:border-[#00b4b4] text-sm sm:text-base",
      ariaLabel: "Download CV"
    }
  ]

  return (
    <section className="w-full min-h-[102vh] sm:min-h-[auto] py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 bg-black border-b border-[#333] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello, I'm <span className="text-[#00b4b4]">Hussam Dirbas</span>
            </motion.h1>
            
            <motion.h2
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#aaa] mb-4 sm:mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Frontend Developer
            </motion.h2>

            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
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

          {/* White Rotating Border */}
          <div className="lg:w-1/2 flex justify-center mb-6 sm:mb-8 lg:mb-0 order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              
              {/* Rotating White Border */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-white shadow-[0_0_20px_4px_rgba(255,255,255,0.3)]"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear"
                }}
              />

              {/* Inner Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl bg-black z-10">
                <Image
                  src={profileImage}
                  alt="Hussam Dirbas - Frontend Developer"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
