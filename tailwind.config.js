/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
    gridTemplateColumns: {
      'fluid': 'repeat(auto-fit, minmax(120px, 1fr))',
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

