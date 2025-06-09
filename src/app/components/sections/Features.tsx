'use client';

import { motion } from 'framer-motion';
import { Card3D } from '../ui/Card3D';
import { FiSun, FiZap, FiHome, FiDollarSign, FiShield, FiAward } from 'react-icons/fi';

const features = [
  {
    icon: FiSun,
    title: 'Expert Installation',
    description: 'Professional solar panel installation by NABCEP certified technicians.',
    color: 'from-solar-500',
  },
  {
    icon: FiZap,
    title: 'Maximum Efficiency',
    description: 'High-performance solar systems designed for optimal energy production.',
    color: 'from-neon-yellow',
  },
  {
    icon: FiHome,
    title: 'Custom Solutions',
    description: 'Tailored solar solutions for residential and commercial properties.',
    color: 'from-neon-blue',
  },
  {
    icon: FiDollarSign,
    title: 'Great Savings',
    description: 'Significant reduction in energy costs and attractive tax incentives.',
    color: 'from-neon-purple',
  },
  {
    icon: FiShield,
    title: '25-Year Warranty',
    description: 'Industry-leading warranty coverage for your peace of mind.',
    color: 'from-neon-pink',
  },
  {
    icon: FiAward,
    title: 'Award-Winning',
    description: 'Recognized excellence in solar installation and customer service.',
    color: 'from-solar-500',
  },
];

export function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <motion.div
          className="absolute top-0 -right-40 w-96 h-96"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 bg-solar-500 rounded-full blur-3xl opacity-30" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-solar-300 to-neon-yellow bg-clip-text text-transparent"
          >
            Why Choose Solis Engineering?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-dark-300 max-w-2xl mx-auto"
          >
            Experience the future of solar energy with our cutting-edge solutions and expert team.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card3D glowColor={feature.color} height="min-h-[280px]">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-solar-500/10 text-solar-400">
                      <feature.icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-solar-300 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-dark-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5">
                    <feature.icon className="w-full h-full" />
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 