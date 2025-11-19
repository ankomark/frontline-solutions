// src/components/sections/skylink/Contact.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Function to handle phone calls
  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`
  }

  // Function to handle WhatsApp
  const handleWhatsApp = () => {
    window.open('https://wa.me/254701071435', '_blank')
  }

  // Function to handle email
  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['0768297468', '0701485656'],
      description: '24/7 customer support',
      color: 'green',
      onClick: (detail) => handleCall(detail)
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['ankomark76@gmail.com', 'ankomark76@gmail.com'],
      description: 'We reply within 2 hours',
      color: 'blue',
      onClick: (detail) => handleEmail(detail)
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['0701071435'],
      description: 'Quick chat support',
      color: 'green',
      onClick: () => handleWhatsApp()
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Nairobi CBD', 'Mombasa Road'],
      description: 'Main offices',
      color: 'purple',
      onClick: null
    }
  ]

  const supportHours = [
    { day: 'Monday - Friday', hours: '24/7 Support' },
    { day: 'Saturday', hours: '24/7 Support' },
    { day: 'Sunday', hours: '24/7 Support' },
    { day: 'Emergency', hours: 'Always Available' }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're here to help you get the best internet experience. Reach out to us through any channel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow ${
                    method.onClick ? 'cursor-pointer' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${method.color}-100 dark:bg-${method.color}-900 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <method.icon className={`text-${method.color}-500`} size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {method.title}
                      </h4>
                      {method.details.map((detail, idx) => (
                        <div
                          key={idx}
                          onClick={() => method.onClick && method.onClick(detail)}
                          className={`text-gray-600 dark:text-gray-300 font-medium ${
                            method.onClick ? 'hover:text-green-500 transition-colors cursor-pointer' : ''
                          }`}
                        >
                          {detail}
                        </div>
                      ))}
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Support Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="text-green-500" size={24} />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Support Hours
                </h4>
              </div>
              <div className="space-y-3">
                {supportHours.map((item, index) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {item.day}
                    </span>
                    <span className="text-green-500 font-semibold">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                      placeholder="0712 345 678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="sales">Sales & Packages</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCall('0701485656')}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact