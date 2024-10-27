/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0c0c1d"
        },
        rebeccapurple: {
          DEFAULT: "#663399"
        },
        backgroundText: {
          DEFAULT: "#ffffff09"
        },
        black: '#000000',
        ashBlack: '#222',
        white: '#fafafa',
        sky: '#00ccff',
        background: '#1300ff',
        accent: '#fafafa',
      },
      height: {
        'navbar': "6rem"
      },
      maxWidth: {
        'wrapper': "85rem"
      },
      backgroundImage: {
        hero: "linear-gradient(180deg, #0c0c1d, #111132)",
        parallexDark: "linear-gradient(180deg, #111132, #0c0c1d)",
        parallexLight: "linear-gradient(180deg, #111132, #505064)",
        mountains: "url('/src/assets/mountains.png')",
        planets: "url('/src/assets/planets.png')",
        stars: "url('/src/assets/stars.png')",
        sun: "url('/src/assets/sun.png')",
      },
      fontSize: {
        'protfolio-name': ["30px", {
          'letter-spacing': '10px'
        }],
        'portfolio-title': ["5rem"]
      }
    },
  },
  plugins: [],
}