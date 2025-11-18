import styled from 'styled-components';

export const ItemTeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemTeamProfileDiv = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.whiteOpacity10};
  box-shadow: ${({ theme }) => `
    ${theme.shadows.blueSoft},
    ${theme.shadows.insetLight},
    ${theme.shadows.insetDark}
  `};
  backdrop-filter: ${({ theme }) => theme.shadows.glassBlur};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemTeamProfileImg = styled.img`
  width: 2.8rem;
  height: auto;
`;

export const ItemTeamP = styled.p`
  margin-top: 1.2rem;
  white-space: nowrap;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.gray7};
`;
