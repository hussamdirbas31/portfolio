'use client'
import { motion } from 'framer-motion'
import { skillsData } from '@/utils/data/skills'
import { skillsImage } from '@/utils/data/ImagesSkills'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type SkillType = string

const Skills = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  // تقسيم المهارات إلى 3 أقسام لعرضها في 3 صفوف
  const skillsChunks = [
    skillsData.slice(0, 3), // الصف الأول: 3 مهارات
    skillsData.slice(3, 7), // الصف الثاني: 4 مهارات
    skillsData.slice(7)     // الصف الثالث: المهارات المتبقية
  ]

  // Detect touch devices
  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window ||
      (navigator.maxTouchPoints > 0) ||
      (window.matchMedia("(pointer: coarse)").matches)
    )
  }, [])

  return (
    <section id='skills' className='relative w-full py-16 md:py-24 bg-black border-b border-[#333]'>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My <span className="text-[#00b4b4]">Skills</span>
          </motion.h2>
          
          <motion.div
            className="w-20 h-1 bg-[#00b4b4] rounded-full"
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {skillsChunks.map((chunk, chunkIndex) => (
            <motion.div
              key={chunkIndex}
              className="flex flex-wrap justify-center gap-6 md:gap-8 w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.3 + chunkIndex * 0.2,
                ease: "backOut"
              }}
            >
              {chunk.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  className="w-[120px] sm:w-[140px] md:w-[160px] select-none"
                  whileHover={!isTouchDevice ? { 
                    y: -8,
                    transition: { duration: 0.2 }
                  } : undefined}
                  tabIndex={-1}
                >
                  <div className="h-full w-full rounded-xl border border-[#333] bg-black p-4 hover:border-[#00b4b4] transition-all duration-300 group">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={skillsImage(skill)?.src}
                          alt={skill}
                          width={80}
                          height={80}
                          className="h-full w-auto object-contain pointer-events-none"
                          draggable="false"
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
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

        {/* Grid Pattern Background */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]" />
        </div>
      </div>
    </section>
  )
}

export default Skills