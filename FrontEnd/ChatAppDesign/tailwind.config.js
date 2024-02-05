/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'chatapp': "#151d2f",
      "title": "#FFF",
      "lightPurple": "#2d3250",
      "orange": "#f9b17a",
      "lightPink": "#676f9d",
      "black": "#000000"
    },
    fontFamily: {
      "Raleway": "Raleway, sans-serif",
    },
    extend: {},
  },
  plugins: [],
}