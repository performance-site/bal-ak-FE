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
  width: 20.375rem;
  padding: 0.75rem 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: 0.25rem;
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
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%; /* 1.4rem */
  letter-spacing: -0.025rem;
`;

export const CloseIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.38rem;
`;

export const UserText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 140%; /* 1.225rem */
  letter-spacing: -0.02188rem;
`;

export const EndText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 140%; /* 1.05rem */
  letter-spacing: -0.01875rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.38rem;
`;

export const ModalBtn = styled.button`
  display: flex;
  width: 8rem;
  height: 2.375rem;
  padding: 0.5625rem 2.19rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.gradients.clickbox};
  box-shadow: 0 0 8px 0 rgba(4, 0, 250, 0.08);
`;

export const BtnText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%; /* 1.4rem */
  letter-spacing: -0.025rem;
`;
