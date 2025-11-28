import { ClipLoader } from 'react-spinners';
import * as S from './styles/Spinner.style';
import theme from '../../styles/theme';

const Spinner = () => {
  return (
    <S.SpinnerContainer>
      <ClipLoader size={40} color={`${theme.colors.purple5}`} />
    </S.SpinnerContainer>
  );
};

export default Spinner;
