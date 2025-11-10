import * as S from './CheckBox.style';

import CHECK from '@/assets/booking/check.svg';
import CHECKED from '@/assets/booking/checked.svg';

interface CheckBoxProps {
  text?: string;
  checked?: boolean;
  onChange?: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  text,
  checked = false,
  onChange,
}) => {
  return (
    <S.CheckBoxContainer onClick={onChange}>
      <S.Icon src={checked ? CHECKED : CHECK} />
      <S.Text>{text}</S.Text>
    </S.CheckBoxContainer>
  );
};

export default CheckBox;
