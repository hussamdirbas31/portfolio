'use client'
import { motion } from 'framer-motion'
import { skillsData } from '@/utils/data/skills'
import { skillsImage } from '@/utils/data/ImagesSkills'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Skills = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  
  // تقسيم المهارات لتحسين العرض
  const skillsChunks = [
    skillsData.slice(0, 4), // الصف الأول
    skillsData.slice(4, 8), // الصف الثاني
    skillsData.slice(8)     // الصف الثالث
  ]

  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches
    )
  }, [])

  return (
    <section id='skills' className='relative w-full py-20 md:py-28 bg-black border-b border-[#333]'>
      {/* تأثيرات الخلفية */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #00b4b4 0%, transparent 70%)'
        }}
        animate={{
          opacity: [0.02, 0.05, 0.02],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* العنوان الرئيسي */}
        <motion.div
          className="flex flex-col items-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#00b4b4] to-[#008c8c]">
              Skills
            </span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00b4b4] to-transparent rounded-full"
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

        {/* شبكة المهارات */}
        <div className="flex flex-col items-center gap-10 md:gap-14">
          {skillsChunks.map((chunk, chunkIndex) => (
            <motion.div
              key={chunkIndex}
              className="flex flex-wrap justify-center gap-8 md:gap-10 w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.3 + chunkIndex * 0.15,
                ease: "backOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {chunk.map((skill) => (
                <motion.div
                  key={skill}
                  className="w-[130px] sm:w-[150px] md:w-[170px] select-none"
                  whileHover={!isTouchDevice ? { 
                    y: -10,
                    scale: 1.05,
                    transition: { type: 'spring', stiffness: 300 }
                  } : undefined}
                  whileTap={{ scale: 0.95 }}
                  tabIndex={-1}
                >
                  <div className="h-full w-full rounded-xl border border-[#333] bg-gradient-to-b from-[#111] to-[#0a0a0a] p-4 hover:border-[#00b4b4] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,180,180,0.2)]">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <motion.div 
                        className="h-18 w-18 md:h-20 md:w-20 flex items-center justify-center"
                        whileHover={{ rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                      >
                        <Image
                          src={skillsImage(skill)?.src}
                          alt={skill}
                          width={80}
                          height={80}
                          className="h-full w-auto object-contain pointer-events-none group-hover:drop-shadow-[0_0_8px_rgba(0,180,180,0.6)] transition-all duration-300"
                          draggable="false"
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </motion.div>
                      <p className="text-white text-center font-medium text-sm md:text-base group-hover:text-[#00b4b4] transition-colors duration-300">
                        {skill}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* نمط الشبكة الخلفية */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]" />
        </div>
      </div>
    </section>
  )
}

export default Skills