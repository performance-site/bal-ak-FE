import * as S from './CheckBox.styles';
import { useState } from 'react';

import CHECK from '../../../assets/booking/check.svg';
import CHECKED from '../../../assets/booking/checked.svg';

interface CheckBoxProps {
  text?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ text }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => setChecked((prev) => !prev);

  return (
    <S.CheckBoxContainer onClick={handleToggle}>
      <S.Icon src={checked ? CHECKED : CHECK} />
      <S.Text>{text}</S.Text>
    </S.CheckBoxContainer>
  );
};

export default CheckBox;
