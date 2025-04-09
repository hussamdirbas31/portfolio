'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profileImage from '@/public/image.jpg';
import { imageVariants } from './types';

const ProfileImage = () => {
  // حركة دائمة للصورة
  const floatingAnimation = {
    y: [0, -15, 0],
    rotate: [0, 3, -3, 0],
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
      className="lg:w-1/2 relative flex justify-center"
      initial="hidden"
      animate={["visible", "floating"]}
      whileHover="hover"
      variants={{
        ...imageVariants,
        floating: floatingAnimation
      }}
    >
      <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
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
          whileInView={floatingAnimation}
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

        {/* حلقة متوهجة */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            boxShadow: ['0 0 0px rgba(0,180,180,0)', '0 0 30px rgba(0,180,180,0.6)', '0 0 0px rgba(0,180,180,0)']
          }}
          transition={{
            delay: 1.2,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
      </div>
    </motion.div>
  );
};

export default ProfileImage;