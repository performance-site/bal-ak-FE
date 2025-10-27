const theme = {
  colors: {
    background1: '#4800FF',
    background2: '#121212',

    white: '#FFFFFF',
    black: '#000000',
  },

  get gradients() {
    return {
      background: `radial-gradient(182.67% 71.87% at 11.84% -40.44%, ${this.colors.background1} 0%, ${this.colors.background2} 100%)`,
    };
  },
};

export default theme;
