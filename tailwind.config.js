/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4ee0f1",
        orange: "#fa442c",
        articleCard: "#0b2c53",
      },
      padding: {
        secPadding: "4rem",
      },
    },
  },
  plugins: [],
};
