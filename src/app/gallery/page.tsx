'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MainLayout } from '../components/layout/MainLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { FiSun, FiHome, FiZap, FiAward } from 'react-icons/fi';

const categories = [
  { id: 'all', name: 'All Projects', icon: FiSun },
  { id: 'residential', name: 'Residential', icon: FiHome },
  { id: 'commercial', name: 'Commercial', icon: FiZap },
  { id: 'awards', name: 'Award Winning', icon: FiAward },
];

const projects = [
  {
    id: 1,
    title: 'Modern Home Solar Installation',
    category: 'residential',
    image: '/gallery/residential-1.jpg',
    stats: { power: '10kW', savings: '$1,200/mo' },
  },
  {
    id: 2,
    title: 'Commercial Solar Farm',
    category: 'commercial',
    image: '/gallery/commercial-1.jpg',
    stats: { power: '100kW', savings: '$12,000/mo' },
  },
  {
    id: 3,
    title: 'Eco-Friendly Villa',
    category: 'residential',
    image: '/gallery/residential-2.jpg',
    stats: { power: '15kW', savings: '$1,800/mo' },
  },
  {
    id: 4,
    title: 'Shopping Mall Installation',
    category: 'commercial',
    image: '/gallery/commercial-2.jpg',
    stats: { power: '200kW', savings: '$24,000/mo' },
  },
  {
    id: 5,
    title: 'Award-Winning Design',
    category: 'awards',
    image: '/gallery/award-1.jpg',
    stats: { power: '20kW', savings: '$2,400/mo' },
  },
  // Add more projects as needed
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <MainLayout>
      <PageHeader
        title="Our Solar Gallery"
        subtitle="Explore our stunning solar installations and success stories"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-solar-500 text-dark-950'
                  : 'bg-dark-800 text-dark-200 hover:bg-solar-500/10 hover:text-solar-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative group"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  {/* Project Image */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>

                  {/* Project Info */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <motion.h3
                      className="text-xl font-bold text-white mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Stats */}
                    <motion.div
                      className="grid grid-cols-2 gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-dark-800/80 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-solar-300 text-sm">Power Output</div>
                        <div className="text-white font-bold">{project.stats.power}</div>
                      </div>
                      <div className="bg-dark-800/80 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-solar-300 text-sm">Monthly Savings</div>
                        <div className="text-white font-bold">{project.stats.savings}</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-solar-500 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      scale: hoveredProject === project.id ? 1 : 1.1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </MainLayout>
  );
} 