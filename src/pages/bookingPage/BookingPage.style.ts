import styled from 'styled-components';

export const BookingContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const Line = styled.hr`
  width: 21.5rem;
  height: 0.0625rem;
  opacity: 0.4;
  background: ${({ theme }) => theme.colors.gray500};
  margin: 0;
`;
