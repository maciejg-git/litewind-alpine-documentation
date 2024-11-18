const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_includes/**/*.{html,md,liquid}", "./components/**/*.{html,md,liquid}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
        secondary: colors.gray,
        info: colors.blue,
        warn: colors.yellow,
        success: colors.green,
        danger: colors.red,
        dark: colors.neutral,
        light: colors.white,
        text: colors.gray,
      }
    },
  },
  plugins: [],
}

