/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons:"burtons",
      }
    },
  },
  variants: {
    bgColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}