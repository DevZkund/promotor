/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        spectral: ['Spectral', 'serif'],
        prociono: ['Prociono', 'serif'],
        prompt: ['Prompt', 'sans-serif'],
        nexa: ['Nexa XBold', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}
