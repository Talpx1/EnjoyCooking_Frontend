/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ec-gray-light': '#e5e5e5',
        'ec-gray-medium': '#737373',
        'ec-gray-dark': '#262626',

        'ec-base-light': '#FFEDD5',
        'ec-base-medium': '#F97316',
        'ec-base-dark': '#880000',

        'ec-accent-light': '#FDE68A',
        'ec-accent-medium': '#F59E0B',
        'ec-accent-dark': '#92400E',
      },
    },
  },
  plugins: [],
}
