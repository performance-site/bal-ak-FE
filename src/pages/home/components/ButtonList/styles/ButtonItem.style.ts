import styled from 'styled-components';

interface ItemWrapperProps {
  $isFirst?: boolean;
}

interface ItemImgProps {
  $isFirst?: boolean;
}

export const ItemWrapper = styled.div<ItemWrapperProps>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
`;

export const ItemImg = styled.img<ItemImgProps>`
  height: 5rem;
  object-fit: contain;
  display: block;
  margin-top: ${(props) => (props.$isFirst ? '-0.4rem' : '0')};
  margin-bottom: ${(props) => (props.$isFirst ? '0.4rem' : '0')};
  transform: ${(props) => (props.$isFirst ? 'scale(1.1)' : 'scale(1)')};
`;

export const ItemInfo = styled.p`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;
