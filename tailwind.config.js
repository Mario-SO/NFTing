/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '8xl': '8rem',
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: ["cyberpunk"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}
