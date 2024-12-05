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
      },
      
    },
    screens:{
      sm:{max:"767px"},
      md:{max:"1023px"},
      lg:{min:"1024px"},
      
      }
  },
  plugins: [],
}

