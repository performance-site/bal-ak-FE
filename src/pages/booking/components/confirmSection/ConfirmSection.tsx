import UseBookingForm from '../../../../hooks/UseBookingForm';
import ScrollCheck from '../scrollCheck/ScrollCheck';
import SectionHeader from '../sectionHeader/SectionHeader';
import * as S from './ConfirmSection.style';

type ConfirmSectionProps = {
  form: ReturnType<typeof UseBookingForm>;
};

const ConfirmSection: React.FC<ConfirmSectionProps> = ({ form }) => {
  const { checked, toggleCheck } = form;
  return (
    <S.ConfirmContainer>
      <SectionHeader title="최종 확인 및 제출" />
      <S.ConfirmText>
        <p>[개인정보 수집·이용 동의]</p>
        <span>
          {`입력하신 개인정보는 들불 밴드부 사전 예매 확인 및 공연 안내를 위한
          용도로만 사용되며, 해당 목적 외의 용도로 이용되지 않습니다. \n\n 
          - 수집 항목: 이름, 전화번호\n - 수집 목적: 예매자 확인, 공연 관련 안내\n - 보유 기간: 공연 종료 후 7일 이내 파기\n - 수집 주체: 한성대학교 밴드부 들불`}
        </span>
      </S.ConfirmText>
      <S.ButtonWrapper>
        <ScrollCheck
          to="end"
          text="개인정보 수집·이용에 동의합니다."
          checked={checked.confirm}
          onChange={() => toggleCheck('confirm')}
        />
      </S.ButtonWrapper>
    </S.ConfirmContainer>
  );
};

export default ConfirmSection;
