import * as S from './styles/Player.style';
import middleImg from '../../../../assets/images/home/PlayerBtn/middle.svg';
import bottomImg from '../../../../assets/images/home/PlayerBtn/bottom.svg';
import defaultAlbumImg from '../../../../assets/images/home/Playing/default.png';
import { useHomeStore } from '../../../../store/homeStore/homeStore';
import { useShallow } from 'zustand/shallow';
import useNavigation from '../../../../hooks/useNavigation';

function Player() {
  const { currentSongTitle, currentSongArtist, currentSongAlbumUrl } =
    useHomeStore(
      useShallow((state) => ({
        currentSongTitle: state.homeData?.currentSongTitle,
        currentSongArtist: state.homeData?.currentSongArtist,
        currentSongAlbumUrl: state.homeData?.currentSongAlbumUrl ?? null,
      })),
    );

  const displayTitle = currentSongTitle || '공연 시작 전';
  const displayArtist =
    currentSongArtist || '공연이 시작되면 현재 곡이 표시됩니다.';
  const displayAlbumUrl = currentSongAlbumUrl || defaultAlbumImg;

  const { goTo } = useNavigation();

  return (
    <S.PlayerContainer onClick={() => goTo('/setlist')}>
      <S.PlayerHeader>
        <S.PlayerImg $imageUrl={displayAlbumUrl} />
        <S.PlayerTextWrapper>
          <S.PlayerTitle>{displayTitle}</S.PlayerTitle>
          <S.PlayerArtist>{displayArtist}</S.PlayerArtist>
        </S.PlayerTextWrapper>
      </S.PlayerHeader>
      <S.ImageWrapper>
        <S.PlayerMiddleImg src={middleImg} />
        <S.PlayerBottomImg src={bottomImg} />
      </S.ImageWrapper>
    </S.PlayerContainer>
  );
}

export default Player;
