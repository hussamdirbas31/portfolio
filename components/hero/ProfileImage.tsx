'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profileImage from '@/public/image.jpg';
import { imageVariants } from './types';

const ProfileImage = () => {
  const floatingAnimation = {
    y: [0, -15, 0],
    rotate: [0, 2, -2, 0], // قللنا زاوية الدوران
    transition: {
      y: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      },
      rotate: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="lg:w-1/2 relative flex justify-center overflow-hidden"
      initial="hidden"
      animate={["visible", "floating"]}
      whileHover="hover"
      variants={{
        ...imageVariants,
        floating: floatingAnimation
      }}
    >
      <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto overflow-hidden">
        {/* تأثير التوهج */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,#00b4b4_0%,transparent_60%)] blur-lg"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            delay: 0.8,
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* الصورة الشخصية */}
        <motion.div
          className="absolute inset-3 rounded-full overflow-hidden border-4 border-[#00b4b4]/20"
          style={{ 
            overflow: 'hidden',
            transform: 'translateZ(0)' // تحسين الأداء
          }}
        >
          <Image
            src={profileImage}
            alt="Portrait of Hussam Dirbas"
            fill
            className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;