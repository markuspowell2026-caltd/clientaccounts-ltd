import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f3fb',
          100: '#dde5f5',
          200: '#c3cfeb',
          300: '#9aafda',
          400: '#6a87c4',
          500: '#4a68ae',
          600: '#3a5293',
          700: '#304278',
          800: '#1F2F5A',
          900: '#0D1B3E',
          950: '#070F22',
        },
        gold: {
          300: '#EDD483',
          400: '#D9BC74',
          500: '#C4A44A',
          600: '#A8882E',
          700: '#8A6E1E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease-out forwards',
        'fade-in':   'fadeIn 0.5s ease-out forwards',
        'float':     'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #070F22 0%, #0D1B3E 50%, #1A2F5C 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C4A44A 0%, #D9BC74 100%)',
      },
    },
  },
  plugins: [],
}

export default config
