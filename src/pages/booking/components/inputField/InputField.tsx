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
  role?: 'default' | 'phone';
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
}

const InputField: React.FC<InputFieldProps> = ({
  title = '',
  placeholder = '',
  variant = 'medium',
  width,
  value,
  onChange,
  role = 'default',
  type,
  inputMode,
}) => {
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');

  useEffect(() => {
    if (role === 'phone' && onChange) {
      const Number = `${phone1}-${phone2}-${phone3}`;
      onChange({
        target: { value: Number },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [phone1, phone2, phone3]);

  return (
    <S.InputFieldContainer>
      <S.fieldTitle>{title}</S.fieldTitle>
      {role === 'phone' ? (
        <S.NumberInput>
          <InputBox
            variant="small"
            placeholder="010"
            value={phone1}
            onChange={(e) =>
              setPhone1(e.target.value.replace(/[^0-9]/g, '').slice(0, 3))
            }
            inputMode="numeric"
            type="tel"
          />
          -
          <InputBox
            variant="medium"
            width="5.8rem"
            placeholder="1234"
            value={phone2}
            onChange={(e) =>
              setPhone2(e.target.value.replace(/[^0-9]/g, '').slice(0, 4))
            }
            inputMode="numeric"
            type="tel"
          />
          -
          <InputBox
            variant="medium"
            width="5.8rem"
            placeholder="5678"
            value={phone3}
            onChange={(e) =>
              setPhone3(e.target.value.replace(/[^0-9]/g, '').slice(0, 4))
            }
            inputMode="numeric"
            type="tel"
          />
        </S.NumberInput>
      ) : (
        <InputBox
          placeholder={placeholder}
          variant={variant}
          width={width}
          value={value}
          onChange={onChange}
          inputMode={inputMode}
          type={type}
        />
      )}
    </S.InputFieldContainer>
  );
};

export default InputField;
