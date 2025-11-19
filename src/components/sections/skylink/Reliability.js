// src/components/sections/skylink/Reliability.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, Zap, Users, Server, BarChart3 } from 'lucide-react'

const Reliability = () => {
  const stats = [
    { icon: Shield, value: '99.9%', label: 'Uptime Guarantee', description: 'Consistent connectivity you can rely on' },
    { icon: Clock, value: '< 24h', label: 'Response Time', description: 'Quick resolution for all technical issues' },
    { icon: Zap, value: '1GB/s', label: 'Max Speed', description: 'Lightning-fast internet speeds available' },
    { icon: Users, value: '10k+', label: 'Happy Customers', description: 'Serving thousands of satisfied users' }
  ]

  const features = [
    {
      icon: Server,
      title: 'Robust Infrastructure',
      description: 'Multiple redundant servers and backup systems ensure uninterrupted service even during peak hours.'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security protocols protect your data and privacy across all connections.'
    },
    {
      icon: BarChart3,
      title: 'Real-time Monitoring',
      description: '24/7 network monitoring with instant alerts and proactive issue resolution.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our technical team is always ready to assist with any connectivity challenges.'
    }
  ]

  return (
    <section id="reliability" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Built for Reliability
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience internet connectivity that works when you need it most, backed by cutting-edge technology and dedicated support
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {stat.label}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Enterprise-Grade Infrastructure
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex space-x-4"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Network Visualization */}
            <div className="bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 rounded-2xl p-8 aspect-video relative overflow-hidden">
              {/* Animated network nodes */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-white rounded-full"
                  style={{
                    left: `${20 + (i * 5) % 80}%`,
                    top: `${30 + (i * 7) % 60}%`,
                  }}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
              
              {/* Connection lines */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-0.5 bg-white/30"
                    style={{
                      left: `${10 + (i * 10)}%`,
                      top: '50%',
                      width: `${30 + Math.random() * 40}%`,
                    }}
                    animate={{
                      opacity: [0.1, 0.5, 0.1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Zap size={48} className="mx-auto mb-4" />
                  <h4 className="text-2xl font-bold">Live Network Status</h4>
                  <p className="text-white/80">All systems operational</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready for Reliable Internet?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers enjoying fast, stable internet connectivity
            </p>
            <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
              Get Connected Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reliability