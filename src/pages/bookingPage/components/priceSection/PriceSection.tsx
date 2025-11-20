import { useState } from 'react';
import UseBookingForm from '../../../../hooks/UseBookingForm';
import ScrollCheck from '../scrollCheck/ScrollCheck';
import SectionHeader from '../sectionHeader/SectionHeader';
import * as S from './PriceSection.style';

import COPY from '@/assets/booking/copy.svg';
import ClickBox from '../clickBox/ClickBox';
import { LINKS } from '../../../../datas/BookingLinks';

type PriceSectionProps = {
  form: ReturnType<typeof UseBookingForm>;
};

const PriceSection: React.FC<PriceSectionProps> = ({ form }) => {
  const { name, member, checked, toggleCheck } = form;
  const account = import.meta.env.VITE_PAY_ACCOUNT;

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
            입금자: <strong>{name}</strong>
            <br />총 입금 금액:{' '}
            <strong>
              {member ? `${(Number(member) * 5000).toLocaleString()}원` : '0원'}
            </strong>
          </S.UserPrice>
        </S.PriceText>
      </S.PriceTextContainer>

      <S.PayBoxWrapper>
        {/* 송금 안내 */}
        <S.PayContainer>
          {/* 송금 방식 선택 박스*/}
          <S.ClickRow>
            <a href={LINKS.KAKAO_PAY} target="_blank" rel="noopener noreferrer">
              <ClickBox
                text="카카오페이 송금"
                isSelected={selected === '카카오페이 송금'}
                onClick={() => handleSelect('카카오페이 송금')}
              />
            </a>

            <a href={LINKS.NAVER_PAY} target="_blank" rel="noopener noreferrer">
              <ClickBox
                text="네이버페이 송금"
                isSelected={selected === '네이버페이 송금'}
                onClick={() => handleSelect('네이버페이 송금')}
              />
            </a>
          </S.ClickRow>

          {/* 계좌이체 박스 */}
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

        <ScrollCheck
          to="confirm"
          text="송금 완료했습니다."
          checked={checked.price}
          onChange={() => toggleCheck('price')}
        />
      </S.PayBoxWrapper>
    </S.PriceContainer>
  );
};

export default PriceSection;
