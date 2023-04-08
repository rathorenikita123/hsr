/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  daisyui: {
    themes: ["cmyk"],
  },

  theme: {
    extend: {},
    colors: {
      yellow: "#FEFF86",
      blue: "#B0DAFF",
      sky: "#B9E9FC",
      mustard: "#F9F54B",
      green: "#183A1D",
      gray: "#E1EEDD",
      brown: "#4F200D",
    },
    fontFamily: {
      alk: ["Alkatra", "cursive"],
    },
  },
  plugins: [require("daisyui")],
};
