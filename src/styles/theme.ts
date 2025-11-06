const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const colors = {
  background1: '#4800FF',
  background2: '#121212',
  background3: '#321857',

  gray1: '#FCFCFC',
  gray2: '#C4C4C4',
  gray3: '#767676',
  gray4: '#B3B3B3',
  gray5: '#505050',
  gray6: '#E9E9E9',
  gray7: '#D9D9D9',

  purple1: '#886AE2',
  purple2: '#A284F6',
  purple3: '#7150D0',
  purple4: '#AE92FF',
  purple5: '#6A00FF',
  purple6: '#454BF9',
  purple7: '#535DCD',
  purple8: '#7B57E4',

  pink1: '#D360E5',

  white: '#FFFFFF',
  black: '#000000',
};

const gradients = {
  get background() {
    const topGradient = `radial-gradient(300% 150% at -30% -50%, ${colors.background1} 0%, transparent 75%)`;
    const bottomGradient = `radial-gradient(180% 50% at 100% 60%, ${colors.background3} 0%, transparent 75%)`;
    return `${bottomGradient}, ${topGradient}, ${colors.background2}`;
  },

  setListPageTitleBackground: `linear-gradient(97.62deg, ${hexToRgba(colors.purple1, 0.5)} 43.66%, ${hexToRgba(colors.purple2, 0.5)} 116.16%)`,
  setListPageTitleBorder: `linear-gradient(97.62deg, ${colors.purple1} 43.66%, ${colors.purple2} 116.16%)`,
  setListRefreshbackground: `linear-gradient(38.23deg, ${colors.purple3} 15.58%, ${colors.purple4} 83%)`,
  setListItemBackground: `linear-gradient(180deg, ${colors.pink1} 0%, ${colors.purple6} 100%)`,
  setListItemWaveBackground: `linear-gradient(90deg, ${colors.pink1} 0%, ${colors.purple6} 100%)`,

  setListItemDownloadBackground: `${colors.gray4}`,
  setListItemTitleBackground: `${colors.gray1}`,
};

const shadows = {
  default: `0 0.4rem 0.4rem 0 ${hexToRgba(colors.black, 0.25)}`,
  purple: `0.8rem 0.8rem 1.8rem 0 ${hexToRgba(colors.purple7, 0.08)}`,
  purple2: `0.8rem 0.8rem 1.8rem 0 ${hexToRgba(colors.purple8, 0.06)}`,
};

const theme = {
  colors,
  gradients,
  hexToRgba,
  shadows,
};

export default theme;
