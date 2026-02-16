import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7.2rem;
  background: ${({ theme }) => theme.gradients.linear1};
`;

export const NotFoundHeader = styled.div``;

export const MainText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.06rem;
`;

export const SubText = styled.p`
  color: ${({ theme }) => theme.colors.graySub};
  text-align: center;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 140%; /* 1.225rem */
  letter-spacing: -0.03rem;
`;

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.6rem;
`;

export const NotText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%; /* 1.4rem */
  letter-spacing: -0.04rem;
`;

export const BackBox = styled.button`
  width: 9.2rem;
  height: 3.3rem;
  display: inline-flex;
  padding: 0.8rem 2.4rem;
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

export const BackText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 140%; /* 1.05rem */
  letter-spacing: -0.03rem;
`;
