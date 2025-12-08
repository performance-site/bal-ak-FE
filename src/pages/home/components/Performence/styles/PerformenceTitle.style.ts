import styled, { keyframes } from 'styled-components';
import theme from '../../../../../styles/theme';

const shimmer = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow:
      0 0 6px rgba(255, 255, 255, 0.2),
      0 0 12px rgba(162, 132, 246, 0.12),
      0 0 18px rgba(162, 132, 246, 0.08);
  }
  50% {
    text-shadow:
      0 0 10px rgba(255, 255, 255, 0.28),
      0 0 16px rgba(162, 132, 246, 0.18),
      0 0 24px rgba(162, 132, 246, 0.12);
  }
`;

export const PerformenceTitleContainer = styled.div`
  width: 100%;
  height: 8.1rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(12.5px);
  justify-content: center;
  align-items: center;
  box-shadow:
    1px 1px 1px 0px #969696 inset,
    -1px -1px 1px 0px #aaa inset,
    0 4px 12px 0 rgba(4, 0, 250, 0.06);
`;

export const PerformenceTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.88) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.88) 100%
  );
  background-size: 200% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation:
    ${shimmer} 6s ease-in-out infinite,
    ${glow} 5s ease-in-out infinite;
  filter: brightness(1.05);
`;

export const PerformenceSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${theme.colors.gray2};
`;
