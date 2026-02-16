import styled from 'styled-components';

export const PerformenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 34.5rem;
  height: 8.1rem;
  padding: 3.2rem;
  gap: 0.2rem;
  align-self: stretch;

  position: absolute;
  top: 34.7rem;
  left: 50%;
  transform: translateX(-50%);

  border-radius: 1.8rem;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  background: ${({ theme }) =>
    `${theme.gradients.performanceBg}, ${theme.colors.blurBox}`};
  box-shadow: ${({ theme }) => theme.shadows.performanceInset};
  backdrop-filter: blur(12.5px);
`;

export const PerformenceTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray800};
`;

export const PerformenceInfo = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray800};
`;
