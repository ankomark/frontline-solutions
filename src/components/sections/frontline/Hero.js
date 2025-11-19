import React from 'react'
import { motion } from 'framer-motion'
import { Play, Calendar } from 'lucide-react'

const Hero = () => {
  // Animation settings - controls how elements fade in
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  // Scroll indicator animation - makes it bounce up and down
  const bounceAnimation = {
    y: [0, 10, 0],
    transition: { duration: 2, repeat: Infinity }
  }
return (
  <section 
    id="home" 
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* BACKGROUND LAYER - Image with dark overlay */}
    <div className="absolute inset-0 z-0">
      {/* Background Image */}
      <img 
        src='https://images.pexels.com/photos/31086906/pexels-photo-31086906.jpeg'
        alt="Hero Background" 
        className="w-full h-full object-cover"
      />
      
      {/* Dark overlay to make text readable - MUST come after image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/90 z-10"></div>
    </div>

    {/* CONTENT LAYER - Text and buttons */}
    <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
        
        {/* Main Headline */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Professional Media Production & Visual Storytelling
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto"
        >
          Transforming your vision into compelling visual narratives that captivate and inspire
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Primary Button - Book Service */}
<motion.a
  href="#contact" // Add your actual link here
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full flex items-center gap-3 transition-colors cursor-pointer"
>
  <Calendar size={20} />
  Book a Service
</motion.a>

{/* Secondary Button - View Portfolio */}
<motion.a
  href="#portfolio" // Add your actual link here
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full flex items-center gap-3 hover:bg-white hover:text-gray-900 transition-all cursor-pointer"
>
  <Play size={20} />
  View Portfolio
</motion.a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={bounceAnimation}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero