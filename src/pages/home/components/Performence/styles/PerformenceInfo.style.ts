import styled from 'styled-components';

export const PerformenceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const PerformenceInfo = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.white3}; 
`;
