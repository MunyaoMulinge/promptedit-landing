import React from 'react'

const PREVIEW_CARDS = [
  { emoji: '🎬', tag: 'Cinematic', title: 'Epic Drone Flyover — Golden Hour City',    meta: 'Veo 3 · 847 downloads',   bg: 'from-bg3 to-surface' },
  { emoji: '✨', tag: 'Viral',     title: 'Product Reveal with Particle Burst',        meta: 'Kling 2.1 · 1.2k downloads', bg: 'from-[#1a0a2e] to-[#2a1a1e]' },
  { emoji: '🌊', tag: 'Trending',  title: 'Slow Motion Water Splash — Studio',         meta: 'Sora 2 · 2.1k downloads',    bg: 'from-[#0a1e1a] to-[#0a1a2e]' },
]

const AVATARS = [
  { initials: 'JK', bg: '#1e3a2a' },
  { initials: 'AM', bg: '#2a1e3a' },
  { initials: 'SR', bg: '#3a2a1e' },
  { initials: 'TP', bg: '#1e2a3a' },
  { initials: 'LM', bg: '#3a1e2a' },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-[120px] pb-20 relative text-center overflow-hidden">
      {/* Animated grid */}
      <div className="grid-bg absolute inset-0" />

      {/* Orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.18] blur-[120px] -top-24 -left-36"
        style={{ background: '#e8f45a', animation: 'float1 12s ease-in-out infinite' }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.18] blur-[120px] -bottom-20 -right-24"
        style={{ background: '#5af4c8', animation: 'float2 15s ease-in-out infinite' }}
      />

      {/* Badge */}
      <div className="relative inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full text-accent text-xs font-semibold uppercase tracking-widest mb-8"
           style={{ animation: 'fadeUp 0.8s ease both' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-accent" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
        The #1 AI Prompt Marketplace for Video Creators
      </div>

      {/* Headline */}
      <h1
        className="relative font-syne font-extrabold leading-none tracking-tight max-w-4xl mx-auto mb-7 text-5xl md:text-7xl lg:text-[6.5rem]"
        style={{ animation: 'fadeUp 0.8s 0.1s ease both' }}
      >
        Create Videos That{' '}
        <em className="not-italic text-accent relative">
          Stop the Scroll
          <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-accent/30 rounded" />
        </em>
      </h1>

      {/* Sub */}
      <p
        className="relative text-muted font-light max-w-xl mx-auto mb-11 text-lg md:text-xl leading-relaxed"
        style={{ animation: 'fadeUp 0.8s 0.2s ease both' }}
      >
        Access thousands of battle-tested AI prompts and templates for Veo, Kling, Sora, and every major video model — crafted by creators who actually go viral.
      </p>

      {/* CTAs */}
      <div className="relative flex flex-wrap gap-3 justify-center" style={{ animation: 'fadeUp 0.8s 0.3s ease both' }}>
        <a href="#"
          className="bg-accent text-bg font-bold text-sm px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(232,244,90,0.3)] no-underline">
          Start Creating Free
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
        <a href="#how"
          className="bg-transparent text-white text-sm font-medium px-8 py-4 rounded-lg border border-white/20 inline-flex items-center gap-2 hover:border-white/40 hover:bg-white/[0.04] transition-all no-underline">
          See how it works
        </a>
      </div>

      {/* Social proof */}
      <div className="relative mt-14" style={{ animation: 'fadeUp 0.8s 0.4s ease both' }}>
        <p className="text-dim text-xs uppercase tracking-widest mb-3">Trusted by creators worldwide</p>
        <div className="flex items-center justify-center">
          {AVATARS.map((a, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-full border-2 border-bg flex items-center justify-center text-xs font-bold text-accent flex-shrink-0"
              style={{ background: a.bg, marginLeft: i === 0 ? 0 : '-10px' }}
            >
              {a.initials}
            </div>
          ))}
          <span className="ml-3 text-muted text-sm">
            <strong className="text-white">50,000+</strong> creators already joined
          </span>
        </div>
      </div>

      {/* Browser mockup */}
      <div className="relative w-full max-w-4xl mx-auto mt-20" style={{ animation: 'fadeUp 0.9s 0.5s ease both' }}>
        <div className="bg-surface border border-white/[0.12] rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8),0_0_80px_rgba(232,244,90,0.06)]">
          {/* Title bar */}
          <div className="bg-white/[0.04] px-4 py-3 flex items-center gap-2 border-b border-white/[0.07]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="flex-1 text-center text-xs text-dim font-mono">promptedit.com/marketplace</span>
          </div>
          {/* Cards */}
          <div className="bg-[#0a0f14] p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {PREVIEW_CARDS.map((card, i) => (
              <div key={i} className="bg-surface border border-white/[0.07] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-accent/20 transition-all duration-300">
                <div className={`h-36 bg-gradient-to-br ${card.bg} flex items-center justify-center text-4xl relative overflow-hidden`}>
                  {card.emoji}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)', animation: 'shimmer 2.5s ease-in-out infinite' }} />
                </div>
                <div className="p-3">
                  <div className="text-accent text-[10px] uppercase tracking-wider font-semibold mb-1">{card.tag}</div>
                  <div className="font-syne font-semibold text-sm text-white leading-tight">{card.title}</div>
                  <div className="text-dim text-[11px] mt-2">{card.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
