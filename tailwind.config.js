/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgcolors:{
          gray:'#F4F5F7'
        },
        textcolors:{
          red:'#FF698D'
        }
      }
    },
  },
  plugins: [],
}

