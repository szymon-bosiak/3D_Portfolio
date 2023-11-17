/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white": "#EDE9E9",
      },
      fontSize: {
        xxs: "9px",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
      SpaceMono: ["Space Mono, monospace"],
    },
    screens: {
      xs: "580px",
      sm: "640px",
      md: "800px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
