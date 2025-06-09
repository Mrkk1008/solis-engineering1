'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-[#00B6D3]/5 transform -skew-x-12" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF8A00]/5 transform skew-x-12" />
          </div>
        </div>

        <div className="container mx-auto px-4 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center p-2 bg-[#0A1F33]/5 rounded-full mb-8">
              <span className="text-[#0A1F33] font-medium px-4">Pioneering Solar Innovation</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-[#0A1F33] mb-8">
              Engineering a{' '}
              <span className="text-[#00B6D3]">Sustainable</span>{' '}
              <span className="text-[#FF8A00]">Future</span>
            </h1>
            <p className="text-xl text-[#0A1F33]/70 max-w-2xl mx-auto">
              At Solis Engineering, we're not just building solar solutions – we're crafting the future of clean energy through innovation and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="w-16 h-1 bg-[#00B6D3]" />
              <h2 className="text-4xl font-bold text-[#0A1F33]">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-[#0A1F33]/70">
                We envision a world powered by clean, renewable energy. Our mission is to accelerate this transition by delivering innovative solar solutions that combine cutting-edge technology with expert engineering.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { number: '15+', label: 'Years of Excellence', color: '#00B6D3' },
                  { number: '1000+', label: 'Projects Delivered', color: '#FF8A00' },
                  { number: '50MW+', label: 'Power Generated', color: '#8DC63F' },
                  { number: '100%', label: 'Client Satisfaction', color: '#0A1F33' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                      {stat.number}
                    </div>
                    <div className="text-[#0A1F33]/70 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-[2rem] overflow-hidden">
                <Image
                  src="/images/mission.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F33]/30 to-transparent" />
              </div>
              <div className="absolute -top-8 -right-8 w-full h-full border-4 border-[#00B6D3] rounded-[2rem] -z-10" />
              <div className="absolute -bottom-8 -left-8 w-full h-full border-4 border-[#FF8A00] rounded-[2rem] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#0A1F33]/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="w-12 h-1 bg-[#00B6D3] mx-auto mb-8" />
            <h2 className="text-4xl font-bold text-[#0A1F33] mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-[#0A1F33]/70">
              The principles that drive our innovation and guide our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Pushing the boundaries of solar technology with cutting-edge solutions and creative thinking.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                color: '#00B6D3'
              },
              {
                title: 'Excellence',
                description: 'Delivering superior quality and performance in every project we undertake.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                color: '#FF8A00'
              },
              {
                title: 'Sustainability',
                description: 'Committed to environmental stewardship and renewable energy advancement.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                ),
                color: '#8DC63F'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${value.color}10`, color: value.color }}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0A1F33] mb-4">{value.title}</h3>
                <p className="text-[#0A1F33]/70">{value.description}</p>
                <div 
                  className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: value.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#0A1F33] to-[#00B6D3] rounded-3xl p-16 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Energy Future?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join us in building a sustainable tomorrow with innovative solar solutions tailored to your needs.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A1F33] font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 