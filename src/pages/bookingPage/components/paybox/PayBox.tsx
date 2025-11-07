import * as S from './PayBox.style';
import { useState } from 'react';

import ClickBox from '../ClickBox/ClickBox';

import COPY from '@/assets/booking/copy.svg';

const PayBox = () => {
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
  );
};

export default PayBox;
