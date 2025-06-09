'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Section3DProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
}

export function Section3D({ children, className = '', reverse = false }: Section3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, reverse ? -10 : 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        rotateX: rotate,
        scale,
        opacity,
      }}
      className={`relative perspective-1000 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-primary/10 rounded-3xl opacity-50" />
      <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
} 