/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f7f5",
          100: "#e6ede8",
          500: "#3a7d54",
          600: "#2f6b46",
          700: "#245539",
        },
        ink: "#1d1d1f",
        sub: "#6e6e73",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
}
