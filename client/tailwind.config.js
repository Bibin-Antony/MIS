/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b257a",
        secondary: "cyan",
        ctcPrimary: "cyan",
        text: "white",
        background: "black",
      },

      fontFamily: {
        custom: ["Urbanist", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
