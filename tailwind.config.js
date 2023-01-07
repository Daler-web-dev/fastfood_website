/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '1l': '569px',
      '2l': '761px',
      '3l': '380px'
    }
  },
  plugins: [],
}
