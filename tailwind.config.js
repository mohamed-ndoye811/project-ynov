/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f9f4',
          100: '#dcf3e1',
          200: '#bce7c9',
          300: '#8dd4a6',
          400: '#5cb87c',
          500: '#389e5c',
          600: '#2d7f47',
          700: '#26653b',
          800: '#1f4e32',
          900: '#1a3e2a',
        },
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#8b5a3c',
          800: '#8a6657',
          900: '#674136',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        'relaxed': '1.6',
        'loose': '1.8',
      },
    },
  },
  plugins: [],
};