import styled from 'styled-components';

export const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

export const ConfirmText = styled.p`
  color: ${({ theme }) => theme.colors.gray6};
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 1.1375rem */
  letter-spacing: -0.03rem;

  p {
    margin-bottom: 1.3rem;
  }

  span {
    color: ${({ theme }) => theme.colors.gray8};
    font-weight: 500;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 7.5rem;
`;
