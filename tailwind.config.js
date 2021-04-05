module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    appearance: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    fill: [],
    extend: {},
  },
  plugins: [
    require('tailwindcss-transforms'),
    require('tailwindcss-transitions'),
    require('tailwindcss-border-gradients'),
  ],
}
