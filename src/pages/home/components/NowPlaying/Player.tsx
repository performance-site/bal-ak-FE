import * as S from './styles/Player.style';
import middleImg from '../../../../assets/images/home/PlayerBtn/middle.svg';
import bottomImg from '../../../../assets/images/home/PlayerBtn/bottom.svg';
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

  const { goTo } = useNavigation();

  return (
    <S.PlayerContainer onClick={() => goTo('/setlist')}>
      <S.PlayerHeader>
        <S.PlayerImg $imageUrl={currentSongAlbumUrl} />
        <S.PlayerTextWrapper>
          <S.PlayerTitle>{currentSongTitle}</S.PlayerTitle>
          <S.PlayerArtist>{currentSongArtist}</S.PlayerArtist>
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
