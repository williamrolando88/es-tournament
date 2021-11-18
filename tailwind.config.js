module.exports = {
  purge: ['./src/**/*.html', './**/*.js', '**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cocogoose: ['COCOGOOSE', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        main: "url('../../assets/img/bg-main.png')",
        program: "url('../../assets/img/bg-program.png')",
        feature: "url('../../assets/img/bg-feature.jpg')",
        title: "url('../../assets/img/bg-title.jpg')",
        partners: "url('../../assets/img/bg-partners.png')",
        tournament1: "url('../../assets/img/bg-tournament1.jpg')",
        tournament2: "url('../../assets/img/bg-tournament2.jpeg')",
        tournament3: "url('../../assets/img/bg-tournament3.jpg')",
      },
      colors: {
        primary: {
          black: '#272a31',
          orange: '#ec5242',
          gray: '#d3d3d3',
        },
      },
      backgroundSize: {
        '50c': '50% 50%',
      },
      spacing: {
        'x10%': '0 10%',
        '20%': '20%',
        '10%': '10%',
        '5%': '5%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
