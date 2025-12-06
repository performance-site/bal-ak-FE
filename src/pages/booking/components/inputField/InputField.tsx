import { useEffect, useState } from 'react';
import InputBox from '../inputBox/InputBox';
import * as S from './InputField.style';

interface InputFieldProps {
  title: string;
  placeholder?: string;
  variant?: 'small' | 'medium' | 'large';
  width?: string;
  value?: string;
  onChange?: (value: string) => void;
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
    if (role === 'phone' && value) {
      const [p1 = '', p2 = '', p3 = ''] = value.split('-');
      setPhone1(p1);
      setPhone2(p2);
      setPhone3(p3);
    }
  }, [value, role]);

  const emit = (p1: string, p2: string, p3: string) => {
    onChange?.(`${p1}-${p2}-${p3}`);
  };

  return (
    <S.InputFieldContainer>
      <S.fieldTitle>{title}</S.fieldTitle>
      {role === 'phone' ? (
        <S.NumberInput>
          <InputBox
            variant="small"
            placeholder="010"
            value={phone1}
            onChange={(e) => {
              const v = e.target.value.replace(/[^0-9]/g, '').slice(0, 3);
              setPhone1(v);
              emit(v, phone2, phone3);
            }}
            inputMode="numeric"
            type="tel"
          />
          -
          <InputBox
            variant="medium"
            width="5.8rem"
            placeholder="1234"
            value={phone2}
            onChange={(e) => {
              const v = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
              setPhone2(v);
              emit(phone1, v, phone3);
            }}
            inputMode="numeric"
            type="tel"
          />
          -
          <InputBox
            variant="medium"
            width="5.8rem"
            placeholder="5678"
            value={phone3}
            onChange={(e) => {
              const v = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
              setPhone3(v);
              emit(phone1, phone2, v);
            }}
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
          onChange={(e) => onChange?.(e.target.value)}
          inputMode={inputMode}
          type={type}
        />
      )}
    </S.InputFieldContainer>
  );
};

export default InputField;
