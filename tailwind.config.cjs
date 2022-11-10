/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts,tsx}"],
  theme: {
    screens: {
      xs: "240px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "dark-primary": "#000408",
      "dark-secondary": "#232524",
      "red-primary": "#ff6871",
      "white-primary": "#ffffff",
    },
    fontFamily: {
      sans: ["Helvetica"],
    },
  },
  plugins: [],
};
