'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Particles from './Particles';
import HeroText from './HeroText';
import ProfileImage from './ProfileImage';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
 
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