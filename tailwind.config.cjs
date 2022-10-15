/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dimBlue: "#1D365C",
        blue: "#22406D",
        lightBlue: "#00BFF3",
        red: "#F60000",
        gray: "#BDBDBD",
        lightGray: "#E3E3E3",
        white: "#FFFFFF",
        black: "#2E2E2E",
        blackGray: "#696969",
        lightBlack: "#333333"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};