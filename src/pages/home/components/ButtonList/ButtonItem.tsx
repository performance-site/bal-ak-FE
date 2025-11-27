import { useNavigate } from 'react-router-dom';
import * as S from './styles/ButtonItem.style';

interface ButtonItemProps {
  src: string;
  info: string;
  link: string;
  isFirst?: boolean;
  onScrollToKakaoMap?: () => void;
}

function ButtonItem(data: ButtonItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (data.onScrollToKakaoMap) {
      data.onScrollToKakaoMap();
    } else {
      navigate(data.link);
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
