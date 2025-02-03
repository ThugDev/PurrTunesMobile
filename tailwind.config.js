/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './styles/align.css',
  ],
  theme: {
    extend: {
      colors: {
        system: {
          white: '#ffffff',
          black: '#000000',
        },
        grey: {
          10: '#F8FAFC',
          20: '#E2E8F0',
          30: '#CBD5E1',
          40: '#94A3B8',
          50: '#64748B',
          60: '#475569',
          70: '#334155',
          80: '#1E293B',
          90: '#0F172A',
        },
      },
    },
    plugins: [],
  },
};
