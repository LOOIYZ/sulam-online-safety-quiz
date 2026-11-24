/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0F172A',
          charcoal: '#1E293B',
          navy: '#1E3A8A',
          amber: '#F59E0B',
          amberLight: '#FEF3C7',
          gold: '#EAB308',
          red: '#EF4444',
          redLight: '#FEE2E2',
          redDark: '#991B1B',
          green: '#10B981',
          greenLight: '#D1FAE5',
          cream: '#FAF8F5'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-short': 'bounce 0.6s ease-in-out 2',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
