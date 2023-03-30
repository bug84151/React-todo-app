/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: { max: "700px" },
      md: { min: "701" },
    },
    extend: {
      fontFamily: {
        cookie: ['"Cookie"', "cursive"],
      },
    },
  },
  plugins: [],
};
