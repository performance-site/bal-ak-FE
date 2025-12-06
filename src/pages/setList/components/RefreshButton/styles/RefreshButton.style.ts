import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RefreshButtonContainer = styled.button`
  z-index: 2;
  position: absolute;
  bottom: 2.4rem;
  right: 2.2rem;
  cursor: pointer;
  width: 4.1rem;
  height: 4.1rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.setListRefreshbackground};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 1.8rem 0
    ${({ theme }) => theme.hexToRgba(theme.colors.background1, 0.14)};
`;

export const RefreshImg = styled.img<{ spinning: boolean }>`
  width: 1.8rem;
  height: auto;

  ${({ spinning }) =>
    spinning &&
    css`
      animation: ${rotate} 0.6s linear;
    `}
`;
