module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('./images/rectangles.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
