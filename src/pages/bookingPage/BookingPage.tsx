import * as S from './styles/BookingPage.style';
import { useState } from 'react';

import SectionHeader from './components/sectionheader/SectionHeader';

import CheckBox from './components/checkbox/CheckBox';
import ShowInfo from './components/showinfo/ShowInfo';
import InputBox from './components/inputbox/InputBox';
import ClickBox from './components/clickbox/ClickBox';

import COPY from '@/assets/booking/copy.svg';

const BookingPage = () => {
  const account = 'KB국민은행 93770201535579 이진현';

  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (text: string) => {
    setSelected(text);
  };

  const onCopyClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('계좌번호 복사 성공');
    } catch (e) {
      console.log('계좌번호 복사 실패');
    }
  };

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
      <S.PriceContainer>
        <S.PriceTextContainer>
          <SectionHeader height="2.125rem" title="가격 안내 및 입금" />

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

        {/* 송금 안내 */}
        <S.PayContainer>
          {/* 송금 방식 선택 */}
          <S.ClickRow>
            <ClickBox
              text="카카오페이 송금"
              isSelected={selected === '카카오페이 송금'}
              onClick={() => handleSelect('카카오페이 송금')}
            />
            <ClickBox
              text="네이버페이 송금"
              isSelected={selected === '네이버페이 송금'}
              onClick={() => handleSelect('네이버페이 송금')}
            />
          </S.ClickRow>

          <S.CopyBox>
            <S.CopyText>
              <S.CopyTitle>직접 계좌이체</S.CopyTitle>
              <S.CopySub>ㅣ</S.CopySub>
            </S.CopyText>
            <S.CopyImg
              onClick={() => {
                onCopyClick(account);
              }}
              src={COPY}
            />
            <S.AddressText>{account}</S.AddressText>
          </S.CopyBox>
        </S.PayContainer>
      </S.PriceContainer>
    </S.BookingContainer>
  );
};

export default BookingPage;
