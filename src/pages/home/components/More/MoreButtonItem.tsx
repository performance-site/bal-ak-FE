import styled from 'styled-components';
import instagramImg from '../../../../assets/images/home/More/INSTAGRAM.svg';
import menuImg from '../../../../assets/images/home/More/Menu.png';
import youtubeImg from '../../../../assets/images/home/More/YOUTUBE.svg';

interface ButtonItemProps {
  type: string;
  name: string;
  url: string;
}

interface ItemWrapperProps {
  src: string;
}

interface ItemImgProps extends ItemWrapperProps {
  $iconWidth: string;
  $iconHeight: string;
}

const converter = (type: string) => {
  switch (type.toUpperCase()) {
    case 'INSTAGRAM':
      return instagramImg;
    case 'YOUTUBE':
      return youtubeImg;
    case 'GOODS':
      return menuImg;
    case 'EVENT_NOTICE':
      return menuImg;
    default:
      return '';
  }
};

const ICON_SIZES = {
  INSTAGRAM: { width: '3.3rem', height: '3.3rem' },
  YOUTUBE: { width: '3.8rem', height: '2.6rem' },
  GOODS: { width: '4.6rem', height: '3.6rem' },
  EVENT_NOTICE: { width: '4.6rem', height: '3.6rem' },
};

function MoreButtonItem(data: ButtonItemProps) {
  const imgSrc = converter(data.type);
  const typeKey = data.type.toUpperCase() as keyof typeof ICON_SIZES;
  const size = ICON_SIZES[typeKey];
  return (
    <ItemWrapper>
      <ItemImg src={imgSrc} $iconWidth={size.width} $iconHeight={size.height} />
      <ItemInfo>{data.name}</ItemInfo>
    </ItemWrapper>
  );
}

export default MoreButtonItem;

const ItemWrapper = styled.div`
  min-width: 5.2rem
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemImg = styled.img<ItemImgProps>`
  width: ${(props) => props.$iconWidth};
  height: ${(props) => props.$iconHeight};
  display: block;
`;

const ItemInfo = styled.p`
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
`;
