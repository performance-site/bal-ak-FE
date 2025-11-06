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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const PayBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.62rem;
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

export const PayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
`;

export const ClickRow = styled.div`
  display: flex;
  gap: 0.62rem;
`;

export const CopyBox = styled.div`
  display: flex;
  width: 21.38rem;
  padding: 0.63rem 1.84rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.buttonGradient1};
  background: ${({ theme }) => theme.gradients.checkbox};
`;

export const CopyText = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
`;

export const CopyTitle = styled.p`
  color: ${({ theme }) => theme.colors.white2};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 140%; /* 1.05rem */
  letter-spacing: -0.01875rem;
`;

export const CopySub = styled.p`
  color: ${({ theme }) => theme.colors.white2};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 140%; /* 1.225rem */
  letter-spacing: -0.02188rem;
`;

export const CopyImg = styled.img`
  width: 0.79688rem;
  height: 0.88544rem;
  flex-shrink: 0;
  margin: 0.09rem 0.13rem;
`;

export const AddressText = styled.p`
  color: ${({ theme }) => theme.colors.gray400};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 140%; /* 1.05rem */
  letter-spacing: -0.01875rem;
`;

export const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.81rem;
`;

export const ConfirmContent = styled.div``;

export const ConfirmText = styled.p`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 1.1375rem */
  letter-spacing: -0.02031rem;

  p {
    margin-bottom: 0.8125rem;
  }

  span {
    color: ${({ theme }) => theme.colors.gray400};
    font-weight: 500;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
`;

export const EndButton = styled.div`
  display: flex;
  height: 2.4375rem;
  padding: 0.625rem 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 4rem;
  margin-bottom: 0.75rem;
  align-self: stretch;
  border-radius: 0.25rem;
  border: 1.25px solid ${({ theme }) => theme.colors.buttonGradient1};
  background: ${({ theme }) => theme.gradients.checkbox}
  box-shadow: 0 0 8px 0 rgba(4, 0, 250, 0.08);
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
