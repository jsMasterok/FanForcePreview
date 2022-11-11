/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.htm"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      // Gradients
      "gradient-red-from": "#FF8A9B",
      "gradient-red-to": "#FF4D67",
      "gradient-blue-from": "#6F9EFF",
      "gradient-blue-to": "#246BFD",
      "gradient-green-from": "#73FFA6",
      "gradient-green-to": "#4ADE80",
      "gradient-yellow-from": "#FFE580",
      "gradient-yellow-to": "#FACC15",
      //
      "primary-500": "#F9343A",
      "primary-400": "#F34A55",
      "primary-300": "#E86E76",
      "primary-200": "#F1979D",
      "primary-100": "#FFCCD4",
      "secondary-500": "#FFD300",
      "secondary-400": "#FFDC33",
      "secondary-300": "#FFE566",
      "secondary-200": "#FFED99",
      "secondary-100": "#FFFBE6",
      // Statuses
      succes: "#4ADE80",
      info: "#246BFD",
      warning: "#FACC15",
      error: "#F75555",
      disabled: "#D8D8D8",
      "disabled-button": "#E98090",
      //
      // Gray-scale
      "grayscale-900": "#212121",
      "grayscale-800": "#424242",
      "grayscale-700": "#616161",
      "grayscale-600": "#757575",
      "grayscale-500": "#9E9E9E",
      "grayscale-400": "#BDBDBD",
      "grayscale-300": "#E0E0E0",
      "grayscale-200": "#EEEEEE",
      "grayscale-100": "#F5F5F5",
      "grayscale-50": "#FAFAFA",
      //
      // dark
      "dark-1": "#1A1B22",
      "dark-2": "#23252F",
      "dark-3": "#2A2B39",
      //
      // Others
      white: "#FFFFFF",
      black: "#000000",
      red: "#F54336",
      pink: "#EA1E61",
      purple: "#9D28AC",
      "deep-purple": "#673AB3",
      indigo: "#3F51B2",
      blue: "#1A96F0",
      "light-blue": "#00A9F1",
      cyan: "#00BCD3",
      teal: "#009689",
      green: "#4AAF57",
      "light-green": "#8BC255",
      lime: "#8BC255",
      yellow: "#FFEB4F",
      amber: "#FFC02D",
      orange: "#FF981F",
      "deep-orange": "#FF5726",
      brown: "#7A5548",
      "blue-gray": "#607D8A",
      //
      // Colors Missing in Palitra
      "card-shadow-2": "#04060F0D",
      "button-shadow-1": "#246BFD40",
      "gray-id-card": "#C4C4C4",
      "mobile-nav-bg": "#F6F4F4",
      "mobile-nav-text": "#9DB2CE",
      //
    },
    fontFamily: {
      urbanist: ["Urbanist", "sans-serif"],
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      spacing: {
        85: "21rem",
        90: "23.75rem",
        110: "27.5rem",
      },
      borderRadius: {
        "4xl": "2.75rem",
        "5xl": "2rem",
        "6xl": "6rem",
      },
    },
  },
  plugins: [],
};
