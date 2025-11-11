import * as S from './styles/NowPlaying.style';
import NowPlayingInfo from './NowPlayingInfo';
import Player from './Player';

function NowPlaying() {
  return (
    <S.NowPlayingContainer>
      <NowPlayingInfo />
      <Player />
    </S.NowPlayingContainer>
  );
}

export default NowPlaying;
