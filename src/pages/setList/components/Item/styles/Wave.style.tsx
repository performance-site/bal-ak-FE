import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    transform: scaleY(0.5);
  }
  50% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0.5);
  }
`;

export const WaveContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: flex-end;
  justify-content: center;
`;

const WaveBar = styled.div`
  width: 0.204rem;
  height: 1.165rem;
  transform-origin: bottom;
  animation: ${waveAnimation} 1s ease-in-out infinite;
  background: ${({ theme }) => theme.gradients.setListItemWaveBackground};
  background-size: 1.18rem 100%;
  background-repeat: no-repeat;
`;

export const WaveBar1 = styled(WaveBar)`
  animation-delay: 0s;
  transform: scaleY(0.4);
  background-position: 0% 0%;
`;

export const WaveBar2 = styled(WaveBar)`
  animation-delay: 0.15s;
  transform: scaleY(0.7);
  background-position: 50% 0%;
`;

export const WaveBar3 = styled(WaveBar)`
  animation-delay: 0.3s;
  transform: scaleY(1);
  background-position: 100% 0%;
`;
