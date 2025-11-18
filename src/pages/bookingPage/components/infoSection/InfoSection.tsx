import { useState } from 'react';
import UseBookingForm from '../../../../hooks/UseBookingForm';
import ScrollCheck from '../scrollCheck/ScrollCheck';
import * as S from './InfoSection.style';

import POSTER from '@/assets/booking/poster.svg';

type InfoSectionProps = {
  form: ReturnType<typeof UseBookingForm>;
};

interface PerformanceInfo {
  title: string;
  dateTime: string;
  venue: string;
  location: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ form }) => {
  const { checked, toggleCheck } = form;

  const [data] = useState<PerformanceInfo>({
    title: '공연 이름',
    dateTime: '12/21(일) 17:30 (입장 17:00)',
    venue: '홍대 프리버드 리부트',
    location: '(상수역 도보 3분)',
  });

  return (
    <S.InfoContainer>
      <S.ShowInfoContainer>
        <S.Poster src={POSTER} />

        <S.TextBox>
          <S.ShowTitle>
            <S.TitleText>{data.title}</S.TitleText>
            <S.InfoText>{data.dateTime}</S.InfoText>
          </S.ShowTitle>

          <S.DetailInfo>
            <S.PriceText>
              <S.BasicPrice>현장예매: 6,000원</S.BasicPrice>
              <S.BookingPrice>사전예매: 5,000원</S.BookingPrice>
            </S.PriceText>

            <S.InfoText>
              위치: {data.venue} <br /> {data.location}
            </S.InfoText>
          </S.DetailInfo>
        </S.TextBox>
      </S.ShowInfoContainer>
      <ScrollCheck
        to="info"
        text="확인했습니다."
        checked={checked.info}
        onChange={() => toggleCheck('info')}
      />
    </S.InfoContainer>
  );
};

export default InfoSection;
