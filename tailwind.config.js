/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'col-primary': '#0C0C0D',
      'col-secondary': '#ADA8C3',
      'col-tertiary': '#EDE5F3',
      'col-accent': '#D9D9D9',
      'primary': {
        50 : '#FBF5FF',
        100: '#F5E8FF',
        200: '#ECD5FF',
        300: '#D7A4FE',
        400: '#CA84FC',
        500: '#B555F7',
        600: '#A233EA',
        700: '#8C22CE',
        800: '#7621A8',
        900: '#611C87',
        950: '#420764',
      },
      'secondary': {
        50 : '#FEF1FB',
        100: '#FEE5F8',
        200: '#FECCF2',
        300: '#FF87E0',
        400: '#FE68D4',
        500: '#F83CBE',
        600: '#E81A9F',
        700: '#CA0C81',
        800: '#A70D6A',
        900: '#8B1059',
        950: '#550233',
      },
      'indigo':{
        400 :'#8895FE',
        800 :'#3B309D',
      },
      'blue':{
        200 :'#BFDFFF',
        800 :'',
      },
      'gray':{
        700 :'#383F4B',
      },
      'slate':{
        700 :'#353A58',
      },
      'teal':{
        200 :'#97FFE6',
      },
      'violet':{
        200 : '#DCD2F0'
      },
    },
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}