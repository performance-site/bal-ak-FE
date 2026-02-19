import styled from 'styled-components';

export const ItemTeamContainer = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ItemTeamProfileDiv = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => `
    ${theme.shadows.poster},
    ${theme.shadows.poster},
    ${theme.shadows.poster}
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
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1.2rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.gray800};
  text-align: left;
`;
