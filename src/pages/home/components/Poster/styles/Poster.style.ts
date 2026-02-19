import styled from 'styled-components';
import theme from '../../../../../styles/theme';

interface PosterWrapperProps {
  $imageCount: number;
}

interface FadeInWrapperProps {
  $isVisible: boolean;
}

export const PosterConatiner = styled.div`
  width: 100%;
  padding-left: 2.4rem;
  margin-top: 2.4rem;
`;

export const FadeInWrapper = styled.div<FadeInWrapperProps>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0.3)};
  transform: translateY(${({ $isVisible }) => ($isVisible ? '0' : '10px')});
  transition:
    opacity 1s ease-out,
    transform 1s ease-out;
`;

export const PosterSlider = styled.div`
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-snap-type: x mandatory;
`;

export const PosterWrapper = styled.div<PosterWrapperProps>`
  display: flex;
  gap: 1.2rem;
  width: fit-content;
  height: 100%;
`;

export const PosterItem = styled.div`
  width: 33.698rem;
  height: 47.688rem;
  border-radius: 2.859rem;
  flex-shrink: 0;
  scroll-snap-align: center;
  background-color: #f0f0f0;
  cursor: pointer;
  overflow: hidden;
  border: 1.5px solid ${theme.colors.gray200};
  box-shadow: ${theme.shadows.poster};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ModalImage = styled.img`
  width: 90%;
  max-width: 373px;
  max-height: 90%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  object-fit: contain;
`;
