import useBookingForm from '../../../../hooks/useBookingForm';
import InputField from '../inputField/InputField';
import SectionHeader from '../sectionHeader/SectionHeader';
import * as S from './InputSection.style';

type InputSectionProps = {
  form: ReturnType<typeof useBookingForm>;
};

const InputSection: React.FC<InputSectionProps> = ({ form }) => {
  const { name, phone, member, setName, setPhone, setMember } = form;

  return (
    <S.InputSectionContainer>
      <SectionHeader title="예매 정보 입력" />
      <S.InfoInput>
        <InputField
          title="입금자 성함"
          variant="large"
          placeholder="김들불"
          value={name}
          onChange={(e) => setName(e.target.value)}
          inputMode="text"
        />

        <InputField
          title="입금자 전화번호"
          role="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <InputField
          title="예매 인원"
          variant="medium"
          placeholder="ex. 1"
          value={member}
          onChange={(e) => setMember(e.target.value.replace(/[^0-9]/g, ''))}
          inputMode="numeric"
          type="tel"
        />
      </S.InfoInput>
    </S.InputSectionContainer>
  );
};

export default InputSection;
