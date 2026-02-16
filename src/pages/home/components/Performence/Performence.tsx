import { useShallow } from 'zustand/shallow';
import { useHomeStore } from '../../../../store/homeStore/homeStore';
import * as S from '../Performence/styles/Performence.style';

function Performence() {
  const { title, dateTime, venue } = useHomeStore(
    useShallow((state) => ({
      title: state.homeData?.title,
      dateTime: state.homeData?.dateTime,
      venue: state.homeData?.venue,
    })),
  );

  return (
    <S.PerformenceContainer>
      <S.PerformenceTitle>{title}</S.PerformenceTitle>
      <S.PerformenceInfo>
        {dateTime} | {venue}
      </S.PerformenceInfo>
    </S.PerformenceContainer>
  );
}

export default Performence;
