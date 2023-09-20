/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "grainy-bg": "url('./src/assets/grainy-bg.jpg')",
      },
      colors: {
        primary_green: "#00df9a",
        btn_green: "rgb(36, 217, 127)",
        primary_orange: "#c86800",
        dimWhite: "#b6b6b6",
        subtitle: "#cab197",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        "2xl": "-2px 5px 23px hsl(150, 100%, 66%)",
      },

      boxShadow: {
        primary: "1px 2px 7px 1px rgba(0, 0, 0, 0.3)",
        shadow_btn: "-4px 4px 1px #c86800",
      },
      scale: {
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        65: "0.65",
        70: "0.7",
        80: "0.8",
        85: "0.85",
        90: "0.9",
        150: "1.5",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1024px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
