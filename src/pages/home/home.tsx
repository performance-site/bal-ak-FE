import { useRef, lazy } from 'react';
import ButtonList from './components/ButtonList/ButtonList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Performence from './components/Performence/Performence';
import * as S from './styles/Home.style';
import useGetHomeData from './hooks/useQuery/useGetHomeData';
import SectionTitle from './components/SectionTitle/SectionTitle';

const Poster = lazy(() => import('./components/Poster/Poster'));
const KakaoMap = lazy(() => import('./components/Map/KakaoMap'));

const Home = () => {
  const posterRef = useRef<HTMLDivElement>(null);
  const kakaoMapRef = useRef<HTMLDivElement>(null);

  useGetHomeData();

  const handleScrollToKakaoMap = () => {
    kakaoMapRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <S.HomeContainer>
      {/* 헤더, 타이틀 박스 */}
      <Header />
      <Performence />

      <S.MainInfo>
        {/* 버튼 리스트 (사전예매, 셋리스트, 공연장소, 문의사항) */}
        <ButtonList onScrollToKakaoMap={handleScrollToKakaoMap} />

        {/* 포스터 */}
        <S.SectionBox>
          <SectionTitle title="POSTER" subTitle="공연 포스터" />
          <Poster ref={posterRef} />
        </S.SectionBox>

        {/* 지도 */}
        <S.SectionBox>
          <SectionTitle title="LOCATION" subTitle="위치 안내" />
          <KakaoMap ref={kakaoMapRef} />
        </S.SectionBox>

        {/* 푸터 */}
        <Footer />
      </S.MainInfo>
    </S.HomeContainer>
  );
};

export default Home;
