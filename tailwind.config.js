/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'img1': "url('./images/Union.png')",
        'img2': "url('./images/teams.png')"
      }
        
  },
  plugins: [],
}
}
