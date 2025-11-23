import styled from 'styled-components';

export const BookingContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  height: 100vh;
  overflow-y: auto;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Line = styled.hr`
  width: 21.5rem;
  height: 0.0625rem;
  opacity: 0.4;
  background: ${({ theme }) => theme.colors.gray3};
  margin: 0;
`;

export const EndButton = styled.div<{ $active?: boolean }>`
  display: flex;
  height: 2.4375rem;
  padding: 0.625rem 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  align-self: stretch;
  border-radius: 0.25rem;
  border: 1.25px solid ${({ theme }) => theme.colors.purple1};
  box-shadow: 0 0 8px 0 rgba(4, 0, 250, 0.08);

  cursor: ${({ $active }) => ($active ? 'pointer' : 'not-allowed')};

  background: ${({ theme, $active }) =>
    $active ? theme.gradients.clickbox : theme.gradients.checkbox};
`;

export const ButtonText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 1.05rem */
  letter-spacing: -0.01875rem;
  font-family: Pretendard;
`;

export const ErrorMsgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 4rem;
  margin-bottom: 0.75rem;
`;

export const ErrorMsg = styled.p`
  color: #ff027a;
  font-family: Pretendard;
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 140%; /* 0.875rem */
  letter-spacing: -0.01563rem;
`;
