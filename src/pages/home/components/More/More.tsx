import * as S from './styles/More.style';
import MoreButtonItem from './MoreButtonItem';
import { useHomeStore } from '../../../../store/homeStore/homeStore';
import { useFadeIn } from '../../hooks/useFadeIn';

function More() {
  const IconArray = useHomeStore((state) => state.homeData?.moreLinks);
  const { elementRef, isVisible } = useFadeIn({ threshold: 0.01, delay: 200, rootMargin: '100px' });

  if (!IconArray) {
    return null;
  }

  return (
    <S.MoreBtnContainer ref={elementRef} $isVisible={isVisible}>
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
