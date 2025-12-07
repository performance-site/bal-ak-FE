import * as S from './styles/Splash.style';
import useNavigation from '../../hooks/useNavigation';
import { useEffect, useState } from 'react';

const Splash = () => {
  const { goTo } = useNavigation();
  const [fadeState, setFadeState] = useState<'fadeIn' | 'fadeOut'>('fadeIn');

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeState('fadeOut');
    }, 1200);

    const navigateTimer = setTimeout(() => {
      goTo('/home');
    }, 1400);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(navigateTimer);
    };
  }, [goTo]);

  return (
    <S.SplashContainer>
      <S.LogoContainer fadeState={fadeState}>
        <S.LogoSvgStyled />
        <S.LogoP>DEUL BULL</S.LogoP>
      </S.LogoContainer>
    </S.SplashContainer>
  );
};

export default Splash;
