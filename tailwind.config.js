/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#D90416',
        'brand-darkred': '#8B0E14',
        'brand-bg': '#0B0B0D',
        'brand-surface': '#111115',
        'brand-surface-2': '#16161A',
        'brand-muted': '#D9D9D9',
        'brand-faint': '#888888',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(217,4,22,0.4)',
        'glow-lg': '0 0 40px rgba(217,4,22,0.25)',
      },
      backgroundImage: {
        'crimson-fade': 'radial-gradient(circle at top, rgba(139,14,20,0.35), transparent 60%)',
      },
    },
  },
  plugins: [],
}
