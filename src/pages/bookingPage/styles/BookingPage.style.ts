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
  background: ${({ theme }) => theme.colors.gray500};
  margin: 0;
`;

export const InfoInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const InfoBox = styled.div`
  display: flex;
  width: 12.375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const InfoName = styled.p`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 140%; /* 1.225rem */
  letter-spacing: -0.02188rem;
`;

export const NumberInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PriceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.06rem;
`;

export const PriceText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const PriceExplain = styled.p`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.01875rem;
  white-space: pre-line;

  strong {
    font-weight: 800;
  }

  span {
    font-weight: 400;
  }
`;

export const UserPrice = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 140%; /* 1.1375rem */
  letter-spacing: -0.02031rem;
  white-space: pre-line;

  strong {
    font-weight: 800;
  }
`;

export const ClickRow = styled.div`
  display: flex;
  gap: 0.62rem;
`;
