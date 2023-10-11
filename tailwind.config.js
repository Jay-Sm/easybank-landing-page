/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      "dark-blue": "#2d314d",
      "lime-green": "#31d35c",
      "bright-cyan": "#2bb7da",
      "grayish-blue": "#9698a6",
      "light-grayish-blue": "#f3f4f6",
      "very-light-gray": "#fafafa",
    },
    fontFamily: {
      "public-sans": "Public Sans",
    },
    fontWeight: {
      300: "300",
      400: "400",
      700: "700",
    },
    screens: {
      m: { max:"760px"},
      xsm: { max:"1174px"},
      sm: { min: "1175px", max:"1399px" },
      md: { min: "1400px", max: "1439px" },
      lg: { min: "1440px", max: "1599px" },
      xl: { min: "1600px", max: "1999px" },
      xxl: { min: "2000px" },
    },
    extend: {},
  },
  plugins: [],
};
