/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      font: {
        primaryfont: "poppins-regular",
        secondary: "raleway",
        discription: "raleway-light",
      },

      colors: {
        background: "#01124A",
      },
      textColor: {
        primary: "#f5ce02",
        secondary: "#e4e4e4",
      },
    },
  },
  plugins: [],
}
