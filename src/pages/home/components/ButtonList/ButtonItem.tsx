import styled from 'styled-components';

interface ButtonItemProps {
  src: string;
  info: string;
  link: string;
}

interface ItemWrapperProps {
  src: string;
}

function ButtonItem(data: ButtonItemProps) {
  return (
    <ItemWrapper>
      <ItemImg src={data.src} />
      <ItemInfo>{data.info}</ItemInfo>
    </ItemWrapper>
  );
}

export default ButtonItem;

const ItemWrapper = styled.div`
  height: 100%;
  width: 4.2rem;
`;

const ItemImg = styled.div<ItemWrapperProps>`
  height: 4.2rem;
  width: 4.2rem;
`;

const ItemInfo = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;
