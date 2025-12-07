import * as S from './styles/RefreshButton.style';
import RefreshButtonLogo from '../../../../assets/images/setList/refreshButtonLogo.svg';
import { useState } from 'react';

interface RefreshButtonProps {
  onClick: () => void;
}

const RefreshButton = ({ onClick }: RefreshButtonProps) => {
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    setSpinning(true);
    onClick();

    setTimeout(() => setSpinning(false), 600);
  };

  return (
    <S.RefreshButtonContainer onClick={handleClick}>
      <S.RefreshImg
        src={RefreshButtonLogo}
        alt="refresh"
        loading="eager"
        decoding="async"
        draggable={false}
        spinning={spinning}
      />
    </S.RefreshButtonContainer>
  );
};

export default RefreshButton;
