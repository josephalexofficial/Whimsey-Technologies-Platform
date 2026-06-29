/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0056D2',
          canvas: '#FFFFFF',
          text: '#0F172A',
          'canvas-dark': '#0B0F19',
        },
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}
