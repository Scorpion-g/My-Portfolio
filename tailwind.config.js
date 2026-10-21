/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#0B0F17',
          surface: '#111827',
          card: '#161F30',
          border: 'rgba(255, 255, 255, 0.08)',
          muted: '#94A3B8',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 35px -5px rgba(59, 130, 246, 0.4)',
      }
    },
  },
  plugins: [],
}
