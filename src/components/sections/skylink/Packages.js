// src/components/sections/skylink/Packages.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Wifi, Zap, Crown, Star } from 'lucide-react'

const Packages = () => {
  const [activeTab, setActiveTab] = useState('hotspot')

  const hotspotPackages = [
    { hours: '3 Hours', price: 'Ksh 10', data: 'Standard Speed', popular: false },
    { hours: '6 Hours', price: 'Ksh 20', data: 'Standard Speed', popular: false },
    { hours: '1GB Unlimited', price: 'Ksh 30', data: '1GB High Speed', popular: true },
    { hours: '24 Hours', price: 'Ksh 40', data: 'Standard Speed', popular: false },
    { hours: '1 Week', price: 'Ksh 150', data: 'High Speed', popular: true },
    { hours: '2 Weeks', price: 'Ksh 200', data: 'High Speed', popular: false },
    { hours: '3 Weeks', price: 'Ksh 300', data: 'High Speed', popular: false },
    { hours: '1 Month', price: 'Ksh 600', data: 'Premium Speed', popular: true }
  ]

  const pppoePackages = [
    { speed: '6 Mbps', price: 'Ksh 1,500', upload: '2 Mbps', devices: 'Up to 8 devices', popular: false },
    { speed: '10 Mbps', price: 'Ksh 2,000', upload: '4 Mbps', devices: 'Up to 15 devices', popular: true },
    { speed: '15 Mbps', price: 'Ksh 2,500', upload: '6 Mbps', devices: 'Up to 25 devices', popular: false },
    { speed: '20 Mbps', price: 'Ksh 4,000', upload: '8 Mbps', devices: 'Unlimited devices', popular: true }
  ]

  const features = [
    '99.9% Uptime Guarantee',
    '24/7 Technical Support',
    'No Data Caps',
    'Free Installation',
    'Secure Connection',
    'Multiple Device Support'
  ]

  return (
    <section id="packages" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Zap className="text-white" size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Internet Packages
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from our flexible and affordable internet solutions designed for both personal and business use
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('hotspot')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'hotspot'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-green-500'
              }`}
            >
              <Wifi size={20} className="inline mr-2" />
              Hotspot Packages
            </button>
            <button
              onClick={() => setActiveTab('pppoe')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'pppoe'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
              }`}
            >
              <Crown size={20} className="inline mr-2" />
              PPPoE Packages
            </button>
          </div>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {(activeTab === 'hotspot' ? hotspotPackages : pppoePackages).map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 ${
                pkg.popular 
                  ? 'border-green-500 shadow-xl scale-105' 
                  : 'border-transparent hover:border-green-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star size={12} className="mr-1" />
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {activeTab === 'hotspot' ? pkg.hours : pkg.speed}
                </h3>
                <div className="text-3xl font-bold text-green-500 mb-2">
                  {pkg.price}
                  {activeTab === 'pppoe' && <span className="text-sm font-normal text-gray-500">/month</span>}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {activeTab === 'hotspot' ? pkg.data : pkg.upload} Upload
                </p>
                {activeTab === 'pppoe' && (
                  <p className="text-sm text-gray-500 mt-2">{pkg.devices}</p>
                )}
              </div>

              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Why Choose Skylink WiFi?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={16} className="text-green-500" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Packages