/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          500: '#06fcff',
          600: '#03a1fc'
        }
      }
    },
  },
  plugins: [],
}

