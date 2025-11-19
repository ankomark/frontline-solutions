// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'
import { Sun, Moon, Menu, X } from 'lucide-react'

const Navbar = ({ brandName, navItems, logo }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <motion.div
  whileHover={{ scale: 1.05 }}
  className="flex items-center space-x-3"
>
  {logo && <img src={logo} alt={brandName} className="h-10 w-auto" />}
  <span className="text-xl font-bold text-gray-900 dark:text-white">
    {brandName}
  </span>
</motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-amber-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-amber-300 dark:text-gray-200"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-amber-300 dark:text-gray-200"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {/* Mobile Navigation */}
<motion.div
  initial={false}
  animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
  className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md ml-auto w-48" /* 192px */
>
  <div className="py-4 space-y-4">
    {navItems.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="block text-amber-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {item.name}
      </a>
    ))}
  </div>
</motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar