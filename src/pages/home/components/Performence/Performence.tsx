import * as S from '../Performence/styles/Performence.style';
import PerformenceInfo from './PerformenceInfo';
import PerformenceTitle from './PerformenceTitle';

function Performence() {
  return (
    <S.PerformenceContainer>
      <PerformenceTitle />
      <PerformenceInfo />
    </S.PerformenceContainer>
  );
}

export default Performence;
