import styled from 'styled-components';

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
  background: ${({ theme }) => theme.colors.gray600};
  background-size: 1.18rem 100%;
  background-repeat: no-repeat;
`;

export const WaveBar1 = styled(WaveBar)`
  transform: scaleY(0.4);
  background-position: 0% 0%;
`;

export const WaveBar2 = styled(WaveBar)`
  transform: scaleY(0.7);
  background-position: 50% 0%;
`;

export const WaveBar3 = styled(WaveBar)`
  transform: scaleY(1);
  background-position: 100% 0%;
`;
