'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg shadow-primary-500/5' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 h-20">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-solar-500 to-neon-yellow rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-solar-500 to-neon-yellow transform group-hover:scale-105 transition-transform" />
              </div>
              <div>
                <span className="text-2xl font-display font-bold bg-gradient-to-r from-solar-300 to-neon-yellow bg-clip-text text-transparent">
                  Solis Engineering
                </span>
                <p className="text-sm text-dark-400 mt-1">Powering Tomorrow's World</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-primary-200' 
                        : 'text-dark-200 hover:text-primary-300 hover:bg-primary-500/5'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary-500/10 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
              
              {/* CTA Button */}
              <Link
                href="/contact"
                className="relative ml-4 px-6 py-2 rounded-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/50 to-accent-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-sm font-medium text-white">Get Started</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-dark-200 hover:text-primary-300 transition-colors"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-primary-500/10 text-primary-200' 
                            : 'text-dark-200 hover:bg-primary-500/5 hover:text-primary-300'
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 mt-4 rounded-lg text-sm font-medium bg-gradient-to-r from-primary-500 to-accent-500 text-white text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-28 min-h-screen">
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-radial from-dark-900 to-dark-950" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-radial from-solar-500/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-radial from-solar-500/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative mt-20 bg-dark-900/50 backdrop-blur-lg overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.15, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-solar-500 to-neon-yellow rounded-full blur-3xl opacity-20" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="md:col-span-4 space-y-6">
              {/* <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-solar-500 to-neon-yellow rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-tr from-solar-500 to-neon-yellow transform group-hover:scale-105 transition-transform" />
                </div>
                <div>
                  <span className="text-2xl font-display font-bold bg-gradient-to-r from-solar-300 to-neon-yellow bg-clip-text text-transparent">
                    Solis Engineering
                  </span>
                  <p className="text-sm text-dark-400 mt-1">Powering Tomorrow's World</p>
                </div>
              </Link> */}
              <p className="text-dark-300 max-w-md">
                Leading the solar revolution with cutting-edge engineering solutions. Experience the future of renewable energy with our innovative solar installations.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                  { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                  { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="transform hover:scale-110 transition-transform"
                  >
                    <div className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-solar-500/10 flex items-center justify-center group transition-colors">
                      <svg className="w-5 h-5 text-dark-400 group-hover:text-solar-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-lg font-semibold text-solar-300">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'Gallery', 'About', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link 
                      href={`/${link.toLowerCase()}`} 
                      className="text-dark-300 hover:text-solar-300 transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-solar-500/50 mr-2 group-hover:scale-150 transition-transform" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-lg font-semibold text-solar-300">Our Services</h3>
              <ul className="space-y-3">
                {[
                  'Residential Solar',
                  'Commercial Solar',
                  'Solar Maintenance',
                  'Energy Monitoring',
                  'Battery Storage',
                ].map((service) => (
                  <li key={service}>
                    <Link 
                      href="/services" 
                      className="text-dark-300 hover:text-solar-300 transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-solar-500/50 mr-2 group-hover:scale-150 transition-transform" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-lg font-semibold text-solar-300">Contact Us</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Address', value: '1234 Solar Street, Sun City, SC 12345' },
                  { label: 'Email', value: 'contact@solis-engineering.com' },
                  { label: 'Phone', value: '(555) 123-SOLAR' },
                  { label: 'Hours', value: 'Mon-Fri: 8am - 6pm' },
                ].map((item) => (
                  <li key={item.label} className="text-dark-300">
                    <span className="block text-solar-400 text-sm">{item.label}</span>
                    {item.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-solar-500/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-dark-400 text-sm">
                © 2024 Solis Engineering. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-dark-400">
                <Link href="/privacy" className="hover:text-solar-300 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-solar-300 transition-colors">Terms of Service</Link>
                <Link href="/sitemap" className="hover:text-solar-300 transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 