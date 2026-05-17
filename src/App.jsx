import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero   from './components/Hero.jsx'
import {
  LogosStrip,
  Stats,
  Features,
  HowItWorks,
  Categories,
  Testimonials,
  Pricing,
  CTA,
  Footer,
} from './components/Sections.jsx'
import useCursor from './hooks/useCursor.js'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useCursor()
  useReveal()

  return (
    <>
      {/* Custom cursor */}
      <div
        id="cursor"
        className="fixed w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-[9999] transition-transform duration-100 mix-blend-difference"
        style={{ top: 0, left: 0 }}
      />
      <div
        id="cursor-ring"
        className="fixed w-9 h-9 border border-accent/50 rounded-full pointer-events-none z-[9998] transition-all duration-[180ms]"
        style={{ top: 0, left: 0 }}
      />

      <Navbar />
      <main>
        <Hero />
        <LogosStrip />
        <Stats />
        <Features />
        <HowItWorks />
        <Categories />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
