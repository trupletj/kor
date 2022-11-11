/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nanum: ['"NanumSquare"', "sans-serif"],
      },
      fontSize: {
        base: ["28px"],
        xl: ["40px"],
        "2xl": ["70px"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        "extra-bold": 800,
      },
    },
  },
  plugins: [],
};
