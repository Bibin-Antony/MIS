/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D3D3D3",
        secondary: "#580B57",
        tertiary: "#FFFFFF",
        ctcPrimary: "#580B57",
        ctcSecondary: "#D3D3D3",
        textPrimary: "#ffffff",
        textSecondary: "#580B57",
      },

      fontFamily: {
        custom: ["Urbanist", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      translate: ['hover'],
    }
    },
<<<<<<< HEAD
=======
  },
>>>>>>> b4beb81d44eb4e02b6692f5b6fea75c2ae8f44c7
  plugins: [require("flowbite/plugin")],
};
