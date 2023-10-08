/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#ef4853",
        color2: "#38aa96",
        color3: "#F8714720",
        color4: "#79C23F20",
        dark2: "#403F3F",
        dark3: "#706F6F",
        dark4: "#9F9F9F",
        dark6: "#E7E7E7",
        dark7: "#F3F3F3",
        star: "#FF8C47",
        black: "#000000",
        white: "#ffffff",
      },
      fontFamily: {
        garamond: ["EB Garamond", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
