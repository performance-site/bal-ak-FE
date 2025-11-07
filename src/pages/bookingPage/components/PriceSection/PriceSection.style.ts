import styled from 'styled-components';

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
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 140%; /* 1.05rem */
  letter-spacing: -0.01875rem;
`;

export const CopySub = styled.p`
  color: ${({ theme }) => theme.colors.white};
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
