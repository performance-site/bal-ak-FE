import styled from 'styled-components';
import theme from '../../../../../styles/theme';

interface ItemWrapperProps {
  $isFirst?: boolean;
}

interface ItemImgProps {
  $isFirst?: boolean;
}

export const ItemWrapper = styled.div<ItemWrapperProps>`
  width: 7.4rem;
  height: 9rem;
  background-color: ${theme.colors.white};
  border: 0.75px solid ${theme.colors.gray700};
  border-radius: 1.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  cursor: pointer;
  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.95);
  }
`;

export const ItemImg = styled.img<ItemImgProps>`
  width: 4.3rem;
  height: 4.4rem;
  object-fit: contain;
  display: block;
`;

export const ItemInfo = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${theme.colors.black};
`;
