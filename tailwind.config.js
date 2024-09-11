/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        draw: {
          "0%": { strokeDasharray: "1, 300", strokeDashoffset: "0" },
          "50%": { strokeDasharray: "120, 300", strokeDashoffset: "-58" },
          "100%": { strokeDasharray: "120, 300", strokeDashoffset: "-175" },
        },
      },
      animation: {
        draw: "draw 0.7s linear infinite",
      },
    },
    fontFamily: {
      caveat: ["Caveat", "cursive"],
      handjet: ["Handjet", "cursive"],
      sevillana: ["Sevillana", "cursive"],
      playfair: ["Playfair Display", "serif"],
      suse: ["SUSE", "sans-serif"],
    },
  },
  plugins: [],
};
