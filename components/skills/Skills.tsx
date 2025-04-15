'use client'
import { motion } from 'framer-motion'
import { skillsData } from '@/utils/data/skills'
import { skillsImage } from '@/utils/data/ImagesSkills'
import Image from 'next/image'

const Skills = () => {
  return (
    <section id='skills' className='relative w-full py-16 bg-black '>
      <div className="container mx-auto px-4">
        
        {/* العنوان */}
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-4">
            My <span className="relative">
              <span className="text-[#00b4b4]">Skills</span>
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-1 bg-[#008c8c]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          <p className="text-[#aaa] text-center max-w-md">
            Technologies I work with regularly
          </p>
        </motion.div>

        {/* شبكة المهارات بنفس تصميم About */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill}
              className="rounded-xl border border-[#2c2c2c] bg-gradient-to-br from-[#101010] to-[#0d0d0d] p-3 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                borderColor: "#00b4b4",
                boxShadow: "0 0 15px rgba(0, 180, 180, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-14 h-14 mb-3">
                  <Image
                    src={skillsImage(skill)?.src}
                    alt={skill}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain group-hover:drop-shadow-[0_0_8px_rgba(0,180,180,0.4)]"
                    draggable="false"
                  />
                </div>
                
                <p className="text-white text-sm font-medium text-center group-hover:text-[#00b4b4] transition-colors">
                  {skill}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* فاصل زخرفي متطابق مع About */}
        <motion.div
          className="mt-16 mx-auto w-24 h-1 bg-gradient-to-r from-[#00b4b4] to-[#008c8c] rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  )
}

export default Skills