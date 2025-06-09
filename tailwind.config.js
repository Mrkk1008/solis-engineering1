/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0A1F33',
          50: '#F0F7FA',
          100: '#E1EFF5',
          200: '#C3DFE9',
          300: '#A5CFDD',
          400: '#87BFD1',
          500: '#69AFC5',
          600: '#4B9FB9',
          700: '#2D8FAD',
          800: '#0F7FA1',
          900: '#0A1F33',
          950: '#061624',
        },
        solar: {
          DEFAULT: '#00B6D3',
          light: '#E6F6FA',
          dark: '#0A1F33',
        },
        accent: {
          orange: '#FF8A00',
          yellow: '#FFD700',
          green: '#8DC63F',
          cyan: '#00B6D3',
        },
        dark: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, #1F2937 1px, transparent 1px), linear-gradient(to bottom, #1F2937 1px, transparent 1px)',
        'hex-pattern': "url('/patterns/hex.svg')",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'slide-up': 'slideUp 1s ease-out',
        'rotate-slow': 'rotate 15s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow': '0 0 15px rgba(16, 185, 129, 0.35)',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
        '3000': '3000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      translate: {
        '3d': {
          '50': '50px',
          '100': '100px',
        },
      },
      rotate: {
        '3d': {
          '15': '15deg',
          '30': '30deg',
          '45': '45deg',
        },
      },
    },
  },
  plugins: [],
};

export default config; 