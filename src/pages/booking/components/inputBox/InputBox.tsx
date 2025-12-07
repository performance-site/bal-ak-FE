import * as S from './InputBox.style';

interface InputBoxProps {
  placeholder?: string;
  variant?: 'small' | 'medium' | 'large';
  width?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder = '',
  variant = 'medium',
  width,
  value,
  onChange,
  type,
  inputMode,
}) => {
  const size = {
    small: { width: '5rem', height: '2.7rem' },
    medium: {
      width: '5.4rem',
      height: '2.7rem',
    },
    large: {
      width: '19.8rem',
      height: '2.7rem',
    },
  }[variant];

  return (
    <S.InputBoxContainer $width={width ?? size.width} $height={size.height}>
      <S.Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        inputMode={inputMode}
        type={type}
      />
    </S.InputBoxContainer>
  );
};

export default InputBox;
