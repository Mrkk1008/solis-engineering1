'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="container px-4 mb-12">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Background Glow */}
        <motion.div
          className="absolute -inset-40 bg-gradient-to-r from-accent-purple/20 via-accent-blue/20 to-accent-teal/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          {/* Gradient Text */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-purple via-accent-blue to-accent-teal">
            {title}
          </span>

          {/* Text Glow */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-accent-purple/50 via-accent-blue/50 to-accent-teal/50 blur-xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {title}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute left-1/2 -bottom-8 w-32 h-1 -translate-x-1/2 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-teal rounded-full"
        />
      </div>
    </div>
  );
} 