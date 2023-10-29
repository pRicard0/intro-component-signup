/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      boxShadow: {
        'card-shadow': '0px 8px 0px hsl(0deg 0% 0% / 15%)',
        'claim-shadow': '0px 5px 0px hsl(154 59% 45% / 1)'
      },

      borderWidth: {
        '1': '1px'
      },
    
      colors: {
        'Red': 'hsl(0, 100%, 74%)',
        'Green': 'hsl(154, 59%, 51%)',

        'Blue': 'hsl(248, 32%, 49%)',

        'Dark-Blue': 'hsl(249, 10%, 26%)',
        'Grayish-Blue': 'hsl(246, 25%, 77%)',
      },

      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },

      backgroundImage: {
        'background': "url('./src/assets/images/bg-intro-desktop.png')"
      }
    },
  },
  plugins: [],
}

