import * as S from './styles/refreshButton.style';
import RefreshButtonLogo from '../../../../assets/images/setList/refreshButtonLogo.svg';

interface RefreshButtonProps {
  onClick: () => void;
}

const RefreshButton = ({ onClick }: RefreshButtonProps) => {
  return (
    <S.RefreshButtonContainer onClick={onClick}>
      <S.RefreshImg src={RefreshButtonLogo} alt="refresh" />
    </S.RefreshButtonContainer>
  );
};

export default RefreshButton;
