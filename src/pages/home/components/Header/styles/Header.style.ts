import styled from 'styled-components';

interface SliderWrapperProps {
  $currentIndex: number;
  $imageCount: number;
}

interface SlideItemProps {
  $imageURL: string;
  $imageCount: number;
}

export const HeaderContainer = styled.div`
  width: 100%;
  height: 38.7rem;
  overflow: hidden;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  position: relative;
`;

export const SliderWrapper = styled.div<SliderWrapperProps>`
  display: flex;
  width: ${(props) => props.$imageCount * 100}%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(
    ${(props) => -props.$currentIndex * (100 / props.$imageCount)}%
  );
`;

export const SlideItem = styled.div<SlideItemProps>`
  width: ${(props) => 100 / props.$imageCount}%;
  height: 100%;
  flex-shrink: 0;
  background-image: url(${(props) => props.$imageURL});
  background-size: cover;
  background-position: center;
  background-color: #f0f0f0;
`;
