/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/*.{html,js,jsx}", "./components/**/*.{jsx,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1025px",
      xl: "1280px",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      blue: "#0038FF",
      purple: "#AD98F3",
      lime: "#EFFF8B",
      green: "#49AB93",
      gray: "#373746",
      scarlet: "#FF8058",
      mint: "#A5EBD7",
    },
    extend: {},
  },
  plugins: [],
};
