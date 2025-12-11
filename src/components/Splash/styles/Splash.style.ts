import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const SplashContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  padding-top: 15rem;
`;

export const SplashInnerContainer = styled.div<{
  fadeState: 'fadeIn' | 'fadeOut';
}>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${({ fadeState }) =>
    fadeState === 'fadeIn'
      ? css`
          ${fadeIn} 0.5s forwards
        `
      : css`
          ${fadeOut} 0.5s forwards
        `};
`;

export const LogoImg = styled.img`
  width: 29rem;
  margin-top: 1.1rem;
`;

export const LogoP = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  line-height: 120%;
  letter-spacing: -2.5%;
  text-align: center;
`;

export const SplashP = styled(LogoP)`
  font-size: 1rem;
  font-weight: 400;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 4.6rem;
  position: absolute;
  bottom: 0;
`;

export const BottomText = styled(SplashP)<{
  index: number;
}>`
  position: absolute;
  bottom: 1.5rem;

  ${({ index }) =>
    index === 0 &&
    css`
      left: 2rem;
    `}

  ${({ index }) =>
    index === 1 &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}

  ${({ index }) =>
    index === 2 &&
    css`
      right: 2rem;
    `}
`;
