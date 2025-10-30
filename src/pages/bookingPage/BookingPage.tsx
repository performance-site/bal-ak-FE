import * as S from './BookingPage.style';

import SectionHeader from './components/SectionHeader';

const BookingPage = () => {
  return (
    <S.BookingContainer>
      {/* 상단 사전 예매 제목 */}
      <SectionHeader
        height="75px"
        title="사전예매"
        questionText="예매 관련 문의하기"
        subtitles={[
          {
            text: '더 싼 가격으로 미리 하는 사전예매 ~ 12/12(마감일)',
          },
        ]}
      />
    </S.BookingContainer>
  );
};

export default BookingPage;
