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
              'barcolor': '#f8f9fd',
              'schoolbg': '#ede5e3',
              'schoolicon': '#e2546e',
              'schoolbarbot': '#c3495e',
              'schoolbarmed': '#d76376',
              'schoolbarback': '#a71e38',
          },
          screens: {
              '3xl': '2560px',
          },
          width: {
              '19/20': '95%',
              '97/100': '97%',
          },
          aspectRatio: {
              'poster': '3.6'
          },
          height: {
              '50': '12.5rem'
          },
    },
  },
  plugins: [],
}

