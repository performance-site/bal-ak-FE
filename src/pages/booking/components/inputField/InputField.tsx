import { useEffect, useState } from 'react';
import InputBox from '../inputBox/InputBox';
import * as S from './InputField.style';

interface InputFieldProps {
  title: string;
  placeholder?: string;
  variant?: 'small' | 'medium' | 'large';
  width?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'default' | 'phone';
}

const InputField: React.FC<InputFieldProps> = ({
  title = '',
  placeholder = '',
  variant = 'medium',
  width,
  value,
  onChange,
  type = 'default',
}) => {
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');

  useEffect(() => {
    if (type === 'phone' && onChange) {
      const Number = `${phone1}-${phone2}-${phone3}`;
      onChange({
        target: { value: Number },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [phone1, phone2, phone3]);

  return (
    <S.InputFieldContainer>
      <S.fieldTitle>{title}</S.fieldTitle>
      {type === 'phone' ? (
        <S.NumberInput>
          <InputBox
            variant="small"
            width="3rem"
            placeholder="010"
            value={phone1}
            onChange={(e) =>
              setPhone1(e.target.value.replace(/[^0-9]/g, '').slice(0, 3))
            }
          />
          -
          <InputBox
            variant="medium"
            width="3.5rem"
            placeholder="1234"
            value={phone2}
            onChange={(e) =>
              setPhone2(e.target.value.replace(/[^0-9]/g, '').slice(0, 4))
            }
          />
          -
          <InputBox
            variant="medium"
            width="3.56rem"
            placeholder="5678"
            value={phone3}
            onChange={(e) =>
              setPhone3(e.target.value.replace(/[^0-9]/g, '').slice(0, 4))
            }
          />
        </S.NumberInput>
      ) : (
        <InputBox
          placeholder={placeholder}
          variant={variant}
          width={width}
          value={value}
          onChange={onChange}
        />
      )}
    </S.InputFieldContainer>
  );
};

export default InputField;
