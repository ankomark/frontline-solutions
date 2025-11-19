import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sara momanyi',
      position: 'Marketing Director.',
      company: 'TechGlobal Inc.',
      image: '/images/sarah.png',
      rating: 5,
      text: 'Frontline Media transformed our event into a cinematic experience. Their attention to detail and creative vision exceeded all expectations. The final deliverables were nothing short of spectacular.',
      project: 'Camp meeting 2024',
      services: ['Video Production', 'Live Streaming', 'Photography']
    },
    {
      id: 2,
      name: 'Marcus ochieng',
      position: 'Brand Manager',
      company: 'Susa church',
      image: '/images/testimonials/marcus-rodriguez.jpg',
      rating: 5,
      text: 'Working with Frontline Media on our project  was exceptional. Their drone cinematography and post-production work elevated our group to new heights. The results spoke for themselves.',
      project: 'susa volume 1',
      services: ['Commercial Video', 'Drone Coverage', 'Editing']
    },
    {
      id: 3,
      name: 'Emily Onderi',
      position: 'Event Director',
      company: 'Fashion Forward',
      image: '/images/testimonials/emily-watson.jpg',
      rating: 5,
      text: 'The photography portfolio from festive Week was breathtaking. They captured the energy, emotion, and elegance of every moment. Our designers were thrilled with the results.',
      project: 'Festive Week Portfolio',
      services: ['Event Photography', 'Portfolio Shots', 'Editorial']
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'CEO',
      company: 'Innovate Corp',
      image: '/images/testimonials/david-kim.jpg',
      rating: 5,
      text: 'The brand documentary they created perfectly captured our company culture and innovation journey. It has become an invaluable asset for recruitment and investor relations.',
      project: 'Corporate Brand Story',
      services: ['Documentary', 'Interview Videos', 'Social Content']
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700"
              >
                <Quote className="w-12 h-12 text-blue-400 mb-6 opacity-50" />
                
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-6">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-xl">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-gray-300">
                          {testimonials[currentTestimonial].position}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="bg-gray-800/50 rounded-2xl p-6">
                    <h4 className="font-semibold text-lg mb-4">Project Details</h4>
                    <div className="space-y-4">
                      <div>
                        <span className="text-gray-400 text-sm">Project</span>
                        <div className="font-semibold text-blue-400">
                          {testimonials[currentTestimonial].project}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Services Used</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {testimonials[currentTestimonial].services.map((service, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-300 border border-gray-600"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-300 border border-gray-600"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Industry Awards' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;