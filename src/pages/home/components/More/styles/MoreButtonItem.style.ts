import styled from 'styled-components';
import { ItemWrapperProps } from '../MoreButtonItem';

interface ItemImgProps extends ItemWrapperProps {
  $iconWidth: string;
  $iconHeight: string;
}

export const ItemWrapper = styled.div`
  min-width: 5.2rem;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.8rem;
  align-items: center;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.95);
  }
`;

export const ItemImg = styled.img<ItemImgProps>`
  width: ${(props) => props.$iconWidth};
  height: ${(props) => props.$iconHeight};
  display: block;
  cursor: pointer;
`;

export const ItemInfo = styled.p`
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
`;
