import * as S from './styles/ButtonItem.style';
import useNavigation from '../../../../hooks/useNavigation';

interface ButtonItemProps {
  src: string;
  info: string;
  link: string;
  isFirst?: boolean;
  onScrollToKakaoMap?: () => void;
}

function ButtonItem(data: ButtonItemProps) {
  const { goTo } = useNavigation();

  const handleClick = () => {
    if (data.onScrollToKakaoMap) {
      data.onScrollToKakaoMap();
    } else {
      goTo(data.link);
    }
  };

  return (
    <S.ItemWrapper>
      <S.ItemImg src={data.src} $isFirst={data.isFirst} onClick={handleClick} />
      <S.ItemInfo>{data.info}</S.ItemInfo>
    </S.ItemWrapper>
  );
}

export default ButtonItem;
