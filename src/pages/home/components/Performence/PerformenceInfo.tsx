import { useShallow } from 'zustand/shallow';
import { useHomeStore } from '../../../../store/homeStore/homeStore';
import * as S from '../Performence/styles/PerformenceInfo.style';

function PerformenceInfo() {
  const { description, dateTime, venue } = useHomeStore(
    useShallow((state) => ({
      description: state.homeData?.description,
      dateTime: state.homeData?.dateTime,
      venue: state.homeData?.venue,
    })),
  );
  return (
    <S.PerformenceInfoContainer>
      <S.PerformenceInfo>{description}</S.PerformenceInfo>
      <S.PerformenceInfo>{dateTime}</S.PerformenceInfo>
      <S.PerformenceInfo>{venue}</S.PerformenceInfo>
    </S.PerformenceInfoContainer>
  );
}

export default PerformenceInfo;
