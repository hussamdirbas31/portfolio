'use client'
import { motion } from 'framer-motion';
import { skillsData } from '@/utils/data/skills';
import { skillsImage } from '@/utils/data/ImagesSkills';
import Image from 'next/image';
import './skill.css';

const Skills = () => {
  return (
    <div className='relative my-12 md:my-[2%] overflow-hidden border-b-[1px] border-b-gray-600 border-x-transparent border-t-transparent'>
      <div className="flex justify-center relative md:right-9 lg:right-9 xl:right-9 lg:py-10">
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
            Skills
          </motion.span>
          <motion.span className="hidden sm:block w-24 h-[2px] bg-[#2c2a36]" />
        </motion.div>
      </div>

      <motion.div
        className='skill-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div
          className='scroll-wrapper'
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        >
          {skillsData.map((skill, id) => (
            <div className="skill-item" key={id}>
              <div className="h-full w-full rounded-lg border border-[#00b4b4] shadow-none shadow-gray-50 group-hover:border-[#00b4b4] transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#00b4b4] to-slate-700" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10 lg:h-12 xl:h-14">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={60}
                      height={60}
                      className="h-full  rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg lg:text-xl xl:text-2xl">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {skillsData.map((skill, id) => (
            <div className="skill-item" key={id + skillsData.length}>
              <div className="h-full w-full rounded-lg border border-[#00b4b4] shadow-none shadow-gray-50 group-hover:border-[#00b4b4] transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#00b4b4] to-slate-700" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10 lg:h-12 xl:h-14">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={50}
                      height={50}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg lg:text-xl xl:text-2xl">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
