// src/pages/SkylinkWifi.jsx
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/skylink/Hero'
import Packages from '../components/sections/skylink/Packages'
import Reliability from '../components/sections/skylink/Reliability'
import FAQ from '../components/sections/skylink/FAQ'
import Contact from '../components/sections/skylink/Contact'
import Footer from '../components/layout/Footer'

const SkylinkWifi = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Packages', href: '#packages' },
    { name: 'Reliability', href: '#reliability' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar 
        brandName="Skylink WiFi Solutions" 
        navItems={navItems}
        logo="/images/skylink.png"
      />
      
      <Hero />
      <Packages />
      <Reliability />
      <FAQ />
      <Contact />
      
      <Footer 
        brandName="Skylink WiFi Solutions"
        description="Reliable High-Speed Internet Solutions"
      />
    </div>
  )
}

export default SkylinkWifi