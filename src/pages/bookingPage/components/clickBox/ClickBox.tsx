import * as S from './ClickBox.style';

interface ClickBoxProps {
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const ClickBox: React.FC<ClickBoxProps> = ({ text, isSelected, onClick }) => {
  return (
    <S.ClickBoxContainer $isSelected={isSelected} onClick={onClick}>
      <S.ClickText $isSelected={isSelected}>{text}</S.ClickText>
    </S.ClickBoxContainer>
  );
};

export default ClickBox;
