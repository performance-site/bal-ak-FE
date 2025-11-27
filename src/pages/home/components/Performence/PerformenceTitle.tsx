import { useShallow } from 'zustand/shallow';
import { useHomeStore } from '../../../../store/homeStore/homeStore';
import * as S from './styles/PerformenceTitle.style';

function PerformenceTitle() {
  const { title, subtitle } = useHomeStore(
    useShallow((state) => ({
      title: state.homeData?.title,
      subtitle: state.homeData?.subtitle,
    })),
  );

  return (
    <S.PerformenceTitleContainer>
      <S.PerformenceTitle>{title}</S.PerformenceTitle>
      <S.PerformenceSubtitle>{subtitle}</S.PerformenceSubtitle>
    </S.PerformenceTitleContainer>
  );
}

export default PerformenceTitle;
