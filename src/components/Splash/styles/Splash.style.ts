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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div<{ fadeState: 'fadeIn' | 'fadeOut' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ fadeState }) =>
    fadeState === 'fadeIn'
      ? css`
          animation: ${fadeIn} 0.5s forwards;
        `
      : css`
          animation: ${fadeOut} 0.5s forwards;
        `}
`;

export const LogoImg = styled.img`
  width: 14.1rem;
  height: 14.1rem;
  opacity: 0.8;
`;

export const LogoP = styled.p`
  font-size: 3.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray1};
  position: absolute;
  white-space: nowrap;
`;
