/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1B1B1B",
        light: "#FEFEFA",
        primary: "#CBA135",
        neutral: "#555555",
      },
    },
  },
  plugins: [],
};
