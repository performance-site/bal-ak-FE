const theme = {
  colors: {
    background1: '#4800FF',
    background2: '#121212',

    white: '#FFFFFF',
    white2: '#FCFCFC',
    black: '#000000',

    gray100: '#E9E9E9',
    gray300: '#C4C4C4',
    gray400: '#9D9D9D',

    buttonGradient1: '#886AE2',
    buttonGradient2: '#A284F6',
  },

  get gradients() {
    const checkboxGradient = `linear-gradient(98deg, rgba(136, 106, 226, 0.1) 43.66%, rgba(162, 132, 246, 0.1) 116.16%)`;
    const showInfoGradient = `linear-gradient(180deg, rgba(123, 87, 228, 0.12) 0%, rgba(44, 31, 81, 0) 36.54%, rgba(123, 87, 228, 0.12) 100%)`;
    return {
      background: `radial-gradient(182.67% 71.87% at 11.84% -40.44%, ${this.colors.background1} 0%, ${this.colors.background2} 100%)`,
      checkbox: checkboxGradient,
      showInfo: showInfoGradient,
    };
  },
};

export default theme;
