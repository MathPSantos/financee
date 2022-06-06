module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FCFCFC",
        pink: {
          200: "#FAD5DE",
          500: "#F23764",
          700: "#D82750",
        },
        brown: {
          300: "#655679",
          500: "#4B272F",
        },
        purple: {
          200: "#DAD3FA",
          500: "#5434F6",
        },
      },
      fontFamily: {
        display: ["Sora", "ui-system", "sans-serif"],
        body: ["Inter", "ui-system", "sans-serif"],
      },
      screen: {
        lg: "1152px",
      },
    },
  },
  plugins: [],
};
