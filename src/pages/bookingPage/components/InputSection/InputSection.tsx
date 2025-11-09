import UseBookingForm from '../../../../hooks/UseBookingForm';
import InfoField from '../inputField/InputField';
import SectionHeader from '../sectionHeader/SectionHeader';
import * as S from './InputSection.style';

type InputSectionProps = {
  form: ReturnType<typeof UseBookingForm>;
};

const InputSection: React.FC<InputSectionProps> = ({ form }) => {
  const { name, phone, member, setName, setPhone, setMember } = form;

  return (
    <S.InputSectionContainer>
      <SectionHeader title="예매 정보 입력" />
      <S.InfoInput>
        <InfoField
          title="입금자 성함"
          variant="large"
          placeholder="홍길동"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <InfoField
          title="입금자 전화번호"
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <InfoField
          title="예매 인원"
          variant="medium"
          placeholder="ex. 1"
          value={member}
          onChange={(e) => setMember(e.target.value.replace(/[^0-9]/g, ''))}
        />
      </S.InfoInput>
    </S.InputSectionContainer>
  );
};

export default InputSection;
