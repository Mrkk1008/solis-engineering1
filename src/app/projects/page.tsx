'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Home Solar',
      category: 'residential',
      location: 'Beverly Hills, CA',
      stats: {
        power: '12.5 kW',
        savings: '95%',
        completion: '2023'
      },
      image: '/images/residential-1.jpg',
      color: '#00B6D3'
    },
    {
      id: 2,
      title: 'Tech Office Complex',
      category: 'commercial',
      location: 'Silicon Valley, CA',
      stats: {
        power: '250 kW',
        savings: '85%',
        completion: '2023'
      },
      image: '/images/commercial-1.jpg',
      color: '#FF8A00'
    },
    {
      id: 3,
      title: 'Manufacturing Plant',
      category: 'industrial',
      location: 'Detroit, MI',
      stats: {
        power: '1.2 MW',
        savings: '75%',
        completion: '2023'
      },
      image: '/images/industrial-1.jpg',
      color: '#8DC63F'
    },
    {
      id: 4,
      title: 'Luxury Villa',
      category: 'residential',
      location: 'Miami, FL',
      stats: {
        power: '15 kW',
        savings: '90%',
        completion: '2023'
      },
      image: '/images/residential-2.jpg',
      color: '#00B6D3'
    },
    {
      id: 5,
      title: 'Shopping Center',
      category: 'commercial',
      location: 'Austin, TX',
      stats: {
        power: '400 kW',
        savings: '80%',
        completion: '2023'
      },
      image: '/images/commercial-2.jpg',
      color: '#FF8A00'
    },
    {
      id: 6,
      title: 'Distribution Center',
      category: 'industrial',
      location: 'Phoenix, AZ',
      stats: {
        power: '800 kW',
        savings: '70%',
        completion: '2023'
      },
      image: '/images/industrial-2.jpg',
      color: '#8DC63F'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-[#00B6D3]/5 transform -skew-x-12" />
            <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[#FF8A00]/5 transform skew-x-12" />
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
              <span className="text-[#0A1F33] text-sm md:text-base font-medium px-4">Success Stories</span>
            </div>
            <h1 className="mb-4 md:mb-8">
              Our Featured{' '}
              <span className="text-[#00B6D3]">Projects</span>
            </h1>
            <p className="text-[#0A1F33]/70">
              Explore our portfolio of successful solar installations across residential, commercial, and industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#0A1F33] text-white'
                    : 'bg-[#0A1F33]/5 text-[#0A1F33] hover:bg-[#0A1F33]/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 md:h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Project Info */}
                  <div className="relative p-4 sm:p-6">
                    <div className="absolute -top-8 sm:-top-10 right-4 sm:right-6 bg-white rounded-lg shadow-lg p-2 sm:p-3">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${project.color}10`, color: project.color }}
                      >
                        {project.category === 'residential' && (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        )}
                        {project.category === 'commercial' && (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                        {project.category === 'industrial' && (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0A1F33] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#0A1F33]/70 mb-4">
                      {project.location}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      <div>
                        <div className="text-sm sm:text-base font-bold text-[#0A1F33]">{project.stats.power}</div>
                        <div className="text-xs sm:text-sm text-[#0A1F33]/70">System Size</div>
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold text-[#0A1F33]">{project.stats.savings}</div>
                        <div className="text-xs sm:text-sm text-[#0A1F33]/70">Energy Savings</div>
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold text-[#0A1F33]">{project.stats.completion}</div>
                        <div className="text-xs sm:text-sm text-[#0A1F33]/70">Completed</div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Border */}
                  <div
                    className="absolute inset-0 border-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: project.color }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-[#0A1F33]/70 mb-6 md:mb-8">
              Join our growing list of satisfied clients and start your journey towards sustainable energy.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary inline-flex items-center justify-center"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 