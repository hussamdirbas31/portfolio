'use client'
import { motion, useTransform, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  // إنشاء فقاعات عشوائية
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
    <section 
      id='contact' 
      ref={ref}
      className='relative w-full min-h-screen flex items-center justify-center bg-black border-b border-[#333] overflow-hidden'
    >
      {/* تأثير الفقاعات */}
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
              opacity: 0.3
            }}
            animate={{
              y: [0, -1000],
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* العنوان الرئيسي */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center mb-6 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#00b4b4]">Get In</span> Touch
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00b4b4] to-[#008c8c] rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4
            }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* محتوى الاتصال */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-[#ddd] text-xl text-center max-w-2xl mb-12 leading-relaxed"
          >
            Ready to start your project? Let's talk about how I can help you bring your ideas to life.
          </motion.p>

          {/* زر البريد الإلكتروني */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
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