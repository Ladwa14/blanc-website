/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)"],     // 👈 THIS FIXES DEFAULT TEXT
        playfair: ["var(--font-playfair)"],
        manrope: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};