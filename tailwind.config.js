module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('./images/rectangles.jpg')",
        'celiac-tackboard-image': "url('./images/celiac-tackboard.png')",
        'on-hand-cooking-image': "url('./images/on-hand-cooking.png')",
        'weather-dashboard-image': "url('./images/weather-dashboard.png')",
        'tech-blog-image': "url('./images/tech-blog-image.png')",
        'readme-generator-image': "url('./images/README-generator.png')",
        'code-quiz-image': "url('./images/code-quiz.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
