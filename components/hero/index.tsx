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
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* تأثير خلفية متدرجة */}
      <div className="absolute inset-0" />
      
      <Particles />
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 py-12 lg:py-0">
          <HeroText />
          <ProfileImage />
        </div>
      </motion.div>

      {/* مؤشر التمرير للأسفل */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="w-6 h-10 border-2 border-[#00b4b4] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-[#00b4b4] rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;