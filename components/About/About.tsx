'use client'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id='about' className='relative w-full py-16 md:py-24 bg-black border-b border-[#333]'>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center mb-12"
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
            About <span className="text-[#00b4b4]">Me</span>
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

        {/* Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-[#aaa] text-lg md:text-xl leading-relaxed text-center md:text-left">
            I am an IT Engineering student with a strong interest in web development and design. 
            I thrive on learning new technologies and applying them to create innovative solutions. 
            My goal is to build user-friendly websites that not only meet client needs but also 
            provide exceptional user experiences. I enjoy tackling challenges and solving problems 
            through coding and creative thinking. With a solid foundation in Frontend, I am 
            continuously expanding my skill set. I am eager to collaborate with others and 
            contribute to exciting projects in the tech industry. Let's create something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About