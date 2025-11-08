import ButtonList from './components/ButtonList/ButtonList';
import Header from './components/Header/Header';
import NowPlaying from './components/NowPlaying/NowPlaying';
import Performence from './components/Performence/Performence';
import Poster from './components/Poster/Poster';
import { HomeContainer } from './styles/Home.style';

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Performence />
      <ButtonList />
      <Poster />
      <NowPlaying />
    </HomeContainer>
  );
};

export default Home;
