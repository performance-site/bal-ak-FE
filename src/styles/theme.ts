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
  white20: '#FCFCFC33',

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
  graySub: '#7C7C7C',

  blurBox: '#756A7F33',
  dropShadow: '#0400FA0F',
};

const gradients = {
  linear1: `linear-gradient(0deg, rgba(0, 0, 0, 0.07) 0%, rgba(0, 0, 0, 0.07) 100%), linear-gradient(180deg, rgba(187, 187, 187, 0.2) 0%, rgba(34, 23, 41, 0.42) 100%)`,

  performanceBg: `
    linear-gradient(0deg, rgba(25, 37, 73, 0.14) 0.83%, rgba(216, 216, 216, 0.14) 14.99%, rgba(216, 216, 216, 0.14) 27.23%, rgba(137, 134, 134, 0.14) 52.34%, rgba(241, 241, 241, 0.14) 66.67%, rgba(133, 129, 129, 0.14) 85.19%),
    linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%),
    linear-gradient(0deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.42) 100%)
  `,
};

const shadows = {
  performanceInset: `
    1px 1px 1px -2px #969696 inset,
    -1px -1px 1px -2px #9c9c9c inset,
    0 4px 18px 0 rgba(0, 0, 0, 0.04)
  `,
  poster: `12px 12px 28px 0 rgba(4, 0, 250, 0.04);`,
  glassBlur: `blur(2.5rem)`,
  // default: `0 0.4rem 0.4rem 0 ${hexToRgba(colors.black, 0.25)}`,
  listBar: `0 0 4px rgba(186, 144, 255, 0.18)`,
  album: `0 4px 4px 0 rgba(0, 0, 0, 0.25)`,
  youtube: `8px 8px 18px 0 rgba(123, 87, 228, 0.06)`,
};

const theme = {
  colors,
  gradients,
  hexToRgba,
  shadows,
};

export default theme;
