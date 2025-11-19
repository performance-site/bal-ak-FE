import * as S from './styles/Player.style';
import middleImg from '../../../../assets/images/home/PlayerBtn/middle.svg';
import bottomImg from '../../../../assets/images/home/PlayerBtn/bottom.svg';

function Player() {
  return (
    <S.PlayerContainer>
      <S.PlayerHeader>
        <S.PlayerImg />
        <S.PlayerTextWrapper>
          <S.PlayerTitle>asdf</S.PlayerTitle>
          <S.PlayerArtist>sadfasd</S.PlayerArtist>
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
