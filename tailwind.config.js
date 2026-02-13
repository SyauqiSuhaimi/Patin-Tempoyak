/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1A2F25', // Deep Jungle Green
          light: '#2C4A3B',
        },
        secondary: '#F9F8F4', // Cream / Off-White
        accent: {
          DEFAULT: '#D4AF37', // Gold / Brass
          hover: '#c5a028',
        },
        text: '#333333', // Dark Charcoal
      },
    },
  },
  plugins: [],
}
