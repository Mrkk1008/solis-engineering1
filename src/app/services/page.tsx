'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      id: 'installation',
      title: 'Solar Installation',
      description: 'Professional installation of high-efficiency solar panels for residential and commercial properties.',
      features: [
        'Custom system design',
        'High-efficiency panels',
        'Expert installation team',
        'Warranty coverage'
      ],
      image: '/images/solar-installation.jpg',
      color: '#00B6D3'
    },
    {
      id: 'storage',
      title: 'Energy Storage',
      description: 'Advanced battery solutions to store excess solar energy for use during peak hours or outages.',
      features: [
        'Battery integration',
        'Smart monitoring',
        'Backup power',
        'Peak shifting'
      ],
      image: '/images/energy-storage.jpg',
      color: '#FF8A00'
    },
    {
      id: 'design',
      title: 'System Design',
      description: 'Custom solar system designs optimized for maximum efficiency and ROI.',
      features: [
        'Site assessment',
        'Performance modeling',
        'ROI analysis',
        '3D visualization'
      ],
      image: '/images/system-design.jpg',
      color: '#8DC63F'
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      description: 'Comprehensive maintenance services to ensure optimal system performance.',
      features: [
        'Regular inspections',
        'Performance monitoring',
        'Cleaning services',
        'Repair services'
      ],
      image: '/images/maintenance.jpg',
      color: '#0A1F33'
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00B6D3]/5 transform skew-x-12" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#FF8A00]/5 transform -skew-x-12" />
          </div>
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center p-2 bg-[#0A1F33]/5 rounded-full mb-6 md:mb-8">
              <span className="text-[#0A1F33] text-sm md:text-base font-medium px-4">Expert Solutions</span>
            </div>
            <h1 className="mb-4 md:mb-8">
              Our Solar{' '}
              <span className="text-[#00B6D3]">Services</span>
            </h1>
            <p className="text-[#0A1F33]/70">
              Comprehensive solar solutions tailored to your needs, from initial design to ongoing maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="container">
          <div className="space-y-16 md:space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-8 md:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 md:space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="w-12 sm:w-16 h-1" style={{ backgroundColor: service.color }} />
                  <h2 className="mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[#0A1F33]/70">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 md:gap-3">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
                          style={{ color: service.color }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm md:text-base text-[#0A1F33]/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"
                        style={{ backgroundColor: `${service.color}10` }}
                      />
                    </div>
                    <div
                      className="absolute -top-3 sm:-top-4 md:-top-6 -right-3 sm:-right-4 md:-right-6 w-full h-full border-4 rounded-xl -z-10"
                      style={{ borderColor: service.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-[#0A1F33]/5 overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="mb-4 md:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-[#0A1F33]/70 mb-6 md:mb-8">
              Contact us today to discuss your solar energy needs and get a free consultation.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary inline-flex items-center justify-center"
            >
              Schedule Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 