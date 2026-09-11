/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        apple: {
          black: "#1D1D1F",
          gray: "#6E6E73",
          lightgray: "#F5F5F7",
          border: "#E8E8ED",
          divider: "#D2D2D7",
          blue: "#0066CC",
        },
      },
    },
  },
  plugins: [],
};
