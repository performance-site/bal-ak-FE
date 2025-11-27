import styled from 'styled-components';

interface PosterWrapperProps {
  $imageCount: number;
}

interface PosterItemProps {
  $imageURL: string;
  $imageCount: number;
}

export const PosterConatiner = styled.div`
  position: absolute;
  top: 71.8rem;
  width: 100%;
`;

export const PosterSlider = styled.div`
  padding: 0 2.4rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

export const PosterWrapper = styled.div<PosterWrapperProps>`
  display: flex;
  gap: 1.2rem;
  width: fit-content;
  height: 100%;
`;

export const PosterItem = styled.div<PosterItemProps>`
  width: 22rem;
  height: 31.1rem;
  border-radius: 8px;
  flex-shrink: 0;
  scroll-snap-align: center;
  background-image: url(${(props) => props.$imageURL});
  background-size: cover;
  background-position: center;
  background-color: #f0f0f0;
`;
