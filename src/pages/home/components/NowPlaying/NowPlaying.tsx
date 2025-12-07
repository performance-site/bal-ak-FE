import * as S from './styles/NowPlaying.style';
import NowPlayingInfo from './NowPlayingInfo';
import Player from './Player';
import NowPlayingNotice from './NowPlayingNotice';
import { useFadeIn } from '../../hooks/useFadeIn';

function NowPlaying() {
  const { elementRef, isVisible } = useFadeIn({ threshold: 0.2, delay: 150 });

  return (
    <S.NowPlayingContainer ref={elementRef} $isVisible={isVisible}>
      <NowPlayingInfo />
      <Player />
      <NowPlayingNotice />
    </S.NowPlayingContainer>
  );
}

export default NowPlaying;
