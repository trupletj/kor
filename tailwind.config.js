/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nanum: ['"Nanum Gothic"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
