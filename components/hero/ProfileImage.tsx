'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profileImage from '@/public/image.jpg';
import { imageVariants } from './types';

const ProfileImage = () => {
  // أنيميشن الطفو مع تحسينات
  const floatingAnimation = {
    y: [0, -10, -5, 0], // حركة أكثر سلاسة
    rotate: [0, 1.5, -1.5, 0], // دوران أكثر دقة
    scale: [1, 1.02, 1], // تأثير تنفس خفيف
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.3, 0.7, 1] // تحسين توقيت الحركة
    }
  };

  // تأثير التوهج المحسن
  const glowAnimation = {
    opacity: [0, 0.3, 0],
    scale: [1, 1.15, 1],
    background: [
      'radial-gradient(circle at center,#00b4b4_0%,transparent_60%)',
      'radial-gradient(circle at center,#00e6e6_0%,transparent_70%)',
      'radial-gradient(circle at center,#00b4b4_0%,transparent_60%)'
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
      times: [0, 0.5, 1]
    }
  };

  // تأثير عند hover
  const hoverEffects = {
    scale: 1.05,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  return (
    <motion.div 
      className="w-full lg:w-1/2 relative flex justify-center mt-8 lg:mt-0"
      initial="hidden"
      animate={["visible", "floating"]}
      whileHover={hoverEffects}
      variants={{
        ...imageVariants,
        floating: floatingAnimation
      }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
        {/* تأثير التوهج المحسن */}
        <motion.div
          className="absolute inset-0 rounded-full blur-xl"
          initial={{ opacity: 0 }}
          animate={glowAnimation}
        />

        {/* تأثير جزيئات ضوئية */}
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              initial={{
                x: Math.random() * 100 - 50 + '%',
                y: Math.random() * 100 - 50 + '%',
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                opacity: 0
              }}
              animate={{
                y: [null, Math.random() * 40 - 20 + '%'],
                opacity: [0, 0.6, 0],
                scale: [1, 1.5]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* الصورة الشخصية مع تأثيرات محسنة */}
        <motion.div
          className="absolute inset-2 sm:inset-3 rounded-full overflow-hidden border-4 border-[#00b4b4]/30"
          style={{ 
            transform: 'translateZ(0)',
            boxShadow: '0 0 20px rgba(0, 180, 180, 0.3)'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            boxShadow: [
              '0 0 20px rgba(0, 180, 180, 0.3)',
              '0 0 30px rgba(0, 220, 220, 0.4)',
              '0 0 20px rgba(0, 180, 180, 0.3)'
            ]
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.8, type: 'spring' },
            boxShadow: {
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
          whileHover={{
            borderColor: '#00e6e6/50',
            boxShadow: '0 0 40px rgba(0, 220, 220, 0.6)'
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