import { useState } from 'react';
import * as S from '../styles/ShowInfo.styles';

import POSTER from '@/assets/booking/poster.svg';

interface PerformanceInfo {
  title: string;
  dateTime: string;
  venue: string;
  location: string;
}

const ShowInfo = () => {
  const [data, setData] = useState<PerformanceInfo>({
    title: '공연 이름',
    dateTime: '12/21(일) 17:30 (입장 17:00)',
    venue: '홍대 프리버드 리부트',
    location: '(상수역 도보 3분)',
  });

  return (
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
  );
};

export default ShowInfo;
