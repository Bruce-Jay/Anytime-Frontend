/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'fold': '280px',
            'phone': '400px',
            ...defaultTheme.screens,
        },
        fontSize: {
            bar: ['0.8rem', '1rem'],
            ssb: ['0.9rem', '1rem'],
            namae: ['1.2rem', '2.5rem'],
            mny: ['1.1rem', '1.5rem'],
            scr: ['0.7rem', '1rem'],
      },
      extend: {
          colors: {
            'ecnu': '#b4364b',
          },
          screens: {
              '3xl': '2560px',
          },
    },
  },
  plugins: [],
}

