/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '1rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem',
        },
      },
      fontFamily: {
        'poppins': ["Poppins", "serif"],
        'meriemda': ["Merienda", 'serif'],
      }
    },
    plugins: [],
  }