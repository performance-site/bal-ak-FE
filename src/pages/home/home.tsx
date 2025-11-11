import { useRef } from 'react';
import ButtonList from './components/ButtonList/ButtonList';
import DropDownBtn from './components/DropDown/DropDownBtn';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import KakaoMap from './components/Map/KakaoMap';
import More from './components/More/More';
import NowPlaying from './components/NowPlaying/NowPlaying';
import Performence from './components/Performence/Performence';
import Poster from './components/Poster/Poster';
import { HomeContainer } from './styles/Home.style';

const Home = () => {
  const posterRef = useRef<HTMLDivElement>(null);

  const handleScrollToPoster = () => {
    posterRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <HomeContainer className="scroll">
      <Header />
      <Performence />
      <ButtonList />
      <DropDownBtn onScrollToPoster={handleScrollToPoster} />
      <Poster ref={posterRef} />
      <NowPlaying />
      <KakaoMap />
      <More />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
