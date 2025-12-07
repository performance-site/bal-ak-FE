import * as S from './BookingModal.style';

import CLOSE from '@/assets/booking/close.svg';
import useNavigation from '../../hooks/useNavigation';
import useBookingForm from '../../pages/booking/hooks/useBookingForm';

type SubmitModalProps = {
  form?: ReturnType<typeof useBookingForm>;
  questionLink: string;
  title: string;
  content: string;
};

const BookingModal: React.FC<SubmitModalProps> = ({
  form,
  questionLink,
  title,
  content,
}) => {
  const name = form?.name ?? '';
  const phone = form?.phone ?? '';
  const member = form?.member ?? '';

  const { goTo } = useNavigation();

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.CloseIcon src={CLOSE} onClick={() => goTo('/')} />
        </S.ModalHeader>
        <S.ModalContent>
          {(name || member || phone) && (
            <S.UserText>
              {[name && `${name}`, member && `${member}매`, phone && `${phone}`]
                .filter(Boolean)
                .join(' | ')}
            </S.UserText>
          )}
          <S.EndText>{content} </S.EndText>
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

export default BookingModal;
