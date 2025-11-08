import styled from 'styled-components';

function NowPlayingInfo() {
  return (
    <NowPlayingInfoConatiner>
      <NowPlayingInfoTitle>Now Playing</NowPlayingInfoTitle>
      <NowPlayingInfoSubtitle>현재 공연중인 곡</NowPlayingInfoSubtitle>
    </NowPlayingInfoConatiner>
  );
}

export default NowPlayingInfo;

const NowPlayingInfoConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 2.4rem;
`;

const NowPlayingInfoTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
`;

const NowPlayingInfoSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`;
