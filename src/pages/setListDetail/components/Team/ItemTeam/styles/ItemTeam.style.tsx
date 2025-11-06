import styled from 'styled-components';

export const ItemTeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemTeamProfileImg = styled.img`
  width: 5rem;
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
