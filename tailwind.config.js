/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#ff6262",
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
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
