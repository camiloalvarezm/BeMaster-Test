/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        blue: "#0058E1",
        white: "#FFFFFF",
        gray: "#EAEBF0",
        "dark-blue": "#060525",
        "midnight-blue": "#192E6E",
      },
    },
  },
  plugins: [],
};
