import * as S from './styles/MoreButtonItem.style';
import instagramImg from '../../../../assets/images/home/More/INSTAGRAM.svg';
import menuImg from '../../../../assets/images/home/More/Menu.png';
import youtubeImg from '../../../../assets/images/home/More/YOUTUBE.svg';

interface ButtonItemProps {
  type: string;
  name: string;
  url: string;
}

export interface ItemWrapperProps {
  src: string;
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

const handleExternalLink = (url: string) => {
  window.location.href = url;
};

function MoreButtonItem(data: ButtonItemProps) {
  const imgSrc = converter(data.type);
  const typeKey = data.type.toUpperCase() as keyof typeof ICON_SIZES;
  const size = ICON_SIZES[typeKey];
  return (
    <S.ItemWrapper>
      <S.ItemImg
        src={imgSrc}
        $iconWidth={size.width}
        $iconHeight={size.height}
        onClick={() => handleExternalLink(data.url)}
      />
      <S.ItemInfo>{data.name}</S.ItemInfo>
    </S.ItemWrapper>
  );
}

export default MoreButtonItem;
