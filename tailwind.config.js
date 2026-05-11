/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        muted: '#64748b',
        brand: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bce0ff',
          300: '#8ecfff',
          400: '#59b2ff',
          500: '#318ce7',
          600: '#226fd0',
          700: '#1d5aab',
          800: '#1e4d8a',
          900: '#1c416f'
        },
        accent: {
          400: '#22c55e',
          500: '#16a34a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 55px rgba(15, 23, 42, 0.12)',
        glow: '0 18px 70px rgba(49, 140, 231, 0.26)'
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(49, 140, 231, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(49, 140, 231, 0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: [],
};
