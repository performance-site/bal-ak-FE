import styled from 'styled-components';

export const BookingContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  height: 100vh;
  overflow-y: auto;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Line = styled.hr`
  width: 34.4rem;
  height: 1rem;
  opacity: 0.4;
  background: ${({ theme }) => theme.colors.gray3};
  margin: 0;
`;

export const EndButton = styled.div<{ $active?: boolean }>`
  display: flex;
  height: 3.9rem;
  padding: 1rem 1.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  align-self: stretch;
  border-radius: 0.4rem;
  border: 1.25px solid ${({ theme }) => theme.colors.purple1};
  box-shadow: 0 0 8px 0 rgba(4, 0, 250, 0.08);

  cursor: ${({ $active }) => ($active ? 'pointer' : 'not-allowed')};

  background: ${({ theme, $active }) =>
    $active ? theme.gradients.clickbox : theme.gradients.checkbox};
`;

export const ButtonText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 1.2rem;
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
  margin-top: 6.5rem;
  margin-bottom: 1.2rem;
`;

export const ErrorMsg = styled.p`
  color: #ff027a;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 300;
  line-height: 140%; /* 0.875rem */
  letter-spacing: -0.025rem;
`;
