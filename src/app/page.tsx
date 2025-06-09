'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full">
            <div className="absolute top-0 right-0 w-1/2 h-screen bg-[#00B6D3]/5 clip-path-diagonal" />
            <div className="absolute bottom-0 left-0 w-1/2 h-screen bg-[#FF8A00]/5 clip-path-diagonal-reverse" />
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="pt-40 pb-20">
            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Left Column */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10"
                >
                  {/* Accent Line */}
                  <div className="w-20 h-2 bg-[#00B6D3] mb-8" />
                  
                  <h1 className="text-7xl font-bold leading-tight mb-8">
                    <span className="text-[#0A1F33] block">Solar</span>
                    <span className="text-[#00B6D3] block">Innovation</span>
                    <span className="text-[#FF8A00] block">Redefined</span>
                  </h1>

                  <p className="text-xl text-[#0A1F33]/70 mb-12 max-w-lg">
                    Revolutionizing energy solutions with cutting-edge solar technology and engineering excellence.
                  </p>

                  <div className="flex flex-wrap gap-6">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-[#0A1F33] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      Start Your Project
                    </motion.a>
                    <motion.a
                      href="/about"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-[#0A1F33] text-[#0A1F33] font-semibold rounded-full hover:bg-[#0A1F33]/5 transition-all duration-300"
                    >
                      Discover More
                    </motion.a>
                  </div>
                </motion.div>

                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="absolute -bottom-32 left-0 right-0 grid grid-cols-3 gap-6"
                >
                  {[
                    { value: '15+', label: 'Years', color: '#00B6D3' },
                    { value: '1000+', label: 'Projects', color: '#FF8A00' },
                    { value: '50MW+', label: 'Generated', color: '#8DC63F' }
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                      <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>
                        {stat.value}
                      </div>
                      <div className="text-[#0A1F33]/60 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative"
                >
                  {/* Main Image */}
                  <div className="relative h-[600px] rounded-[2rem] overflow-hidden">
                    <Image
                      src="/images/hero-solar.jpg"
                      alt="Solar Innovation"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F33]/30 to-transparent" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -right-8 w-full h-full border-4 border-[#00B6D3] rounded-[2rem] -z-10" />
                  <div className="absolute -bottom-8 -left-8 w-full h-full border-4 border-[#FF8A00] rounded-[2rem] -z-10" />

                  {/* Feature Cards */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute -right-12 top-1/4 bg-white p-6 rounded-2xl shadow-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#8DC63F]/10 rounded-xl">
                        <svg className="w-8 h-8 text-[#8DC63F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-[#0A1F33]">Eco-Friendly</div>
                        <div className="text-[#0A1F33]/60">100% Clean Energy</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -left-12 bottom-1/4 bg-white p-6 rounded-2xl shadow-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#00B6D3]/10 rounded-xl">
                        <svg className="w-8 h-8 text-[#00B6D3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-[#0A1F33]">Smart Tech</div>
                        <div className="text-[#0A1F33]/60">AI-Powered</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-1 bg-[#00B6D3] mx-auto" />
              <h2 className="text-5xl font-bold text-[#0A1F33]">
                Engineering Tomorrow
              </h2>
              <p className="text-xl text-[#0A1F33]/70">
                Discover how our innovative solutions are shaping the future of solar energy
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Integration',
                description: 'AI-powered systems that optimize energy production and consumption in real-time.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                color: '#00B6D3'
              },
              {
                title: 'Peak Performance',
                description: 'Advanced monitoring systems ensuring maximum efficiency and output.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: '#FF8A00'
              },
              {
                title: 'Future Ready',
                description: 'Scalable solutions designed to adapt to evolving energy needs.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                color: '#8DC63F'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}10`, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0A1F33] mb-4">{feature.title}</h3>
                <p className="text-[#0A1F33]/70">{feature.description}</p>
                <div 
                  className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: feature.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 