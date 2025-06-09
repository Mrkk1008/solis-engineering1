'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Projects', href: '/projects' },
      { name: 'Contact', href: '/contact' }
    ],
    services: [
      { name: 'Solar Installation', href: '/services#installation' },
      { name: 'Energy Storage', href: '/services#storage' },
      { name: 'System Design', href: '/services#design' },
      { name: 'Maintenance', href: '/services#maintenance' }
    ],
    social: [
      {
        name: 'LinkedIn',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        )
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        )
      },
      {
        name: 'Facebook',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        )
      }
    ]
  };

  return (
    <footer className="bg-[#0A1F33] text-white">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6">
            <Link href="/" className="relative flex items-center">
              <Image
                src="/images/logo-white.png"
                alt="Solis Engineering"
                width={120}
                height={32}
                className="h-8 md:h-10 w-auto"
              />
            </Link>
            <p className="text-[#ffffff]/70 text-sm md:text-base max-w-xs">
              Leading the renewable energy revolution with innovative solar solutions and cutting-edge engineering.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#ffffff]/70 hover:text-[#00B6D3] transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Company</h3>
            <ul className="space-y-2 md:space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm md:text-base text-[#ffffff]/70 hover:text-[#00B6D3] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Services</h3>
            <ul className="space-y-2 md:space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm md:text-base text-[#ffffff]/70 hover:text-[#00B6D3] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Contact Us</h3>
            <ul className="space-y-3 md:space-y-4 text-[#ffffff]/70">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#00B6D3] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm md:text-base">123 Solar Street<br />Energy City, EC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#00B6D3] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@solis-engineering.com" className="text-sm md:text-base hover:text-[#00B6D3] transition-colors">
                  info@solis-engineering.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#00B6D3] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className="text-sm md:text-base hover:text-[#00B6D3] transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-[#ffffff]/70 text-center md:text-left">
              © {new Date().getFullYear()} Solis Engineering. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-[#ffffff]/70">
              <Link href="/privacy" className="hover:text-[#00B6D3] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#00B6D3] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 