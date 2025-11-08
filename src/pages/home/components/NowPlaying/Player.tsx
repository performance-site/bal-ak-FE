import styled from 'styled-components';
import middleImg from '../../../../assets/images/home/PlayerBtn/middle.svg';
import bottomImg from '../../../../assets/images/home/PlayerBtn/bottom.svg';

function Player() {
  return (
    <PlayerContainer>
      <PlayerHeader>
        <PlayerImg />
        <PlayerTextWrapper>
          <PlayerTitle>asdf</PlayerTitle>
          <PlayerArtist>sadfasd</PlayerArtist>
        </PlayerTextWrapper>
      </PlayerHeader>
      <ImageWrapper>
        <PlayerMiddleImg src={middleImg} />
        <PlayerBottomImg src={bottomImg} />
      </ImageWrapper>
    </PlayerContainer>
  );
}

export default Player;

const PlayerContainer = styled.div`
  width: 100%;
  height: 14.2rem;
  background-color: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(25px);
  border-radius: 12px;
  padding-top: 1.2rem;
  box-shadow:
    inset -1px -1px 4px -2px rgba(255, 255, 255, 1),
    inset 1px 1px 4px -2px rgba(255, 255, 255, 1);
`;

const PlayerHeader = styled.div`
  display: flex;
  height: 4.3rem;
  align-items: center;
  gap: 1.2rem;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  margin-bottom: 1rem;
`;

const PlayerTextWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const PlayerTitle = styled.p`
  font-size: 1.6rem;
  font-widght: 500;
`;

const PlayerArtist = styled.p`
  font-size: 1.2rem;
  font-wieght: 400;
`;

const PlayerImg = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 4px;
  background-color: red;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const PlayerMiddleImg = styled.img`
  width: 93%;
  height: auto;
`;
const PlayerBottomImg = styled.img`
  width: 93%;
  height: auto;
`;
