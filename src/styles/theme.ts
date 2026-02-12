const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const colors = {
  background: '#FFFFFF',

  white: '#FCFCFC',
  white10: '#FCFCFC1A',

  black: '#111111',
  black10: '#1111111A',

  red: '#FF2B2B',

  gray800: '#1B1B1B',
  gray700: '#505050',
  gray600: '#555555',
  gray500: '#767676',
  gray400: '#9D9D9D',
  gray300: '#C4C4C4',
  gray200: '#D9D9D9',
  gray100: '#E9E9E9',

  blurBox: '#756A7F33',
  dropShadow: '#0400FA0F',

  // 아래는 모두 제거 예정
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
  gray8: '#9D9D9D',
  gray9: '#7C7C7C',
  gray10: '#555555',

  purple1: '#886AE2',
  purple2: '#A284F6',
  purple3: '#7150D0',
  purple4: '#AE92FF',
  purple5: '#6A00FF',
  purple6: '#454BF9',
  purple7: '#535DCD',
  purple8: '#7B57E4',

  pink1: '#D360E5',

  white2: '#F5F5F5',
  white3: '#E0E0E0',
};

const gradients = {
  // 아래는 모두 제거 예정
  get background() {
    const topGradient = `radial-gradient(300% 150% at -30% -50%, ${colors.background1} 0%, transparent 75%)`;
    const bottomGradient = `radial-gradient(180% 50% at 100% 60%, ${colors.background3} 0%, transparent 75%)`;
    return `${bottomGradient}, ${topGradient}, ${colors.background2}`;
  },

  inputbox: `linear-gradient(98deg, rgba(136, 106, 226, 0.10) 43.66%, rgba(162, 132, 246, 0.10) 116.16%)`,
  checkbox: `linear-gradient(98deg, rgba(136, 106, 226, 0.1) 44%, rgba(162, 132, 246, 0.1) 116%)`,
  checkedbox: `linear-gradient(38deg, rgba(113, 80, 208, 0.56) 15.58%, rgba(174, 146, 255, 0.56) 83%)`,
  clickbox: `linear-gradient(98deg, ${colors.purple1} 44%, ${colors.purple2} 116%)`,
  submitModal: `linear-gradient(180deg, rgba(233,233,233,0.24) 0%, rgba(255,255,255,0.16) 100%), 
                linear-gradient(180deg, rgba(211,96,229,0.24) 0%, rgba(69,75,249,0.24) 100%), 
                linear-gradient(180deg, rgba(211,96,229,0.08) 0%, rgba(69,75,249,0.08) 100%)`,
  showInfo: `linear-gradient(180deg, rgba(123, 87, 228, 0.12) 0%, rgba(44, 31, 81, 0) 36.54%, rgba(123, 87, 228, 0.12) 100%)`,
  toast: `linear-gradient(180deg, rgba(233,233,233,0.24) 0%, rgba(255,255,255,0.16) 100%), 
                linear-gradient(180deg, rgba(211,96,229,0.54) 0%, rgba(69,75,249,0.54) 100%), 
                linear-gradient(180deg, rgba(211,96,229,0.54) 0%, rgba(69,75,249,0.54) 100%)`,

  setListPageTitleBackground: `linear-gradient(97.62deg, ${hexToRgba(colors.purple1, 0.5)} 43.66%, ${hexToRgba(colors.purple2, 0.5)} 116.16%)`,
  setListPageTitleBorder: `linear-gradient(97.62deg, ${colors.purple1} 43.66%, ${colors.purple2} 116.16%)`,
  setListRefreshbackground: `linear-gradient(38.23deg, ${colors.purple3} 15.58%, ${colors.purple4} 83%)`,
  setListItemBackground: `linear-gradient(180deg, ${colors.pink1} 0%, ${colors.purple6} 100%)`,
  setListItemWaveBackground: `linear-gradient(90deg, ${colors.pink1} 0%, ${colors.purple6} 100%)`,

  setListItemDownloadBackground: `${colors.gray4}`,
  setListItemTitleBackground: `${colors.gray1}`,
  whiteOpacity10: hexToRgba(colors.white, 0.1),
};

const shadows = {
  // 아래는 모두 제거 예정
  default: `0 0.4rem 0.4rem 0 ${hexToRgba(colors.black, 0.25)}`,
  purple: `0.8rem 0.8rem 1.8rem 0 ${hexToRgba(colors.purple7, 0.08)}`,
  purple2: `0.8rem 0.8rem 1.8rem 0 ${hexToRgba(colors.purple8, 0.06)}`,

  blueSoft: `0 0.4rem 1.2rem 0 ${hexToRgba(colors.purple6, 0.06)}`,
  glassBlur: `blur(2.5rem)`,
  insetLight: `-0.1rem -0.1rem 0.3rem -0.2rem ${hexToRgba(colors.gray7, 0.8)} inset`,
  insetDark: `0.1rem 0.1rem 0.3rem -0.2rem ${hexToRgba(colors.gray8, 0.8)} inset`,
};

const theme = {
  colors,
  gradients,
  hexToRgba,
  shadows,
};

export default theme;
