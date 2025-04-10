'use client'
import { motion } from 'framer-motion'
import { skillsData } from '@/utils/data/skills'
import { skillsImage } from '@/utils/data/ImagesSkills'
import Image from 'next/image'

const Skills = () => {
  return (
    <section id='skills' className='relative w-full py-14 sm:py-20 lg:py-28 bg-black border-b border-[#222] overflow-hidden'>

      {/* خلفية متحركة ناعمة */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background: 'radial-gradient(circle at center, #00b4b4 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.04, 0.07, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative">
        {/* العنوان */}
        <motion.div
          className="flex flex-col items-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-4 tracking-tight">
            My <span className="bg-gradient-to-r from-[#00b4b4] to-[#008c8c] bg-clip-text text-transparent">Skills</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00b4b4] to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* المهارات */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 md:gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill}
              className="p-1 select-none"
              whileHover={{
                y: -4,
                scale: 1.04,
                transition: { type: 'spring', stiffness: 260, damping: 12 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="h-full w-full rounded-xl border border-[#2c2c2c] bg-gradient-to-br from-[#101010] to-[#0d0d0d] p-3 hover:border-[#00b4b4] transition-all duration-300 group hover:shadow-[0_0_14px_rgba(0,180,180,0.15)]">
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={60}
                      height={60}
                      className="h-full w-auto object-contain pointer-events-none transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,180,180,0.3)]"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                  <p className="text-white text-center text-sm sm:text-base font-medium group-hover:text-[#00b4b4] transition-colors duration-300 leading-tight">
                    {skill}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
