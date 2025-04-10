'use client';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Particles from './Particles';
import HeroText from './HeroText';
import ProfileImage from './ProfileImage';
import { SPRING_CONFIG } from '@/utils/constants';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), SPRING_CONFIG);
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.92]), SPRING_CONFIG);

  return (
    <section 
      ref={ref}
      className="w-full min-h-screen flex items-center justify-center  relative"
    >
      <Particles />
      
      <motion.div 
        className="container mx-auto px-4 sm:px-2 lg:px-8 relative z-10"
        
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden md:gap-12">
          <HeroText />
          <ProfileImage />
        </div>
      </motion.div>

     
    </section>
  );
};

export default HeroSection;