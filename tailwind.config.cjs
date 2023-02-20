/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'ec-light': '#FFFAEB',
      'ec-dark': '#303030',
      'ec-brick': '#B35000',
      'ec-yellow': '#F8C612',
    },
    },
  },
  plugins: [],
}
