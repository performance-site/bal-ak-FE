import ButtonList from './components/ButtonList/ButtonList';
import Header from './components/Header/Header';
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
    </HomeContainer>
  );
};

export default Home;
