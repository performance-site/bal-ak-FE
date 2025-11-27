import * as S from './styles/More.style';
import MoreButtonItem from './MoreButtonItem';
import { useHomeStore } from '../../../../store/homeStore/homeStore';

function More() {
  const IconArray = useHomeStore((state) => state.homeData?.moreLinks);

  if (!IconArray) {
    return null;
  }

  return (
    <S.MoreBtnContainer>
      <S.MoreBtnTitle>More</S.MoreBtnTitle>
      <S.MoreButtonList>
        {IconArray.map((item, index) => (
          <MoreButtonItem key={index} {...item} />
        ))}
      </S.MoreButtonList>
    </S.MoreBtnContainer>
  );
}

export default More;
