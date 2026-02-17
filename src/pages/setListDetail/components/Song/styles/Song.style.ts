import styled from 'styled-components';

export const SongContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 23.3rem;
`;

export const SongP = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.gray800};
  white-space: pre-wrap;
  text-align: center;
`;
