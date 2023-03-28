/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGreen: {
          300: "#010A0A",
          500: "#43A375",
          700: "#02706F",
          900: "#013C3C",
        },
        lightGreen: {
          50: "#E2F0EC",
          100: "#98DDBB",
          300: "#548A70",
          500: "#43A375",
          700: "rgba(84, 198, 142, 0.6)",
        },
        neutrals: {
          100: "#F6F6F6",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#1E29EB",
          800: "#0F172A",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};