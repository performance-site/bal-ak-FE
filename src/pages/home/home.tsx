import { useRef, Suspense, lazy, useEffect, useState } from 'react';
import ButtonList from './components/ButtonList/ButtonList';
import DropDownBtn from './components/DropDown/DropDownBtn';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Performence from './components/Performence/Performence';
import { HomeContainer } from './styles/Home.style';
import useGetHomeData from './hooks/useQuery/useGetHomeData';
import Spinner from '../../components/Spinner/Spinner';
import { useGetBookingInfo } from '../booking/hooks/useQuery/useGetBookingInfo';
import BookingModal from '../../components/BookingModal/BookingModal';
import { useHomeStore } from '../../store/homeStore/homeStore';

const Poster = lazy(() => import('./components/Poster/Poster'));
const KakaoMap = lazy(() => import('./components/Map/KakaoMap'));
const NowPlaying = lazy(() => import('./components/NowPlaying/NowPlaying'));
const More = lazy(() => import('./components/More/More'));

const Home = () => {
  useEffect(() => {
    document.title = '홈 - 들불';
  }, []);

  const posterRef = useRef<HTMLDivElement>(null);
  const kakaoMapRef = useRef<HTMLDivElement>(null);

  useGetHomeData();

  const handleScrollToPoster = () => {
    posterRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToKakaoMap = () => {
    kakaoMapRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const { data: bookingInfo } = useGetBookingInfo();
  const preSaleEndTime = bookingInfo?.data.preSaleEndTime;
  const openchatUrl = useHomeStore((state) => state.homeData?.openchatUrl);

  const isBookingClosed =
    !!preSaleEndTime && new Date(preSaleEndTime).getTime() < Date.now();

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <HomeContainer>
      <Header />
      <Performence />
      <ButtonList
        onScrollToKakaoMap={handleScrollToKakaoMap}
        isBookingClosed={isBookingClosed}
        onBookingClosedClick={() => setIsBookingModalOpen(true)}
      />
      <DropDownBtn onScrollToPoster={handleScrollToPoster} />
      <Suspense
        fallback={
          <div style={{ height: '38.3rem' }}>
            <Spinner />
          </div>
        }
      >
        <Poster ref={posterRef} />
      </Suspense>
      <Suspense
        fallback={
          <div style={{ height: '23.6rem' }}>
            <Spinner />
          </div>
        }
      >
        <NowPlaying />
      </Suspense>
      <Suspense
        fallback={
          <div style={{ height: '33.9rem' }}>
            <Spinner />
          </div>
        }
      >
        <KakaoMap ref={kakaoMapRef} />
      </Suspense>
      <Suspense
        fallback={
          <div style={{ height: '11.3rem' }}>
            <Spinner />
          </div>
        }
      >
        <More />
      </Suspense>
      <Footer />

      {isBookingModalOpen && (
        <BookingModal
          questionLink={openchatUrl || ''}
          title="사전 예매 기간이 아닙니다."
          content="현장 예매를 이용해 주세요."
        />
      )}
    </HomeContainer>
  );
};

export default Home;
