/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        lightBlue: "#003F62",
        brightYellow: "#EDA415",
        lightGray: " #F5F5F5",
        brickRed: "#DB4444",
        cardBg: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
