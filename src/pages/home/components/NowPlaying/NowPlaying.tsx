import * as S from './styles/NowPlaying.style';
import NowPlayingInfo from './NowPlayingInfo';
import Player from './Player';
import NowPlayingNotice from './NowPlayingNotice';

function NowPlaying() {
  return (
    <S.NowPlayingContainer>
      <NowPlayingInfo />
      <Player />
      <NowPlayingNotice />
    </S.NowPlayingContainer>
  );
}

export default NowPlaying;
