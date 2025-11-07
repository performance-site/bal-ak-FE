import { useState } from 'react';
import UseBookingForm from '../../../../hooks/UseBookingForm';
import ScrollCheck from '../ScrollCheck/ScrollCheck';
import SectionHeader from '../SectionHeader/SectionHeader';
import * as S from './PriceSection.style';

import COPY from '@/assets/booking/copy.svg';
import ClickBox from '../ClickBox/ClickBox';

type PriceSectionProps = {
  form: ReturnType<typeof UseBookingForm>;
};

const PriceSection: React.FC<PriceSectionProps> = ({ form }) => {
  const { name, member, checked, toggleCheck } = form;
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
            <a
              href="https://qr.kakaopay.com/Fbqn2HMS089292"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ClickBox
                text="카카오페이 송금"
                isSelected={selected === '카카오페이 송금'}
                onClick={() => handleSelect('카카오페이 송금')}
              />
            </a>

            <a
              href="https://pay.naver.com/remit/block/NonAppError?originUrl=https%3A%2F%2Fpay.naver.com%2Fremit%2Fqr%2Finflow%3Fv%3D1%26a%3D1002449629196%26c%3D020%26d%3D5bd85792dbd2b87fa5810dacc444a539"
              target="_blank"
              rel="noopener noreferrer"
            >
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
