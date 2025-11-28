import * as S from './styles/Splash.style';
import Logo from '../../assets/images/splash/logo.svg';
import useNavigation from '../../hooks/useNavigation';
import { useEffect, useState } from 'react';

const Splash = () => {
  const { goTo } = useNavigation();
  const [fadeState, setFadeState] = useState<'fadeIn' | 'fadeOut'>('fadeIn');

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeState('fadeOut');
    }, 1500);

    const navigateTimer = setTimeout(() => {
      goTo('/home');
    }, 3000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(navigateTimer);
    };
  }, [goTo]);

  return (
    <S.SplashContainer>
      <S.LogoContainer fadeState={fadeState}>
        <S.LogoImg
          src={Logo}
          alt="lgoo"
          loading="eager"
          decoding="async"
          draggable={false}
        />
        <S.LogoP>DEUL BUL</S.LogoP>
      </S.LogoContainer>
    </S.SplashContainer>
  );
};

export default Splash;
