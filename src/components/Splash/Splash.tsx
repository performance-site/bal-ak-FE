import * as S from './styles/Splash.style';
import Logo from '../../assets/images/splash/logo.png';
import useNavigation from '../../hooks/useNavigation';
import { SplashData } from '../../constants/splash';
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
      <S.SplashInnerContainer fadeState={fadeState}>
        <S.LogoImg
          src={Logo}
          alt="lgoo"
          loading="eager"
          decoding="async"
          draggable={false}
        />
        <S.LogoP>
          {SplashData.title.map((t) => (
            <>
              {t}
              <br />
            </>
          ))}
        </S.LogoP>

        <S.BottomContainer>
          {SplashData.bottomTexts.map((b) => (
            <S.SplashP key={b}>{b}</S.SplashP>
          ))}
        </S.BottomContainer>
      </S.SplashInnerContainer>
    </S.SplashContainer>
  );
};

export default Splash;
