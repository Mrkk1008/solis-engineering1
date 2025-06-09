'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  height?: string;
}

export function Card3D({ children, className = '', glowColor = 'from-solar-500', height = 'h-full' }: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className={`relative ${height} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered
          ? `perspective(1000px) rotateY(${(mousePosition.x - 150) / 20}deg) rotateX(${-(mousePosition.y - 150) / 20}deg)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-tr ${glowColor} to-transparent rounded-2xl blur-xl`}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 0.15 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card Content */}
      <motion.div
        className="relative h-full rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-solar-500/10 p-6 overflow-hidden"
        animate={{
          scale: isHovered ? 1.02 : 1,
          borderColor: isHovered ? 'rgba(245, 158, 11, 0.3)' : 'rgba(245, 158, 11, 0.1)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-full"
              style={{
                top: `${30 + i * 30}%`,
                background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#F59E0B' : '#FFE744'}, transparent)`,
                opacity: 0.1,
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

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
} 