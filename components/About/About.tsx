'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  
  // تحسينات الحركة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section 
      id='about' 
      ref={sectionRef}
      className='relative w-full py-16 md:py-24 bg-black border-b border-[#333]'
    >
      <div className="container mx-auto px-4">
        {/* Header Section - تم تعديل الخطوط */}
        <motion.div
          className="flex flex-col items-center mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-white font-sans"
            variants={itemVariants}
          >
            About <motion.span 
              className="text-[#00b4b4] font-mono"
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 12px rgba(0, 180, 180, 0.7)'
              }}
              animate={{
                textShadow: ['0 0 8px rgba(0, 180, 180, 0.3)', '0 0 12px rgba(0, 180, 180, 0.7)', '0 0 8px rgba(0, 180, 180, 0.3)'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Me
            </motion.span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-[#00b4b4] rounded-full"
            variants={{
              hidden: { scaleX: 0, originX: 0.5 },
              visible: {
                scaleX: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }
              }
            }}
          />
        </motion.div>

        {/* Content - تم تعديل الخط */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.p 
            className="text-[#ddd] text-lg md:text-xl leading-relaxed text-center md:text-left font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            I am an IT Engineering student with a strong interest in web development and design. 
            I thrive on learning new technologies and applying them to create innovative solutions. 
            My goal is to build user-friendly websites that not only meet client needs but also 
            provide exceptional user experiences. I enjoy tackling challenges and solving problems 
            through coding and creative thinking. With a solid foundation in Frontend, I am 
            continuously expanding my skill set. I am eager to collaborate with others and 
            contribute to exciting projects in the tech industry. Let's create something amazing together!
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default About