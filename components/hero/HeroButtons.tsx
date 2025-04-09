'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ButtonProps, textVariants } from './types'; // تم إضافة استيراد textVariants من ملف types
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTONS } from '@/lib/constants';

const Button = ({ href, text, className }: ButtonProps) => (
  <motion.div
    whileHover="hover"
    variants={{
      hover: { 
        y: -3,
        scale: 1.03,
        transition: { type: 'spring', stiffness: 300 }
      }
    }}
  >
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-5 py-2 sm:px-6 md:px-7 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
        className === 'primary-button' 
          ? `bg-gradient-to-r from-[${PRIMARY_COLOR}] to-[${SECONDARY_COLOR}] text-white shadow-lg hover:shadow-[${PRIMARY_COLOR}]/30`
          : 'bg-transparent hover:bg-[#1a1a1a] text-white border border-[#333] hover:border-[#00b4b4]'
      }`}
      aria-label={text}
    >
      <span className="relative z-10">{text}</span>
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00b4b4_0%,transparent_80%)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        initial={{ scale: 0.5 }}
        animate={{ scale: 2 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </Link>
  </motion.div>
);

const HeroButtons = () => (
  <motion.div 
    className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4"
    variants={textVariants}
    custom={2}
  >
    {BUTTONS.map((button, index) => (
      <Button key={index} {...button} />
    ))}
  </motion.div>
);

export default HeroButtons;