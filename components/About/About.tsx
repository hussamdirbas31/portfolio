'use client'
import { motion } from 'framer-motion';
import React from 'react'
 
 const About = () => {
   return (
     <div id='about' className='  relative py-10 overflow-hidden md:h-[25rem] border-b-[1px] border-b-gray-600 border-x-transparent border-t-transparent'>
          <div className="flex justify-center md:relative sm:right-0 md:right-0 py-5 lg:right-9 xl:right-9 lg:py-10">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span className="hidden sm:block w-24 h-[2px] bg-[#2c2a36]" />
          <motion.span
            className="bg-[#00b4b4] w-fit text-white p-2 px-5 text-lg sm:text-xl rounded-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            About
          </motion.span>
          <motion.span className="hidden sm:block w-24 h-[2px] bg-[#2c2a36]" />
        </motion.div>


        
      </div>
      <motion.p
      initial={{opacity:0,y:-1}}
      animate={{opacity:1,y:0}}
      transition={{ duration: 1, delay: 0.6}}
         
      className="text-[#575353] text-sm sm:text-base lg:text-lg mb-6 mt-6 px-4 p md:px-20">
          I am an IT Engineering student with a strong interest in web development and design. I thrive on learning new technologies and applying them to create innovative solutions. My goal is to build user-friendly websites that not only meet client needs but also provide exceptional user experiences. I enjoy tackling challenges and solving problems through coding and creative thinking. With a solid foundation in Frontend, I am continuously expanding my skill set. I am eager to collaborate with others and contribute to exciting projects in the tech industry. Let’s create something amazing together!</motion.p>

     </div>
   )
 }
 
 export default About
 