import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Video, 
  Camera, 
  Calendar, 
  Radio, 
  Edit3,
  Plus,
  Minus,
  Check,
  Plane
} from 'lucide-react'

const Services = () => {
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      id: 1,
      icon: Video,
      title: 'Video Shooting',
      description: 'Professional video production for all your needs',
      image: '/images/video.jpg', // Replace with your actual image path
      details: '4K resolution, multiple camera angles, professional lighting, and audio equipment. Perfect for commercials, corporate videos, and events.',
      features: ['4K Resolution', 'Multiple Angles', 'Professional Audio', 'Color Grading']
    },
    {
      id: 2,
      icon: Camera,
      title: 'Professional Photography',
      description: 'Stunning photography that tells your story',
      image: '/images/photo.jpg',
      details: 'High-resolution photography with professional equipment and editing. Ideal for events, products, portraits, and commercial use.',
      features: ['High Resolution', 'Professional Editing', 'Multiple Shots', 'Digital Delivery']
    },
    {
      id: 3,
      icon: Calendar,
      title: 'Event Coverage',
      description: 'Comprehensive coverage for all types of events',
      
      image: '/images/event.jpg',
      details: 'Full event coverage including preparation, main event, and behind-the-scenes moments. Perfect for weddings, conferences, and corporate events.',
      features: ['Full Day Coverage', 'Multiple Photographers', 'Live Preview', 'Fast Delivery']
    },
    {
      id: 4,
      icon: Radio,
      title: 'Livestreaming Services',
      description: 'Professional live streaming for virtual events',
      image: '/images/live.jpg',
      details: 'Multi-camera live streaming with professional audio and graphics. Reach your global audience with high-quality streaming.',
      features: ['Multi-Camera Setup', 'Professional Graphics', 'Platform Integration', 'Technical Support']
    },
    {
      id: 5,
      icon: Plane,
      title: 'Drone Coverage',
      description: 'Aerial perspectives that elevate your content',
      image: '/images/drone.jpg',
      details: 'Stunning aerial footage captured with professional drone equipment. Perfect for real estate, events, and cinematic sequences.',
      features: ['4K Aerial Footage', 'Safe Operation', 'Smooth Movements', 'Legal Compliance']
    },
    {
      id: 6,
      icon: Edit3,
      title: 'Editing & Post-Production',
      description: 'Transform raw footage into compelling stories',
      image: '/images/edi.jpg',
      details: 'Professional video editing, color grading, sound design, and visual effects. We bring your vision to life in post-production.',
      features: ['Professional Editing', 'Color Grading', 'Sound Design', 'Visual Effects']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive media production services tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback gradient if image doesn't load
                    e.target.style.display = 'none'
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}
                />
                {/* Overlay with Icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-start p-6">
                  <div className="w-14 h-14 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                {/* Price Tag */}
                {service.price && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {service.price}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300 group/button"
                >
                  {expandedService === service.id ? (
                    <>
                      <Minus size={18} className="group-hover/button:rotate-180 transition-transform duration-300" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <Plus size={18} className="group-hover/button:rotate-90 transition-transform duration-300" />
                      Learn More
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                    >
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {service.details}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                          Key Features
                        </h4>
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                              <Check size={12} className="text-green-600 dark:text-green-400" />
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Need a custom package or have questions?
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services