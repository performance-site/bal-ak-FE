import * as S from './InputBox.style';

interface InputBoxProps {
  placeholder?: string;
  variant?: 'small' | 'medium' | 'large';
  width?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder = '',
  variant = 'medium',
  width,
  value,
  onChange,
}) => {
  const size = {
    small: { width: '3rem', height: '1.69rem', padding: '0.3125rem 0.7rem' },
    medium: {
      width: '3.5rem',
      height: '1.69rem',
      padding: '0.3125rem 0.75rem',
    },
    large: {
      width: '12.38rem',
      height: '1.69rem',
      padding: '0.3125rem 0.75rem',
    },
  }[variant];

  return (
    <S.InputBoxContainer
      $width={width ?? size.width}
      $height={size.height}
      $padding={size.padding}
    >
      <S.Input placeholder={placeholder} value={value} onChange={onChange} />
    </S.InputBoxContainer>
  );
};

export default InputBox;
