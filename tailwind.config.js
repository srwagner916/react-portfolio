module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      'serif': ['Mate SC'],
      'sans': ['Open Sans']
    },
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('./images/hero-image.jpg')",
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
  plugins: [
    require('@tailwindcss/forms')
  ],
}
