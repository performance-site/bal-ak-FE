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
    small: { width: '5rem', height: '2.7rem', padding: '0.5rem 1.2rem' },
    medium: {
      width: '5.4rem',
      height: '2.7rem',
      padding: '0.5rem 1.2rem',
    },
    large: {
      width: '19.8rem',
      height: '2.7rem',
      padding: '0.5rem 1.2rem',
    },
  }[variant];

  return (
    <S.InputBoxContainer
      $width={width ?? size.width}
      $height={size.height}
      $padding={size.padding}
    >
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
