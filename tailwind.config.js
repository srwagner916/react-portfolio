module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': ['Mate SC'],
      'sans': ['Open Sans']
    },
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('./assets/images/hero-image.jpg')",
        'celiac-tackboard-image': "url('./assets/images/celiac-tackboard.png')",
        'on-hand-cooking-image': "url('./assets/images/on-hand-cooking.png')",
        'weather-dashboard-image': "url('./assets/images/weather-dashboard.png')",
        'tech-blog-image': "url('./assets/images/tech-blog-image.png')",
        'readme-generator-image': "url('./assets/images/README-generator.png')",
        'code-quiz-image': "url('./assets/images/code-quiz.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
