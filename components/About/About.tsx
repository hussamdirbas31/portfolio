'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  
  // Motion enhancements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
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
      className='relative w-full py-20 md:py-28 bg-black  overflow-hidden'
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,#00b4b4_1px,transparent_1px),linear-gradient(to_bottom,#00b4b4_1px,transparent_1px)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 text-white font-sans tracking-tight"
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
            className="w-24 h-1.5 bg-gradient-to-r from-[#00b4b4] to-[#008080] rounded-full"
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

        {/* Content */}
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-br from-black to-[#111] p-8 md:p-10 rounded-xl border border-[#333] shadow-lg shadow-[#00b4b4]/10"
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
            className="text-[#ddd] text-lg md:text-xl leading-relaxed md:leading-loose text-center md:text-left font-sans"
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
          
          {/* Decorative elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-[#00b4b4] opacity-70"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-[#00b4b4] opacity-70"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default About