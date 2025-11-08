import styled from 'styled-components';
import NowPlayingInfo from './NowPlayingInfo';
import Player from './Player';

function NowPlaying() {
  return (
    <NowPlayingContainer>
      <NowPlayingInfo />
      <Player />
    </NowPlayingContainer>
  );
}

export default NowPlaying;

const NowPlayingContainer = styled.div`
  position: absolute;
  top: 114.1rem;
  width: 90%;
  max-width: 34.6rem;
  left: 50%;
  transform: translateX(-50%);
  height: 23.6rem;
  // margin: 0 2.4rem;
`;
