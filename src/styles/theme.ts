const theme = {
  colors: {
    background1: '#4800FF',
    background2: '#121212',
    background3: '#321857',

    mainColor: '#6A00FF',
    errorColor: '#ff027a',

    borderColor: '#886ae2',
    inputGradient1: '#886ae233',
    inputGradient2: '#A284F633',

    buttonGradient1: '#886ae2',
    buttonGradient2: '#A284F6',
    buttonGradient3: '#886ae21A',
    buttonGradient4: '#A284F61A',

    white: '#FCFCFC',
    black: '#111111',
    gray: '#7c7c7c',
    gray2: '#b3b3b3',

    gray100: '#E9E9E9',
    gray200: '#D9D9D9',
    gray300: '#C4C4C4',
    gray400: '#9D9D9D',
    gray500: '#767676',
    gray600: '#555555',
    gray700: '#505050',
    gray800: '#262626',
  },

  get gradients() {
    const topGradient = `radial-gradient(300% 150% at -30% -50%, ${this.colors.background1} 0%, transparent 75%)`;
    const bottomGradient = `radial-gradient(180% 50% at 100% 60%, ${this.colors.background3} 0%, transparent 75%)`;

    const inputGradient = `linear-gradient(77deg, ${this.colors.inputGradient1} 46%, ${this.colors.inputGradient2} 100%)`;
    const buttonFullGradient = `linear-gradient(56deg, ${this.colors.buttonGradient1} 56%, ${this.colors.buttonGradient2} 100%)`;
    const buttonDisabledGradient = `linear-gradient(56deg, ${this.colors.buttonGradient3} 56%, ${this.colors.buttonGradient4} 100%)`;

    const checkboxGradient = `linear-gradient(98deg, rgba(136, 106, 226, 0.1) 43.66%, rgba(162, 132, 246, 0.1) 116.16%)`;
    const showInfoGradient = `linear-gradient(180deg, rgba(123, 87, 228, 0.12) 0%, rgba(44, 31, 81, 0) 36.54%, rgba(123, 87, 228, 0.12) 100%)`;
    const inputBoxGradient = `linear-gradient(98deg, rgba(136, 106, 226, 0.10) 43.66%, rgba(162, 132, 246, 0.10) 116.16%)`;
    const clickboxGradient = `linear-gradient(98deg, #886ae2 43.66%, #a284f6 116.16%)`;
    const submitMoodalGradient = `linear-gradient(180deg, rgba(233, 233, 233, 0.24) 0%, rgba(255, 255, 255, 0.16) 100%), linear-gradient(180deg, rgba(211, 96, 229, 0.24) 0%, rgba(69, 75, 249, 0.24) 100%), linear-gradient(180deg, rgba(211, 96, 229, 0.08) 0%, rgba(69, 75, 249, 0.08) 100%)`;

    return {
      background: `${bottomGradient}, ${topGradient}, ${this.colors.background2}`,
      input: inputGradient,
      buttonFull: buttonFullGradient,
      buttonDisabled: buttonDisabledGradient,
      checkbox: checkboxGradient,
      showInfo: showInfoGradient,
      inputBox: inputBoxGradient,
      clickbox: clickboxGradient,
      submitModal: submitMoodalGradient,
    };
  },
};

export default theme;
