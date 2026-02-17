import * as S from './styles/PageTitle.style';

const PageTitle = () => {
  return (
    <S.PageTitleContainer>
      <S.PageTitlePContainer>
        <S.PageTitleP>SETLIST</S.PageTitleP>
        <S.PageTitleP size="1.1rem" color="gray700">
          공연 곡 순서와 연주자 정보를 확인하세요.
        </S.PageTitleP>
      </S.PageTitlePContainer>
    </S.PageTitleContainer>
  );
};

export default PageTitle;
