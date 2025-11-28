import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  width: 32.6rem;
  padding: 1.2rem 1.2rem 1.2rem 2.4rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.2rem;
  border-radius: 0.4rem;
  border: 1.5px solid rgba(233, 233, 233, 0.6);
  background: ${({ theme }) => theme.gradients.submitModal};
  box-shadow: 0 0 8px 0 rgba(4, 0, 250, 0.08);
  backdrop-filter: blur(10px);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ModalTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 140%; /* 1.4rem */
  letter-spacing: -0.04rem;
`;

export const CloseIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  right: 1.2rem;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

export const UserText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 140%; /* 1.225rem */
  letter-spacing: -0.035rem;
`;

export const EndText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 140%; /* 1.05rem */
  letter-spacing: -0.03rem;
  white-space: pre-line;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.2rem;
`;

export const ModalBtn = styled.button`
  display: flex;
  width: 12.8rem;
  height: 3.8rem;
  padding: 0.8rem 3.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.gradients.clickbox};
  box-shadow: 0 0 8px 0 rgba(4, 0, 250, 0.08);
`;

export const BtnText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 140%; /* 1.4rem */
  letter-spacing: -0.04rem;
`;
