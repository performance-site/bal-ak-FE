import * as S from './styles/pageTitle.style';
import PageTitleArrow from '../../../../assets/images/setList/pageTitleArrow.svg';
import useNavigation from '../../../../hooks/useNavigation';

const PageTitle = () => {
  const { goTo } = useNavigation();
  const YOUTUBE_PLAYLIST_URL = import.meta.env.VITE_YOUTUBE_PLAYLIST_URL;

  const handleClick = () => {
    goTo(YOUTUBE_PLAYLIST_URL);
  };

  return (
    <S.PageTitleContainer>
      <S.PageTitlePContainer>
        <S.PageTitleP>Setlist & Now Playing</S.PageTitleP>
        <S.PageTitleP size="1.3rem" weight={500} color="gray2">
          공연 당일에는 현재 공연중인 곡을 알려드려요.
        </S.PageTitleP>
      </S.PageTitlePContainer>

      <S.PageTitleButton onClick={handleClick}>
        전곡듣기
        <S.PageTitleButtonImg src={PageTitleArrow} alt="arrow" />
      </S.PageTitleButton>
    </S.PageTitleContainer>
  );
};

export default PageTitle;
