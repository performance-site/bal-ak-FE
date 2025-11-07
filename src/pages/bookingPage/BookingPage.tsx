import * as S from './styles/BookingPage.style';

import { Element } from 'react-scroll';

import SectionHeader from './components/SectionHeader/SectionHeader';
import UseBookingForm from '../../hooks/UseBookingForm';
import InfoSection from './components/InfoSection/InfoSection';
import InputSection from './components/InputSection/InputSection';
import PriceSection from './components/PriceSection/PriceSection';
import ConfirmSection from './components/ConfirmSection/ConfirmSection';

const BookingPage = () => {
  const form = UseBookingForm();
  const { isAllValid, errorMsgs } = form;

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
        <ConfirmSection form={form} />
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
