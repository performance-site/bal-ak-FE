import UseBookingForm from '../../../../hooks/UseBookingForm';
import * as S from './SubmitModal.style';

import CLOSE from '@/assets/booking/close.svg';
import useNavigation from '../../../../hooks/useNavigation';

type SubmitModalProps = {
  form: ReturnType<typeof UseBookingForm>;
  questionLink: string;
};

const SubmitModal: React.FC<SubmitModalProps> = ({ form, questionLink }) => {
  const { name, phone, member } = form;
  const { goTo } = useNavigation();

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ModalTitle>사전 예매가 완료되었습니다.</S.ModalTitle>
          <S.CloseIcon src={CLOSE} onClick={() => goTo('/')} />
        </S.ModalHeader>
        <S.ModalContent>
          <S.UserText>{`${name} | ${member}매 | ${phone}`}</S.UserText>
          <S.EndText>
            {`문의 사항은 아래 [문의하기] 버튼을 통해 접수해 주세요.\n공연 당일에 뵙겠습니다. 감사합니다.`}
          </S.EndText>
          <S.ButtonContainer>
            <a href={questionLink} target="_blank" rel="noopener noreferrer">
              <S.ModalBtn>
                <S.BtnText>문의하기</S.BtnText>
              </S.ModalBtn>
            </a>

            <S.ModalBtn onClick={() => goTo('/setList')}>
              <S.BtnText>셋 리스트</S.BtnText>
            </S.ModalBtn>
          </S.ButtonContainer>
        </S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default SubmitModal;
