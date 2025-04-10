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
  
  const y = useTransform(scrollYProgress, [0, 6], [0, -100])
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.2, 1, 0.2])

  return (
    <section 
      id='contact' 
      ref={ref}
      className='relative w-full min-h-screen flex items-center justify-center bg-black border-b border-[#333] overflow-hidden'
    >
      {/* تأثير الجسيمات المتحركة */}
      <motion.div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ opacity }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#00b4b4]"
            style={{
              width: Math.random() * 5 + 2 + 'px',
              height: Math.random() * 5 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
            animate={{
              y: [0, -100],
              opacity: [0.6, 0],
              scale: [1, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>

      {/* تأثير التوهج الخلفي */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #00b4b4 0%, transparent 70%)',
          y
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* العنوان الرئيسي */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#00b4b4] to-[#008c8c]">
              Connect
            </span>
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00b4b4] to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
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
            className="text-[#ddd] text-xl md:text-2xl text-center max-w-3xl mb-12 leading-relaxed"
          >
            Have an exciting project or want to collaborate? 
            <br className="hidden sm:block" /> 
            I'd love to hear from you!
          </motion.p>

          {/* زر البريد الإلكتروني - بدون تأثيرات hover */}
          <Link
            href="mailto:hussamdirbas11@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-[#00b4b4] to-[#008b8b] text-white text-lg md:text-xl font-medium rounded-lg"
            aria-label="Send email to Hussam Dirbas"
          >
            hussamdirbas11@gmail.com
          </Link>
        </motion.div>
      </div>

      {/* نمط الشبكة الخلفية */}
      <motion.div
        className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] opacity-[0.08]"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </section>
  )
}

export default Contact