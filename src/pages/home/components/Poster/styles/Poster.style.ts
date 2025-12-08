import styled from 'styled-components';

interface PosterWrapperProps {
  $imageCount: number;
}

interface FadeInWrapperProps {
  $isVisible: boolean;
}

export const PosterConatiner = styled.div`
  position: absolute;
  top: 71.8rem;
  width: 100%;
`;

export const FadeInWrapper = styled.div<FadeInWrapperProps>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0.3)};
  transform: translateY(${({ $isVisible }) => ($isVisible ? '0' : '10px')});
  transition: opacity 1s ease-out, transform 1s ease-out;
`;

export const PosterSlider = styled.div`
  padding: 0 2.4rem;
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
  width: 22rem;
  height: 31.1rem;
  border-radius: 8px;
  flex-shrink: 0;
  scroll-snap-align: center;
  background-color: #f0f0f0;
  cursor: pointer;
  overflow: hidden;

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
  z-index: 1000;
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
