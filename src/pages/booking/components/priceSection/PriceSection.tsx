import { useState } from 'react';
import useBookingForm from '../../hooks/useBookingForm';
import ScrollCheck from '../scrollCheck/ScrollCheck';
import SectionHeader from '../sectionHeader/SectionHeader';
import * as S from './PriceSection.style';

import COPY from '@/assets/booking/copy.svg';
import ClickBox from '../clickBox/ClickBox';
import useNavigation from '../../../../hooks/useNavigation';
import Toast from '../toast/Toast';

type PriceSectionProps = {
  form: ReturnType<typeof useBookingForm>;
  kakaopayUrl: string;
  naverpayUrl: string;
  bankName: string;
  bankAccount: string;
  accountHolder: string;
  preSaleFee: string;
};

const PriceSection: React.FC<PriceSectionProps> = ({
  form,
  kakaopayUrl,
  naverpayUrl,
  bankName,
  bankAccount,
  accountHolder,
  preSaleFee,
}) => {
  const { goTo } = useNavigation();
  const { name, member, checked, toggleCheck, setPaymentMethod } = form;
  const account = `${bankName} ${bankAccount} ${accountHolder}`;

  const [selected, setSelected] = useState<string | null>(null);
  const isAccountSelected = selected === '계좌이체';

  const handleSelect = (text: string, url: string) => {
    setSelected(text);
    setPaymentMethod(text);
    goTo(url);
  };

  const [showToast, setShowToast] = useState(false);

  const onCopyClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setPaymentMethod('계좌이체');
      setSelected('계좌이체');
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1000);
    } catch (e) {
      console.log('계좌번호 복사 실패 ', e);
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
              {member
                ? `${(Number(member) * Number(preSaleFee)).toLocaleString()}원`
                : '0원'}
            </strong>
          </S.UserPrice>
        </S.PriceText>
      </S.PriceTextContainer>

      <S.PayBoxWrapper>
        {/* 송금 안내 */}
        <S.PayContainer>
          {/* 송금 방식 선택 박스*/}
          <S.ClickRow>
            <ClickBox
              text="카카오페이 송금"
              isSelected={selected === '카카오페이 송금'}
              onClick={() => handleSelect('카카오페이 송금', kakaopayUrl)}
            />

            <ClickBox
              text="네이버페이 송금"
              isSelected={selected === '네이버페이 송금'}
              onClick={() => handleSelect('네이버페이 송금', naverpayUrl)}
            />
          </S.ClickRow>

          {/* 계좌이체 박스 */}
          <S.CopyBox
            $isSelected={isAccountSelected}
            onClick={() => onCopyClick(bankAccount)}
          >
            <S.CopyText>
              <S.CopyTitle>직접 계좌이체</S.CopyTitle>
              <S.CopySub>ㅣ</S.CopySub>
            </S.CopyText>
            {bankAccount && <S.CopyImg src={COPY} />}
            <S.AccountText $isSelected={isAccountSelected}>
              {account}
            </S.AccountText>
          </S.CopyBox>
        </S.PayContainer>
        <ScrollCheck
          to="confirm"
          text="송금 완료했습니다."
          checked={checked.price}
          onChange={() => toggleCheck('price')}
        />
      </S.PayBoxWrapper>

      {showToast && <Toast />}
    </S.PriceContainer>
  );
};

export default PriceSection;
