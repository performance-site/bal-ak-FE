import * as S from './BookingPage.style';

import SectionHeader from './components/SectionHeader';

import CheckBox from './components/CheckBox';
import ShowInfo from './components/ShowInfo';
import InputBox from './components/InputBox';

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

      {/* 예매 정보 입력 */}
      <SectionHeader height="2.125rem" title="예매 정보 입력" />
      <S.InfoInput>
        <S.InfoBox>
          <S.InfoName>입금자 성함</S.InfoName>
          <InputBox variant="medium" placeholder="홍길동" />
        </S.InfoBox>

        <S.InfoBox>
          <S.InfoName>입금자 전화번호</S.InfoName>
          <S.NumberInput>
            <InputBox variant="small" width="3rem" placeholder="010" />
            -
            <InputBox variant="small" width="3.5rem" placeholder="1234" />
            -
            <InputBox variant="small" width="3.56rem" placeholder="5678" />
          </S.NumberInput>
        </S.InfoBox>

        <S.InfoBox>
          <S.InfoName>예매 인원</S.InfoName>
          <InputBox variant="small" placeholder="ex. 1" />
        </S.InfoBox>
      </S.InfoInput>

      <S.Line />

      {/* 가격 안내 및 입금 */}
      <SectionHeader
        height="4.24rem"
        title="가격 안내 및 입금"
        subtitles={[
          {
            text: (
              <>
                입금 후 꼭 <strong>최종 제출</strong> 버튼까지 눌러 주세요!
              </>
            ),
            fontWeight: 600,
          },
          {
            text: `송금만으로는 예매가 완료되지 않습니다.`,
            fontWeight: 400,
          },
        ]}
      />
    </S.BookingContainer>
  );
};

export default BookingPage;
