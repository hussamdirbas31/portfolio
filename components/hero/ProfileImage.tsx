'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profileImage from '@/public/image.jpg';
import { imageVariants } from './types';

const ProfileImage = () => {
  const floatingAnimation = {
    y: [0, -15, 0],
    rotate: [0, 2, -2, 0],
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
      className="w-full lg:w-1/2 relative flex justify-center mt-8 lg:mt-0"
      initial="hidden"
      animate={["visible", "floating"]}
      whileHover="hover"
      variants={{
        ...imageVariants,
        floating: floatingAnimation
      }}
    >
      <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
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
          className="absolute inset-2 sm:inset-3 rounded-full overflow-hidden border-4 border-[#00b4b4]/20"
          style={{ 
            transform: 'translateZ(0)' 
          }}
        >
          <Image
            src={profileImage}
            alt="Portrait of Hussam Dirbas"
            fill
            className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;