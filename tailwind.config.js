/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'button':'linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(212, 165, 0, 1) 100%, rgba(238, 130, 238, 1) 100%);'
      },
    },
  },
  plugins: [],
}