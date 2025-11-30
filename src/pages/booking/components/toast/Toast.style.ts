import styled from 'styled-components';

export const ToastContainer = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 32rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 50%;
  background: ${({ theme }) => theme.gradients.toast};
  border-radius: 0.4rem;
  border: 0.01rem solid ${({ theme }) => theme.colors.gray6};
  z-index: 1;
`;

export const ToastText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`;
