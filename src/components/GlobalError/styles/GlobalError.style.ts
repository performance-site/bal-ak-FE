import styled from 'styled-components';

export const ErrorContainer = styled.div`
  width: 393px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.gradients.linear1};
  padding-top: 10rem;
`;

export const MainText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.06rem;
`;

export const SubText = styled.p`
  color: ${({ theme }) => theme.colors.graySub};
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: -0.03rem;
`;

export const RetryBox = styled.button`
  width: 9.2rem;
  height: 3.3rem;
  display: inline-flex;
  padding: 0.8rem;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  border: 1.25px solid ${({ theme }) => theme.colors.gray700};
  background: ${({ theme }) => theme.colors.white20};
  box-shadow: 0 0 8px 0 rgba(4, 0, 250, 0.08);

  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const RetryText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.03rem;
`;
