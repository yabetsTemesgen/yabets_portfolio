import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary:{
          light: "#FFFFFF",
          DEFAULT: "#1D1B25",
          dark: "#0A0624"
        },
        secondary: {
          light: "#FFFFFF",
          DEFAULT: "#FFBD59",
          dark: "#000000"
        }
      }
    },
  },
  plugins: [],
};
export default config;
