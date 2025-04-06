/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        red: "#f60204",
        blue: "#067dd7"
      }
    },
    
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
}