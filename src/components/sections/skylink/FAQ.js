// src/components/sections/skylink/FAQ.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Phone, Wifi, RefreshCw } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "I bought WiFi but didn't get connected automatically. What should I do?",
      answer: "Use your M-Pesa message and paste it on our sign-in page in the input box at the top, then click 'Connect Now'. If that fails, please call our customer care for immediate support."
    },
    {
      question: "Why does my phone show 'Obtaining IP Address'?",
      answer: "This usually indicates that our server is temporarily down or there's a power loss in regions providing the network. The issue is typically resolved within minutes. If it persists, please contact support."
    },
    {
      question: "The network seems slow. How can I improve the speed?",
      answer: "You can try: 1) Purchasing higher speed packages, 2) Refreshing the network by long-pressing the WiFi and clicking 'Forget' option, then reconnecting, or 3) Calling our customer care line available on the sign-in page for technical assistance."
    },
    {
      question: "How do I extend my current package?",
      answer: "Simply purchase the same package again before it expires. The system will automatically extend your connectivity duration. For PPPoE packages, renewal reminders are sent 3 days before expiration."
    },
    {
      question: "Can I use multiple devices with one package?",
      answer: "Hotspot packages are designed for single device use. PPPoE packages support multiple devices as specified in your chosen plan (from 8 to unlimited devices depending on the package)."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We currently accept M-Pesa payments for all packages. For PPPoE business accounts, we also accept bank transfers with monthly billing options."
    },
    {
      question: "Is there any installation fee?",
      answer: "Hotspot access requires no installation fee. PPPoE installation includes free basic setup. Additional equipment or complex installations may incur extra charges which will be discussed upfront."
    },
    {
      question: "What's your support availability?",
      answer: "We provide 24/7 customer support through our hotline, WhatsApp, and email. Emergency technical support is available round the clock for critical connectivity issues."
    }
  ]

  const troubleshooting = [
    {
      icon: RefreshCw,
      title: "Quick Refresh",
      steps: ["Long press your WiFi network", "Select 'Forget Network'", "Reconnect and enter credentials"]
    },
    {
      icon: Phone,
      title: "Contact Support",
      steps: ["Call: 0768297468", "WhatsApp: 0701071435", "Email: support@skylinkwifi.co.ke"]
    },
    {
      icon: Wifi,
      title: "Check Network Status",
      steps: ["Visit our status page", "Check social media updates", "Look for outage notifications"]
    }
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <HelpCircle className="text-white" size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Quick answers to common questions about our services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 mb-16"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-600"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-8 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 group"
              >
                <div className="flex-1">
                  <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white pr-8 leading-tight group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-green-500" size={28} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 border-t border-gray-100 dark:border-gray-600 pt-6">
                      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Troubleshooting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Quick Troubleshooting Guide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {troubleshooting.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-600"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-green-500" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {item.title}
                </h4>
                <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-4 font-medium">
                  {item.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                        {stepIndex + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support CTA */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-12 text-center text-white shadow-2xl"
>
  <h3 className="text-3xl font-bold mb-6">Still Need Help?</h3>
  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
    Our support team is available 24/7 to assist you with any connectivity issues
  </p>
  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.location.href = 'tel:0701485656'}
      className="bg-white text-gray-900 font-bold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
    >
      📞 Call Support: 0768297468
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open('https://wa.me/254701071435', '_blank')}
      className="border-2 border-white text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-white hover:text-gray-900 transition-all shadow-lg cursor-pointer"
    >
      💬 WhatsApp Support
    </motion.button>
  </div>
</motion.div>
      </div>
    </section>
  )
}

export default FAQ