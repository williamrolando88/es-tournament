module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', '**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cocogoose: ['COCOGOOSE', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        main: "url('../../assets/background/gaming-pattern.png')",
        program: "url('../../assets/background/5-dots.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
