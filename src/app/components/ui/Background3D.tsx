'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function Background3D() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dynamic Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"
      >
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-primary-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-0 -left-40 w-80 h-80 bg-primary-500/30 rounded-full blur-[100px]"
          animate={{
            x: [0, 40, 0],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 -right-40 w-80 h-80 bg-accent-500/30 rounded-full blur-[100px]"
          animate={{
            x: [0, -40, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
              style={{
                top: `${30 + i * 30}%`,
                left: '-100%',
                right: '-100%',
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
} 