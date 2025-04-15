'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import {
  containerVariants,
  itemVariants,
  lineVariant,
  contentMotion
} from '@/utils/animations/about';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportSettings = { once: true, margin: '-50px' };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 lg:py-28 xl:py-32 bg-black overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,#00b4b4_1px,transparent_1px),linear-gradient(to_bottom,#00b4b4_1px,transparent_1px)]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center mb-14 md:mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          viewport={viewportSettings}
        >
          <motion.h2
            id="about-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 text-white tracking-tight"
            variants={itemVariants}
          >
            About{' '}
            <motion.span
              className="text-[#00b4b4] font-mono"
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 12px rgba(0, 180, 180, 0.7)'
              }}
              animate={{
                textShadow: [
                  '0 0 8px rgba(0, 180, 180, 0.3)',
                  '0 0 12px rgba(0, 180, 180, 0.7)',
                  '0 0 8px rgba(0, 180, 180, 0.3)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
              style={{ willChange: 'transform, text-shadow' }}
            >
              Me
            </motion.span>
          </motion.h2>

          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-[#00b4b4] to-[#008080] rounded-full"
            variants={lineVariant}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-br from-black to-[#111] p-6 md:p-10 rounded-xl border border-[#333] shadow-lg shadow-[#00b4b4]/10 relative"
          {...contentMotion}
          viewport={viewportSettings}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.p
            className="text-[#ddd] text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            I am an IT Engineering student with a strong interest in web development and design.
            I thrive on learning new technologies and applying them to create innovative solutions.
            My goal is to build user-friendly websites that not only meet client needs but also
            provide exceptional user experiences...
          </motion.p>

          {/* Decorative dots */}
          <div 
            className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-[#00b4b4] opacity-70"
            aria-hidden="true"
          />
          <div 
            className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-[#00b4b4] opacity-70"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;