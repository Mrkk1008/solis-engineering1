'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Modern Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              rgba(59, 130, 246, 0.15) 40%,
              transparent 80%
            )
          `,
        }}
      />

      {/* Border Gradient */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-accent-purple/20 via-accent-blue/20 to-accent-teal/20 group-hover:from-accent-purple/30 group-hover:via-accent-blue/30 group-hover:to-accent-teal/30 transition-all duration-500" />

      {/* Main Content */}
      <motion.div
        initial={false}
        className="relative bg-dark-300/40 backdrop-blur-xl p-8 rounded-2xl border border-white/[0.08] group-hover:border-white/[0.12] transition-colors duration-500 z-10 overflow-hidden"
      >
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.015] mix-blend-soft-light" />
        
        {/* Accent Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent"
              animate={{
                y: [20, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.7,
              }}
              style={{
                left: '0',
                right: '0',
                top: `${30 + i * 30}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </motion.div>
    </motion.div>
  );
} 