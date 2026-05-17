/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:       '#080a0d',
        bg2:      '#0d1117',
        bg3:      '#111820',
        surface:  '#141c26',
        accent:   '#e8f45a',
        accent2:  '#5af4c8',
        muted:    '#8a95a3',
        dim:      '#50596a',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm:   ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float1':   'float1 12s ease-in-out infinite',
        'float2':   'float2 15s ease-in-out infinite',
        'float3':   'float3 10s ease-in-out infinite',
        'marquee':  'marquee 20s linear infinite',
        'pulse-dot':'pulse-dot 2s ease-in-out infinite',
        'shimmer':  'shimmer 2.5s ease-in-out infinite',
        'gridDrift':'gridDrift 20s linear infinite',
        'fadeUp':   'fadeUp 0.8s ease both',
      },
      keyframes: {
        float1:    { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(40px,-30px) scale(1.05)' } },
        float2:    { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(-30px,40px) scale(1.08)' } },
        float3:    { '0%,100%': { transform: 'translate(-50%,-50%) scale(1)' }, '50%': { transform: 'translate(-50%,-55%) scale(1.1)' } },
        marquee:   { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'pulse-dot':{ '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.5', transform: 'scale(1.5)' } },
        shimmer:   { '0%,100%': { transform: 'translateX(-100%)' }, '50%': { transform: 'translateX(100%)' } },
        gridDrift: { '0%': { backgroundPosition: '0 0' }, '100%': { backgroundPosition: '60px 60px' } },
        fadeUp:    { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
