import styled from 'styled-components';

interface SliderWrapperProps {
  $currentIndex: number;
  $imageCount: number;
}

interface SlideItemProps {
  $imageCount: number;
}

export const HeaderContainer = styled.div`
  width: 100%;
  height: 38.7rem;
  overflow: hidden;
  position: relative;
`;

export const SliderWrapper = styled.div<SliderWrapperProps>`
  display: flex;
  width: ${({ $imageCount }) => $imageCount * 100}%;
  height: 100%;
  transition: transform 0.5s ease-in-out;

  transform: ${({ $currentIndex, $imageCount }) =>
    `translateX(-${$currentIndex * (100 / $imageCount)}%)`};
`;

export const SlideItem = styled.div<SlideItemProps>`
  width: ${(props) => 100 / props.$imageCount}%;
  height: 100%;
  flex-shrink: 0;
  background-color: #f0f0f0;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
    display: block;
  }
`;
