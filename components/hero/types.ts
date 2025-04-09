import { Variants } from 'framer-motion';

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export interface ButtonProps {
  href: string;
  text: string;
  className: string;
}

export const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export const imageVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.9,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },
  hover: {
    y: -8,
    rotate: 1.5,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 15
    }
  }
};