import { useShallow } from 'zustand/shallow';
import { useHomeStore } from '../../../../store/homeStore/homeStore';
import * as S from './styles/HeaderTitle.style';

function HeaderTitle() {
  const { websiteName, websiteDescription } = useHomeStore(
    useShallow((state) => ({
      websiteName: state.homeData?.websiteName,
      websiteDescription: state.homeData?.websiteDescription,
    })),
  );

  return (
    <S.HeaderTitleContainer>
      <S.HeaderTitle>{websiteName}</S.HeaderTitle>
      <S.HeaderDescription>{websiteDescription}</S.HeaderDescription>
    </S.HeaderTitleContainer>
  );
}

export default HeaderTitle;
