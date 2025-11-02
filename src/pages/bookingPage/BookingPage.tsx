import * as S from './BookingPage.style';

import SectionHeader from './components/SectionHeader';

import CheckBox from './components/CheckBox';
import ShowInfo from './components/ShowInfo';

const BookingPage = () => {
  return (
    <S.BookingContainer>
      {/* 상단 사전 예매 제목 */}
      <SectionHeader
        height="3.19rem"
        title="사전예매"
        questionText="예매 관련 문의하기"
        questionLink="https://www.kakaocorp.com/page/service/service/openchat"
        subtitles={[
          {
            text: '더 싼 가격으로 미리 하는 사전예매 ~ 12/12(마감일)',
          },
        ]}
      />

      {/* 공연 기본 정보 확인 */}
      <ShowInfo />
      <CheckBox text="확인했습니다." />

      <S.Line />
    </S.BookingContainer>
  );
};

export default BookingPage;
