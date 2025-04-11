'use client';
import { motion } from 'framer-motion';
import { textVariants } from './types';
import HeroButtons from './HeroButtons';

const HeroText = () => (
  <motion.div 
    className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-0"
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0,
          delayChildren: 0.2
        }
      }
    }}
  >
    <motion.div className="overflow-hidden mb-4 md:mb-6">
      <motion.h1 
        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight"
        variants={textVariants}
        custom={0}
      >
        <motion.span className="inline-block">
          Hello, I'm{' '}
          <motion.span 
            className="text-gradient inline-block"
            animate={{
              scale: [1, 1.03, 1],
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              delay: 0.8,
              duration: 6,
              repeat: Infinity
            }}
          >
            Hussam Dirbas
          </motion.span>
        </motion.span>
      </motion.h1>
    </motion.div>

    <motion.h2
      className="text-base sm:text-lg md:text-xl text-[#aaa] mb-6 md:mb-8"
      variants={textVariants}
      custom={1}
      animate={{
        y: [0, -3, 0],
        opacity: [0.9, 1, 0.9]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      Frontend Developer
    </motion.h2>

    <HeroButtons />
  </motion.div>
);

export default HeroText;