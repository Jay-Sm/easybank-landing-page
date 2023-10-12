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
      m: { min:"0px", max:"760px"},
      xsm: { min:"760px", max:"1175px"},
      sm: { min: "1175px", max:"1400px" },
      md: { min: "1400px", max: "1440px" },
      lg: { min: "1440px", max: "1600px" },
      xl: { min: "1600px", max: "2000px" },
      xxl: { min: "2000px" },
    },
    extend: {},
  },
  plugins: [],
};
