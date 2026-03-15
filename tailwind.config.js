/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-sm': 'repeat(auto-fit, minmax(180px, 1fr))',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      animation: {
        spin_slow: 'spin 8s linear infinite',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'glow': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      colors: {
        // light
        lightHover: '#f5f3ff',
        lightSurface: '#fafafa',
        lightBorder: '#e4e4e7',
        // dark
        darkTheme: '#09090b',
        darkSurface: '#18181b',
        darkBorder: '#27272a',
        darkHover: '#27272a',
        // accent
        accent: '#7c3aed',
        accentMid: '#8b5cf6',
        accentLight: '#a78bfa',
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
        'glow': '0 0 40px rgba(124, 58, 237, 0.25)',
        'glow-sm': '0 0 20px rgba(124, 58, 237, 0.15)',
        'card': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 32px rgba(0,0,0,0.08)',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
}
