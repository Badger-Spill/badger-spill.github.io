/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // Set font family
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      // Set theme colors
      colors: {
        primary: colors.cyan,
        secondary: colors.zinc,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
