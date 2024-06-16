/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightPurple: "#cc9cfb",
        veryLightPurple: "#f2f2f2",
        darkBlue: "#1e316a",
        greenishYellow: "#cbef2c",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      letterSpacing: {
        widest: ".02em",
      },
      borderWidth: {
        0: "0px",
        10: "10px",
      },
      scrollSnapAlign: {
        center: "center",
      },
    },
  },
  plugins: [],
};
