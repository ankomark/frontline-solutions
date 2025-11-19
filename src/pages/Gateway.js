// src/pages/Gateway.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLoading } from '../contexts/LoadingContext'

const Gateway = () => {
  const navigate = useNavigate()
  const { setLoading } = useLoading()

  const handleNavigation = (path) => {
    setLoading(true)
    setTimeout(() => {
      navigate(path)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          What are you interested in?
        </motion.h1>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-16">
          {/* Frontline Media Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation('/frontline-media')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-semibold py-8 px-12 rounded-2xl w-80 md:w-96 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
            <span className="relative z-10">Frontline Media</span>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 right-4 w-12 h-12"
            >
              <img src="/images/f.png" alt="Logo" className="w-full h-full object-contain" />
            </motion.div>
          </motion.button>

          {/* Skylink WiFi Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation('/skylink-wifi')}
            className="bg-gradient-to-r from-green-600 to-teal-600 text-white text-2xl font-semibold py-8 px-12 rounded-2xl w-80 md:w-96 hover:from-green-500 hover:to-teal-500 transition-all duration-300 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
            <span className="relative z-10">Skylink WiFi Solutions</span>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 right-4 w-12 h-12"
            >
              <img src="/images/skylink.png" alt="Skylink" className="w-full h-full object-contain" />
            </motion.div>
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-lg text-gray-300"
        >
          Choose your destination to explore our services
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Gateway