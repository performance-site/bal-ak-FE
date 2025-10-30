const theme = {
  colors: {
    background1: '#4800FF',
    background2: '#121212',

    white: '#FFFFFF',
    black: '#000000',

    buttonGradient1: '#886AE2',
    buttonGradient2: '#A284F6',
  },

  get gradients() {
    const checkboxGradient = `linear-gradient(98deg, rgba(136, 106, 226, 0.1) 43.66%, rgba(162, 132, 246, 0.1) 116.16%)`;
    return {
      background: `radial-gradient(182.67% 71.87% at 11.84% -40.44%, ${this.colors.background1} 0%, ${this.colors.background2} 100%)`,
      checkbox: checkboxGradient,
    };
  },
};

export default theme;
