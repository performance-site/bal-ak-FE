import styled from 'styled-components';

interface NowPlayingContainerProps {
  $isVisible: boolean;
}

export const NowPlayingContainer = styled.div<NowPlayingContainerProps>`
  position: absolute;
  top: 114.1rem;
  width: 90%;
  max-width: 34.6rem;
  left: 50%;
  transform: translateX(-50%);
  height: 23.6rem;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateX(-50%) translateY(${({ $isVisible }) => ($isVisible ? '0' : '20px')});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;
