import * as S from './styles/BookingPage.style';

import { Element } from 'react-scroll';

import SectionHeader from './components/SectionHeader/SectionHeader';
import ScrollCheck from './components/ScrollCheck/ScrollCheck';
import UseBookingForm from '../../hooks/UseBookingForm';
import InfoSection from './components/InfoSection/InfoSection';
import InputSection from './components/InputSection/InputSection';
import PriceSection from './components/PriceSection/PriceSection';

const BookingPage = () => {
  const form = UseBookingForm();
  const {
    name,
    phone,
    member,
    checked,
    isAllValid,
    errorMsgs,
    setName,
    setPhone,
    setMember,
    toggleCheck,
  } = form;

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
      <InfoSection form={form} />
      <S.Line />

      <Element name="info">
        {/* 예매 정보 입력 */}
        <SectionHeader title="예매 정보 입력" />
        <InputSection form={form} />
      </Element>

      <S.Line />

      <Element name="price">
        {/* 가격 안내 및 입금 */}
        <PriceSection form={form} />
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
            <ScrollCheck
              to="end"
              text="개인정보 수집·이용에 동의합니다."
              checked={checked.confirm}
              onChange={() => toggleCheck('confirm')}
            />
          </S.ButtonWrapper>
        </S.ConfirmContainer>
      </Element>

      <Element name="end">
        {errorMsgs.length > 0 && (
          <S.ErrorMsgWrapper>
            {errorMsgs.map((msg, idx) => (
              <S.ErrorMsg key={idx}>{msg}</S.ErrorMsg>
            ))}
          </S.ErrorMsgWrapper>
        )}

        <S.EndButton $active={!!isAllValid}>
          <S.ButtonText>최종 제출</S.ButtonText>
        </S.EndButton>
      </Element>
    </S.BookingContainer>
  );
};

export default BookingPage;
