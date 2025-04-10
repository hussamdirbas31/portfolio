'use client';
import { motion } from 'framer-motion';
import { Particle } from './types';

const Particles = () => {
  const particles: Particle[] = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30 + 1,
    duration: Math.random() * 4 + 2
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-[#00b4b4] rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            willChange: 'transform' // تحسين الأداء
          }}
          animate={{
            y: [0, -80],
            opacity: [0.6, 0],
            scale: [1, 0.3]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};

export default Particles;