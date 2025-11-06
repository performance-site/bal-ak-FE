import * as S from './styles/BookingPage.style';

import { Link, Element } from 'react-scroll';

import SectionHeader from './components/sectionheader/SectionHeader';

import CheckBox from './components/checkbox/CheckBox';
import ShowInfo from './components/showinfo/ShowInfo';

import InfoField from './components/infofield/InfoField';
import PayBox from './components/paybox/PayBox';

const BookingPage = () => {
  return (
    <S.BookingContainer id="bookingScroll">
      {/* 상단 사전 예매 제목 */}
      <SectionHeader
        title="사전예매"
        questionText="예매 관련 문의하기"
        questionLink="https://www.kakaocorp.com/page/service/service/openchat"
        subtitle="더 싼 가격으로 미리 하는 사전예매 ~ 12/12(마감일)"
      />

      {/* 공연 기본 정보 확인 */}
      <S.InfoContainer>
        <ShowInfo />
        <Link
          to="info"
          smooth={true}
          duration={500}
          containerId="bookingScroll"
        >
          <CheckBox text="확인했습니다." />
        </Link>
      </S.InfoContainer>

      <S.Line />

      <Element name="info">
        {/* 예매 정보 입력 */}
        <SectionHeader title="예매 정보 입력" />
        <S.InfoInput>
          <InfoField
            title="입금자 성함"
            variant="medium"
            placeholder="홍길동"
          />

          <InfoField title="입금자 전화번호" type="phone" />

          <InfoField title="예매 인원" variant="small" placeholder="ex. 1" />
        </S.InfoInput>
      </Element>

      <S.Line />

      <Element name="price">
        {/* 가격 안내 및 입금 */}
        <S.PriceContainer>
          <S.PriceTextContainer>
            <SectionHeader title="가격 안내 및 입금" />

            <S.PriceText>
              <S.PriceExplain>
                입금 후 꼭 <strong>최종 제출</strong> 버튼까지 눌러 주세요!
                <br />
                <span>송금만으로는 예매가 완료되지 않습니다.</span>
              </S.PriceExplain>

              <S.UserPrice>
                입금자: <strong>홍길동</strong>
                <br />총 입금 금액: <strong>5,000원</strong>
              </S.UserPrice>
            </S.PriceText>
          </S.PriceTextContainer>

          <S.PayBoxWrapper>
            {/* 송금 안내 */}
            <PayBox />
            <Link
              to="confirm"
              smooth={true}
              duration={500}
              containerId="bookingScroll"
            >
              <CheckBox text="송금 완료했습니다." />
            </Link>
          </S.PayBoxWrapper>
        </S.PriceContainer>
      </Element>

      <S.Line />

      <Element name="confirm">
        {/* 최종 확인 및 제출 */}
        <S.ConfirmContainer>
          <SectionHeader title="최종 확인 및 제출" />
          <S.ConfirmContent>
            <S.ConfirmText>
              <p>[개인정보 수집·이용 동의]</p>
              <span>
                입력하신 개인정보는 들불 밴드부 사전 예매 확인 및 공연 안내를
                위한 용도로만 사용되며, 해당 목적 외의 용도로 이용되지 않습니다.{' '}
                <br />
                <br />
                - 수집 항목: 이름, 전화번호 <br />
                - 수집 목적: 예매자 확인, 공연 관련 안내 <br />
                - 보유 기간: 공연 종료 후 7일 이내 파기 <br />- 수집 주체:
                한성대학교 밴드부 들불
              </span>
            </S.ConfirmText>
          </S.ConfirmContent>
          <S.ButtonWrapper>
            <Link
              to="end"
              smooth={true}
              duration={500}
              containerId="bookingScroll"
            >
              <CheckBox text="개인정보 수집·이용에 동의합니다." />
            </Link>
          </S.ButtonWrapper>
        </S.ConfirmContainer>
      </Element>

      <Element name="end">
        <S.EndButton>
          <S.ButtonText>최종 제출</S.ButtonText>
        </S.EndButton>
      </Element>
    </S.BookingContainer>
  );
};

export default BookingPage;
