import React from 'react'

// ── Logos Strip ───────────────────────────────────────────────────────────────
const LOGOS = ['Google Veo 3','Kling AI 2.1','Sora 2','Runway ML','Pika Labs','Luma Dream','MiniMax','Seedance','Wan 2.5','Higgsfield']

export function LogosStrip() {
  const doubled = [...LOGOS, ...LOGOS]
  return (
    <div className="py-10 border-t border-b border-white/[0.07] overflow-hidden">
      <p className="text-center text-dim text-[11px] uppercase tracking-[0.1em] mb-6">Works with every major AI video model</p>
      <div className="flex items-center logos-track gap-16 w-max">
        {doubled.map((l, i) => (
          <span key={i} className="font-syne font-bold text-dim hover:text-muted transition-colors whitespace-nowrap text-base">{l}</span>
        ))}
      </div>
    </div>
  )
}

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { number: '50k+', label: 'Active creators' },
  { number: '12k+', label: 'Prompts & templates' },
  { number: '98%',  label: 'Satisfaction rate' },
  { number: '10+',  label: 'AI models supported' },
]

export function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-white/[0.07]" style={{ gap: '1px', background: 'rgba(255,255,255,0.07)' }}>
      {STATS.map((s, i) => (
        <div key={i} className="bg-bg py-16 px-8 text-center reveal">
          <div className="font-syne font-extrabold text-5xl tracking-tight leading-none mb-2">
            {s.number.replace(/[k+%]/g, '')}<span className="text-accent">{s.number.match(/[k+%]+/)?.[0]}</span>
          </div>
          <div className="text-muted text-sm font-light">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

// ── Features ──────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: '🎯', title: 'Precision Prompts',   desc: 'Every prompt is engineered for a specific outcome — cinematic shots, product reveals, transitions, and more. No guesswork.' },
  { icon: '⚡', title: 'Model-Specific',       desc: 'Templates built and tested for each AI model. What works in Veo 3 is different from Kling. We handle the differences.' },
  { icon: '📈', title: 'Trend-Aware',          desc: 'Our team monitors what\'s performing on TikTok, Reels, and YouTube Shorts daily. Fresh trending templates every week.' },
  { icon: '🎬', title: 'Video Previews',       desc: 'See exactly what each prompt produces before you buy. Every template comes with sample output so you know what to expect.' },
  { icon: '🔧', title: 'DaVinci & Premiere',   desc: 'Native extensions for DaVinci Resolve and Adobe Premiere Pro. Access your templates right inside your editing workflow.' },
  { icon: '💰', title: 'Earn as a Creator',    desc: 'Sell your own prompts and templates to 50,000+ creators. Turn your creative expertise into passive income.' },
]

export function Features() {
  return (
    <section id="features" className="py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-[72px]">
          <p className="text-accent text-[11px] uppercase tracking-[0.12em] font-semibold mb-4">What you get</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-5">
            Everything a creator needs<br/>to go viral, faster
          </h2>
          <p className="text-muted font-light text-lg max-w-lg leading-relaxed">
            Stop wasting hours prompting from scratch. Every template is tested, refined, and proven to produce stunning results.
          </p>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-3 border border-white/[0.07] rounded-2xl overflow-hidden" style={{ gap: '1px', background: 'rgba(255,255,255,0.07)' }}>
          {FEATURES.map((f, i) => (
            <div key={i} className="feature-card-hover bg-bg2 hover:bg-bg3 p-10 relative overflow-hidden transition-colors duration-300">
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-2xl mb-6">{f.icon}</div>
              <h3 className="font-syne font-bold text-lg mb-3 tracking-tight">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── How It Works ──────────────────────────────────────────────────────────────
const STEPS = [
  { n: '01', title: 'Browse & discover',   desc: 'Search thousands of prompts by model, style, use case, or trending category. Filter by platform — TikTok, YouTube, Instagram.' },
  { n: '02', title: 'Copy & customize',    desc: 'One click copies the prompt. Swap in your product, character, or scene. Every template includes guidance on what to personalize.' },
  { n: '03', title: 'Generate & publish',  desc: 'Paste into your AI model of choice, generate, and publish. Most creators go from prompt to posted in under 15 minutes.' },
]

export function HowItWorks() {
  return (
    <section id="how" className="py-28 px-6 md:px-12 bg-bg2">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-[72px]">
          <p className="text-accent text-[11px] uppercase tracking-[0.12em] font-semibold mb-4">Simple process</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-5">
            From zero to viral<br/>in three steps
          </h2>
          <p className="text-muted font-light text-lg max-w-lg leading-relaxed">
            No learning curve. No prompt engineering degree required. Just results.
          </p>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-12">
          {STEPS.map((s, i) => (
            <div key={i} className="relative">
              <div className="font-syne font-extrabold text-[5rem] leading-none tracking-tight text-accent/[0.08] mb-[-16px]">{s.n}</div>
              <h3 className="font-syne font-bold text-xl mb-3 tracking-tight">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed font-light">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <span className="hidden md:block absolute top-10 -right-6 text-dim text-xl">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Categories ────────────────────────────────────────────────────────────────
const CATS = [
  { icon: '🎬', name: 'Cinematic & Film',    desc: 'Epic establishing shots, dramatic reveals, golden hour sequences, and Hollywood-grade visual storytelling.', count: '2,400+', featured: true },
  { icon: '📦', name: 'Product & Commerce',  desc: 'High-converting product showcases, unboxings, lifestyle shots, and e-commerce ad templates.', count: '1,800+', featured: false },
  { icon: '📱', name: 'Short Form & Viral',  desc: 'Hook-first formats optimized for TikTok, YouTube Shorts, and Instagram Reels. Pattern interrupts included.', count: '3,100+', featured: false },
  { icon: '🤖', name: 'AI & Futuristic',     desc: 'Sci-fi visuals, neon aesthetics, digital worlds, and otherworldly sequences that showcase AI capabilities.', count: '1,200+', featured: false },
]

export function Categories() {
  return (
    <section className="py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-[72px]">
          <p className="text-accent text-[11px] uppercase tracking-[0.12em] font-semibold mb-4">Template library</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-5">
            Every style.<br/>Every platform.
          </h2>
          <p className="text-muted font-light text-lg max-w-lg leading-relaxed">Organized by use case so you find what you need instantly.</p>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATS.map((c, i) => (
            <div key={i}
              className={`flex items-start gap-5 p-8 rounded-xl border cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${
                c.featured
                  ? 'bg-gradient-to-br from-accent/[0.08] to-accent2/[0.04] border-accent/20'
                  : 'bg-surface border-white/[0.07] hover:border-accent/25'
              }`}>
              <div className="w-14 h-14 flex items-center justify-center bg-white/[0.04] rounded-xl text-3xl flex-shrink-0">{c.icon}</div>
              <div>
                <h3 className="font-syne font-bold text-lg mb-1.5 tracking-tight">{c.name}</h3>
                <p className="text-muted text-sm font-light leading-relaxed mb-3">{c.desc}</p>
                <span className="text-accent text-xs font-semibold">{c.count} templates</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Testimonials ──────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { text: '"I went from spending 3 hours on a single Kling prompt to getting cinematic results in 10 minutes. PromptEdit is the unfair advantage I didn\'t know I needed."', initials: 'JR', name: 'James R.',  role: 'YouTube Creator — 240K subscribers' },
  { text: '"The DaVinci extension alone is worth the subscription. I can browse and apply templates without leaving my edit. My workflow has completely changed."',              initials: 'SM', name: 'Sofia M.',  role: 'Video Editor & Content Strategist' },
  { text: '"I sold my first prompt pack last month and made $400 passively. Didn\'t expect to become a seller but here we are. Highly recommend."',                            initials: 'TK', name: 'Tariq K.',  role: 'AI Creator & Marketplace Seller' },
]

export function Testimonials() {
  return (
    <section className="py-28 px-6 md:px-12 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-[72px]">
          <p className="text-accent text-[11px] uppercase tracking-[0.12em] font-semibold mb-4">Creator stories</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
            They stopped guessing.<br/>Now they just create.
          </h2>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-surface border border-white/[0.07] hover:border-white/[0.12] rounded-xl p-8 transition-colors duration-300">
              <div className="text-accent text-sm tracking-widest mb-4">★★★★★</div>
              <p className="text-muted text-sm leading-relaxed font-light italic mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-bg3 flex items-center justify-center font-bold text-sm text-accent flex-shrink-0">{t.initials}</div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-dim text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Pricing ───────────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: 'Starter', price: '0', period: 'Free forever', featured: false,
    features: ['50 prompts per month','5 AI models supported','Community access','Basic search & filter'],
    btnText: 'Get started free', btnStyle: 'outline',
  },
  {
    name: 'Pro', price: '19', period: 'per month, billed monthly', featured: true,
    features: ['Unlimited prompts','All 10+ AI models','DaVinci & Premiere plugins','Weekly trending drops','Sell in marketplace'],
    btnText: 'Start Pro free', btnStyle: 'filled',
  },
  {
    name: 'Team', price: '49', period: 'per month, up to 5 seats', featured: false,
    features: ['Everything in Pro','Team workspace','Shared prompt library','Priority support','Analytics dashboard'],
    btnText: 'Contact sales', btnStyle: 'outline',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 md:px-12 bg-bg2">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-[72px]">
          <p className="text-accent text-[11px] uppercase tracking-[0.12em] font-semibold mb-4">Simple pricing</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-5">
            Start free.<br/>Scale when ready.
          </h2>
          <p className="text-muted font-light text-lg mx-auto max-w-md">No hidden fees. Cancel anytime. Your prompts never expire.</p>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {PLANS.map((p, i) => (
            <div key={i} className={`relative rounded-2xl p-10 border transition-all duration-300 hover:-translate-y-1 ${
              p.featured
                ? 'bg-gradient-to-b from-accent/[0.1] to-accent2/[0.05] border-accent/30'
                : 'bg-surface border-white/[0.07]'
            }`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-bg text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-muted text-[11px] font-semibold uppercase tracking-widest mb-5">{p.name}</div>
              <div className="font-syne font-extrabold text-5xl tracking-tight leading-none mb-1">
                <sup className="text-xl font-medium align-super">$</sup>{p.price}
              </div>
              <div className="text-dim text-xs mb-8">{p.period}</div>
              <ul className="mb-9 space-y-0">
                {p.features.map((f, j) => (
                  <li key={j} className="text-muted text-sm py-2 border-b border-white/[0.07] flex items-center gap-2.5">
                    <span className="text-accent font-bold text-xs flex-shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`block text-center py-3.5 rounded-lg font-semibold text-sm no-underline transition-all ${
                p.btnStyle === 'filled'
                  ? 'bg-accent text-bg hover:shadow-[0_6px_30px_rgba(232,244,90,0.35)]'
                  : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/[0.04]'
              }`}>{p.btnText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA ───────────────────────────────────────────────────────────────────────
export function CTA() {
  return (
    <section className="py-40 px-6 text-center relative overflow-hidden">
      <div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
           style={{ background: 'radial-gradient(circle, rgba(232,244,90,0.12) 0%, transparent 70%)' }} />
      <div className="relative max-w-5xl mx-auto reveal">
        <p className="text-accent text-[11px] uppercase tracking-[0.12em] font-semibold mb-4">Ready to create?</p>
        <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-5 max-w-2xl mx-auto">
          Your next viral video<br/>starts with the right prompt.
        </h2>
        <p className="text-muted font-light text-lg max-w-lg mx-auto mb-11">
          Join 50,000+ creators who stopped struggling with AI and started shipping content that actually performs.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#" className="bg-accent text-bg font-bold text-sm px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(232,244,90,0.3)] transition-all no-underline">
            Join PromptEdit Free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#pricing" className="border border-white/20 text-white text-sm font-medium px-8 py-4 rounded-lg hover:border-white/40 hover:bg-white/[0.04] transition-all no-underline">
            View pricing
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="px-6 md:px-12 pt-16 pb-10 border-t border-white/[0.07] bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="font-syne font-extrabold text-xl mb-3">Prompt<span className="text-accent">Edit</span></div>
            <p className="text-muted text-sm font-light leading-relaxed max-w-[280px]">
              The premier marketplace for AI video prompts and templates. Built for creators who take their content seriously.
            </p>
          </div>
          {[
            { title: 'Product',  links: ['Marketplace','Trending','DaVinci Extension','Premiere Extension','Pricing'] },
            { title: 'Creators', links: ['Sell prompts','Creator program','Blog','Tutorials','Community'] },
            { title: 'Company',  links: ['About','Careers','Contact','Privacy','Terms'] },
          ].map((col, i) => (
            <div key={i}>
              <div className="text-[11px] text-dim uppercase tracking-widest font-semibold mb-5">{col.title}</div>
              <ul className="space-y-2.5 list-none">
                {col.links.map((l, j) => (
                  <li key={j}><a href="#" className="text-muted text-sm hover:text-white transition-colors no-underline">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.07] text-dim text-xs gap-2">
          <span>© 2026 PromptEdit. All rights reserved.</span>
          <span>Made for creators, by creators.</span>
        </div>
      </div>
    </footer>
  )
}
