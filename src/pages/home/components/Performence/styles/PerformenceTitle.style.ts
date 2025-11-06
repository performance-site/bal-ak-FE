import styled from 'styled-components';

export const PerformenceTitleContainer = styled.div`
  width: 100%;
  height: 8.1rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(25px);
  justify-content: center;
  align-items: center;
  box-shadow:
    inset 0px 0px 1px 2px rgba(170, 170, 170, 1),
    inset 0px 0px 1px 2px rgba(150, 150, 150, 1);
`;

export const PerformenceTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
`;

export const PerformenceSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`;
