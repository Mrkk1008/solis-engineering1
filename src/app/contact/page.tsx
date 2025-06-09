'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: 'Visit Us',
      content: '123 Solar Street\nEnergy City, EC 12345',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: '#00B6D3'
    },
    {
      title: 'Call Us',
      content: '(123) 456-7890\nMon-Fri 9am-6pm',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: '#FF8A00'
    },
    {
      title: 'Email Us',
      content: 'info@solis-engineering.com\nsupport@solis-engineering.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: '#8DC63F'
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
              <span className="text-[#0A1F33] text-sm md:text-base font-medium px-4">Get in Touch</span>
            </div>
            <h1 className="mb-4 md:mb-8">
              Let's Start Your{' '}
              <span className="text-[#00B6D3]">Solar Journey</span>
            </h1>
            <p className="text-[#0A1F33]/70">
              Contact us today to discuss your solar energy needs and get a free consultation with our experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div>
                <div className="w-12 sm:w-16 h-1 bg-[#00B6D3] mb-6 md:mb-8" />
                <h2 className="mb-4">
                  Send Us a Message
                </h2>
                <p className="text-[#0A1F33]/70">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0A1F33] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0A1F33] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#0A1F33] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-[#0A1F33] mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a project type</option>
                      <option value="residential">Residential Solar</option>
                      <option value="commercial">Commercial Solar</option>
                      <option value="industrial">Industrial Solar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0A1F33] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary w-full sm:w-auto"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-8 xl:pl-16"
            >
              <div className="space-y-6 md:space-y-8">
                <div>
                  <div className="w-12 sm:w-16 h-1 bg-[#00B6D3] mb-6 md:mb-8" />
                  <h2 className="mb-4">
                    Contact Information
                  </h2>
                  <p className="text-[#0A1F33]/70">
                    Get in touch with us through any of these channels.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.title}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex gap-3 md:gap-4">
                        <div
                          className="p-2 sm:p-3 rounded-lg flex-shrink-0"
                          style={{ backgroundColor: `${info.color}10`, color: info.color }}
                        >
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-[#0A1F33] mb-1 sm:mb-2">
                            {info.title}
                          </h3>
                          <p className="text-sm sm:text-base text-[#0A1F33]/70 whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map */}
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden mt-6 md:mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwMC4wIk4gNzPCsDU0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 