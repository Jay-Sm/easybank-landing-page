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
      m: { min: "0px", max: "659px" },
      t: { min: "660px", max: "759px" },
      xsm: { min: "760px", max: "1174px" },
      sm: { min: "1175", max: "1399" },
      md: "1400px",
      lg: "1440px",
      xl: "1600px",
      xxl: "2000px",
    },
    extend: {},
  },
  plugins: [],
};
