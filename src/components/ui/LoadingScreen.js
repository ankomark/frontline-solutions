// src/components/ui/LoadingScreen.jsx
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLoading } from '../../contexts/LoadingContext'

const LoadingScreen = () => {
  const { isLoading } = useLoading()

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gradient-to-br from-blue-900 to-purple-900 z-50 flex items-center justify-center"
        >
          <div className="text-center text-white">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity }
              }}
              className="text-6xl mb-4"
            >
              📡
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold mb-2"
            >
              Frontline Media & Skylink WiFi
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300"
            >
              Loading your experience...
            </motion.p>
            
            {/* Animated progress bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-1 bg-white mt-4 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen