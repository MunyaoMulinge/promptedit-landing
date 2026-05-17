import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-[72px] bg-bg/85 backdrop-blur-xl border-b border-white/[0.07]">
      <a href="#" className="font-syne font-extrabold text-xl tracking-tight text-white no-underline">
        Prompt<span className="text-accent">Edit</span>
      </a>
      <ul className="hidden md:flex items-center gap-9 list-none">
        <li><a href="#features" className="text-muted text-sm hover:text-white transition-colors no-underline">Features</a></li>
        <li><a href="#how"      className="text-muted text-sm hover:text-white transition-colors no-underline">How It Works</a></li>
        <li><a href="#pricing"  className="text-muted text-sm hover:text-white transition-colors no-underline">Pricing</a></li>
        <li>
          <a href="#" className="bg-accent text-bg text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity no-underline">
            Join Free
          </a>
        </li>
      </ul>
    </nav>
  )
}
