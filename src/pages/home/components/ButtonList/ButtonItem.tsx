import * as S from './styles/ButtonItem.style';

interface ButtonItemProps {
  src: string;
  info: string;
  link: string;
  isFirst?: boolean;
}

function ButtonItem(data: ButtonItemProps) {
  return (
    <S.ItemWrapper>
      <S.ItemImg src={data.src} $isFirst={data.isFirst} />
      <S.ItemInfo>{data.info}</S.ItemInfo>
    </S.ItemWrapper>
  );
}

export default ButtonItem;
