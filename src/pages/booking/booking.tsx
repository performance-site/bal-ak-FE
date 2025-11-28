import * as S from './styles/Booking.style';

import { Element } from 'react-scroll';

import SectionHeader from './components/sectionHeader/SectionHeader';
import UseBookingForm from '../../hooks/UseBookingForm';
import InfoSection from './components/infoSection/InfoSection';
import InputSection from './components/inputSection/InputSection';
import PriceSection from './components/priceSection/PriceSection';
import ConfirmSection from './components/confirmSection/ConfirmSection';
import { useState } from 'react';
import SubmitModal from './components/submitModal/SubmitModal';
import { useGetBookingInfo } from './hooks/useQuery/useGetBookingInfo';
import { usePostBooking } from './hooks/useMutation/usePostBooking';
import useGetHomeData from '../home/hooks/useQuery/useGetHomeData';
import { formatToMonthDayWeek } from '../../utils/booking/date';

const Booking = () => {
  // 공연 정보
  const { data: performanceData } = useGetHomeData();

  const form = UseBookingForm();
  const { isAllValid, errorMsgs } = form;

  const [isOpen, setIsOpen] = useState(false);

  // 사전예매 정보 조회
  const { data: bookingInfoResponse } = useGetBookingInfo();

  const {
    openChatUrl = '',
    kakaopayUrl = '',
    naverpayUrl = '',
    preSaleFee = '',
    onSiteFee = '',
    preSaleEndTime = '',
    bankName = '',
    bankAccount = '',
    accountHolder = '',
  } = bookingInfoResponse?.data ?? {};

  const endTime = formatToMonthDayWeek(preSaleEndTime);

  // 최종 제출
  const bookingMutation = usePostBooking();
  const handleSubmitBooking = () => {
    bookingMutation.mutate(
      {
        name: form.name,
        phoneNumber: form.phone,
        headCount: Number(form.member),
      },
      {
        onSuccess: () => {
          console.log('예매 성공');
          handleOpen();
        },
        onError: (err) => {
          console.error('예매 실패', err);
        },
      },
    );
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <S.BookingContainer id="bookingScroll">
        {/* 상단 사전 예매 제목 */}
        <SectionHeader
          title="사전예매"
          questionText="예매 관련 문의하기"
          questionLink={openChatUrl}
          subtitle={`더 싼 가격으로 미리 하는 사전예매 ~ ${endTime}`}
        />

        {/* 공연 기본 정보 확인 */}
        <InfoSection
          form={form}
          performanceData={performanceData}
          preSaleFee={preSaleFee}
          onSiteFee={onSiteFee}
        />
        <S.Line />

        <Element name="info">
          {/* 예매 정보 입력 */}
          <InputSection form={form} />
        </Element>

        <S.Line />

        <Element name="price">
          {/* 가격 안내 및 입금 */}
          <PriceSection
            form={form}
            kakaopayUrl={kakaopayUrl}
            naverpayUrl={naverpayUrl}
            bankName={bankName}
            bankAccount={bankAccount}
            accountHolder={accountHolder}
            preSaleFee={preSaleFee}
          />
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

          <S.EndButton
            $active={!!isAllValid}
            onClick={() => {
              if (isAllValid) handleSubmitBooking();
            }}
          >
            <S.ButtonText>최종 제출</S.ButtonText>
          </S.EndButton>
        </Element>
      </S.BookingContainer>

      {isOpen && (
        <SubmitModal
          form={form}
          onClose={handleOpen}
          questionLink={openChatUrl}
        />
      )}
    </>
  );
};

export default Booking;
