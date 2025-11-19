// src/pages/FrontlineMedia.jsx
import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/frontline/Hero'
import Services from '../components/sections/frontline/Services'
import Portfolio from '../components/sections/frontline/Portfolio'
import Testimonials from '../components/sections/frontline/Testimonials'
import Contact from '../components/sections/frontline/Contact'
import Footer from '../components/layout/Footer'
import Logo from '../Images/Logo.png'

const FrontlineMedia = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar 
        brandName="Frontline Media" 
        navItems={navItems}
        logo ={Logo}
      />
      
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      
      <Footer 
        brandName="Frontline Media"
        description="Professional Media Production & Visual Storytelling"
      />
    </div>
  )
}

export default FrontlineMedia