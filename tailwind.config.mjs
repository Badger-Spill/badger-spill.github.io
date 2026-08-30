/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // Set font family
        fontFamily: {
          sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
          display: ["Fredoka", ...defaultTheme.fontFamily.sans],
        },
        typography: {
      DEFAULT: {
      css: {
      'h1, h2, h3, h4': {
        fontFamily: 'Fredoka, sans-serif',
      },
    },
  },
},
      // Set theme colors
      colors: {
        primary: {
          200: '#a8c6e0',
          400: '#43729a',
          600: '#2c4f6b',
          700: '#1f3a4f',
        },
        secondary: colors.zinc,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

