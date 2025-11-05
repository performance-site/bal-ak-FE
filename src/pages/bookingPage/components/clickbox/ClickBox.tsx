import { useState } from 'react';
import * as S from './ClickBox.style';

interface ClickBoxProps {
  text: string;
}

const ClickBox: React.FC<ClickBoxProps> = ({ text }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <S.ClickBoxContainer
      $isSelected={isSelected}
      onClick={() => setIsSelected(!isSelected)}
    >
      <S.ClickText $isSelected={isSelected}>{text}</S.ClickText>
    </S.ClickBoxContainer>
  );
};

export default ClickBox;
