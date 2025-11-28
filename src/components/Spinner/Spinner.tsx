import { BeatLoader } from 'react-spinners';
import * as S from './styles/Spinner.style';
import theme from '../../styles/theme';

const Spinner = () => {
  return (
    <S.SpinnerContainer>
      <BeatLoader size={10} color={`${theme.colors.purple5}`} />
    </S.SpinnerContainer>
  );
};

export default Spinner;
