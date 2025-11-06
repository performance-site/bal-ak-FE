import InputBox from '../inputbox/InputBox';
import * as S from './InfoField.style';

interface InfoFieldProps {
  title: string;
  placeholder?: string;
  variant?: 'small' | 'medium' | 'large';
  width?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'default' | 'phone';
}

const InfoField: React.FC<InfoFieldProps> = ({
  title = '',
  placeholder = '',
  variant = 'medium',
  width,
  value,
  onChange,
  type = 'default',
}) => {
  return (
    <S.InfoFieldContainer>
      <S.fieldTitle>{title}</S.fieldTitle>
      {type === 'phone' ? (
        <S.NumberInput>
          <InputBox variant="small" width="3rem" placeholder="010" />
          -
          <InputBox variant="small" width="3.5rem" placeholder="1234" />
          -
          <InputBox variant="small" width="3.56rem" placeholder="5678" />
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
    </S.InfoFieldContainer>
  );
};

export default InfoField;
