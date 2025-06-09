'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-[#0A1F33]/10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <Image
              src="/images/logo.png"
              alt="Solis Engineering"
              width={120}
              height={32}
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm lg:text-base text-[#0A1F33] font-medium hover:text-[#00B6D3] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary text-sm lg:text-base"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
              <span
                className={`w-full h-0.5 bg-[#0A1F33] transition-transform duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#0A1F33] transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#0A1F33] transition-transform duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-[#0A1F33]/10"
          >
            <div className="container mx-auto py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[#0A1F33] font-medium py-2 hover:text-[#00B6D3] transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="btn btn-primary text-sm mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 