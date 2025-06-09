'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const variants = {
    primary: 'bg-gradient-to-r from-accent-purple via-accent-blue to-accent-teal text-white shadow-lg shadow-accent-blue/25 hover:shadow-accent-blue/40 hover:scale-105',
    secondary: 'bg-dark-200 text-white hover:bg-dark-100 border border-white/10 hover:border-white/20 hover:scale-105',
    outline: 'bg-transparent border border-accent-blue text-accent-blue hover:bg-accent-blue/10 hover:scale-105',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {/* Gradient Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-purple/0 via-accent-blue/30 to-accent-teal/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      
      {/* Button Content */}
      <div className="relative flex items-center gap-2">
        {children}
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
    </motion.button>
  );
} 