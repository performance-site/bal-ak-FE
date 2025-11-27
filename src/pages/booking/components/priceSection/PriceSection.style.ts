import styled from 'styled-components';

export const PayBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.6rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PriceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const PriceText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

export const PriceExplain = styled.p`
  color: ${({ theme }) => theme.colors.gray6};
  font-family: Pretendard;
  font-size: 1.2rem;
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
  color: ${({ theme }) => theme.colors.gray2};
  font-family: Pretendard;
  font-size: 1.3em;
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
  gap: 1rem;
`;

export const ClickRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CopyBox = styled.div`
  display: flex;
  height: 4rem;
  padding: 1rem 2.7rem;
  // justify-content: space-between;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.purple1};
  background: ${({ theme }) => theme.gradients.checkbox};
  gap: 0.25rem;
`;

export const CopyText = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
`;

export const CopyTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 140%; /* 1.05rem */
  letter-spacing: -0.03rem;
`;

export const CopySub = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 140%; /* 1.225rem */
  letter-spacing: -0.035rem;
`;

export const CopyImg = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  flex-shrink: 0;
  margin: 0.14rem 0.21rem;
`;

export const AccountText = styled.p`
  color: ${({ theme }) => theme.colors.gray8};
  font-family: Pretendard;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 140%; /* 1.05rem */
  letter-spacing: -0.03rem;
`;
