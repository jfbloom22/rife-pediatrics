import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-sky-blue": "#55aac8",
        indigo: "#3c1c7f",
        black: "black",
        white: "white",
        "dim-grey": "#5f4f4f",
        "indian-red": "#966565",
        "dark-slate-grey": "#414141",
        gainsboro: "#ddd",
        "olive-drab": "#66a901",
        green: "#4b7a03",
        "dark-cyan": "#0295a6",
        primary: "#55aac8",
        secondary: "#3c1c7f",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
