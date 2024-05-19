/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "9/10": "90%",
      "full": "100%",
    },
    extend: {
      colors: {
        primary: "#228888",
        "primary-content": "#bbeeee",
        "primary-dark": "#185f5f",
        "primary-light": "#2cb1b1",

        secondary: "#000000",
        "secondary-content": "#808080",
        "secondary-dark": "#000000",
        "secondary-light": "#1a1a1a",

        background: "#eff1f1",
        foreground: "#fbfbfb",
        border: "#dde2e2",

        copy: "#232929",
        "copy-light": "#5e6e6e",
        "copy-lighter": "#849595",

        success: "#228822",
        warning: "#888822",
        error: "#882222",

        "success-content": "#bbeebb",
        "warning-content": "#eeeebb",
        "error-content": "#eebbbb"
      },
    },
  },
  plugins: [],
}