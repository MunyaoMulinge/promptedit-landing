import React, { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Features',     href: '#features' },
  { label: 'How It Works', href: '#how'      },
  { label: 'Pricing',      href: '#pricing'  },
]

export default function Navbar() {
  const [open,      setOpen]      = useState(false)
  const [scrolled,  setScrolled]  = useState(false)

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[72px] bg-bg/90 backdrop-blur-xl border-b border-white/[0.07] transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : ''}`}>

        {/* Logo */}
        <a href="#" className="font-syne font-extrabold text-xl tracking-tight text-white no-underline z-10">
          Prompt<span className="text-accent">Edit</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-muted text-sm hover:text-white transition-colors no-underline">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="bg-accent text-bg text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity no-underline">
              Join Free
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden relative z-10 flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
        >
          <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {NAV_LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className="font-syne font-bold text-3xl text-white hover:text-accent transition-colors no-underline"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#"
          onClick={close}
          className="mt-4 bg-accent text-bg font-bold text-lg px-10 py-4 rounded-xl hover:opacity-90 transition-opacity no-underline"
        >
          Join Free
        </a>
      </div>
    </>
  )
}
