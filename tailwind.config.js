/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: { preflight: false, container: false },
  darkMode: ["class", '[data-theme="dark"]'],
};
