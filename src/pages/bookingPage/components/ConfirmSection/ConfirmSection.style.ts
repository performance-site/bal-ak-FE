import styled from 'styled-components';

export const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.81rem;
`;

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
