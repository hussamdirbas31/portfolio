'use client'
import { motion, useTransform, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import BubblesBackground from './BubblesBackground'
import { fadeInUp, fadeIn, scaleXIn, hoverScale } from '@/utils/animations/contact'

const Contact = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section 
      id='contact' 
      ref={ref}
      className='relative w-full min-h-screen flex items-center justify-center bg-black border-b border-[#333] overflow-hidden'
    >
      <BubblesBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* العنوان */}
        <motion.div
          className="flex flex-col items-center mb-16"
          {...fadeInUp}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 text-white"
            {...fadeIn(0.2)}
          >
            <span className="text-[#00b4b4]">Get In</span> Touch
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00b4b4] to-[#008c8c] rounded-full"
            {...scaleXIn}
          />
        </motion.div>

        {/* محتوى الاتصال */}
        <motion.div
          className="flex flex-col items-center"
          {...fadeIn(0.6)}
        >
          <motion.p 
            className="text-[#ddd] text-xl text-center max-w-2xl mb-12 leading-relaxed"
          >
            Ready to start your project? Let's talk about how I can help you bring your ideas to life.
          </motion.p>

          <motion.div {...hoverScale}>
            <Link
              href="mailto:hussamdirbas11@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#00b4b4] to-[#008b8b] text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(0,180,180,0.4)] transition-all"
              aria-label="Send email"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
