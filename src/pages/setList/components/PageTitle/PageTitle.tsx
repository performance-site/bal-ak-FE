import * as S from './styles/PageTitle.style';

const PageTitle = () => {
  return (
    <S.PageTitleContainer>
      <S.PageTitlePContainer>
        <S.PageTitleP>SETLIST</S.PageTitleP>
        <S.PageTitleP size="1.1rem" color="gray700">
          공연 당일에는 현재 공연중인 곡을 알려드려요.
        </S.PageTitleP>
      </S.PageTitlePContainer>
    </S.PageTitleContainer>
  );
};

export default PageTitle;
