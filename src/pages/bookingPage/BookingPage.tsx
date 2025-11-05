import * as S from './styles/BookingPage.style';

import SectionHeader from './components/sectionheader/SectionHeader';

import CheckBox from './components/checkbox/CheckBox';
import ShowInfo from './components/showinfo/ShowInfo';
import InputBox from './components/inputbox/InputBox';
import ClickBox from './components/clickbox/ClickBox';

const BookingPage = () => {
  return (
    <S.BookingContainer>
      {/* 상단 사전 예매 제목 */}
      <SectionHeader
        height="3.19rem"
        title="사전예매"
        questionText="예매 관련 문의하기"
        questionLink="https://www.kakaocorp.com/page/service/service/openchat"
        subtitle="더 싼 가격으로 미리 하는 사전예매 ~ 12/12(마감일)"
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
      <SectionHeader height="2.125rem" title="가격 안내 및 입금" />
    </S.BookingContainer>
  );
};

export default BookingPage;
