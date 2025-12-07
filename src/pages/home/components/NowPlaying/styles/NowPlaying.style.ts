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
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0.3)};
  transform: translateX(-50%) translateY(${({ $isVisible }) => ($isVisible ? '0' : '10px')});
  transition: opacity 1s ease-out, transform 1s ease-out;
`;
