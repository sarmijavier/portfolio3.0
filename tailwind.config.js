const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
      "blue": {
        "50": "#1E3040",
      },
      "white": {
        "50": "#F8FAFB"
      },
      "orange": {
        "50": "#D06141"
      }
    },
}


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors:colors,
  },
  plugins: [],
}