import ButtonList from './components/ButtonList/ButtonList';
import Header from './components/Header/Header';
import Performence from './components/Performence/Performence';
import { HomeContainer } from './styles/Home.style';

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Performence />
      <ButtonList />
    </HomeContainer>
  );
};

export default Home;
