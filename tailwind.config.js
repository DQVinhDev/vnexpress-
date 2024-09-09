module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray-custom": "#757575", // You can name this whatever you prefer
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif", "Merriweather"],
      },
      boxShadow: {
        vne: "0px 2px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
