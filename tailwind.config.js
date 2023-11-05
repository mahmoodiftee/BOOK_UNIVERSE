/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        colour: {
          50: '#ff981a',
        },
      },
      fontSize: {
        'h1': '2rem',
        'p': '1rem',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "forest"],
  },
};
