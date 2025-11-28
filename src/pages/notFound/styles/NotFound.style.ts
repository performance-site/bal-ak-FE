import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;
  background: ${({ theme }) => theme.gradients.background};
`;

export const NotFoundHeader = styled.div``;

export const MainText = styled.p`
  color: ${({ theme }) => theme.colors.gray1};
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.0375rem;
`;

export const SubText = styled.p`
  color: ${({ theme }) => theme.colors.gray9};
  text-align: center;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 140%; /* 1.225rem */
  letter-spacing: -0.02188rem;
`;

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.63rem;
`;

export const NotText = styled.p`
  color: ${({ theme }) => theme.colors.gray1};
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 140%; /* 1.4rem */
  letter-spacing: -0.025rem;
`;

export const BackBox = styled.button`
  width: 5.75rem;
  height: 2.06rem;
  display: inline-flex;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  border: 1.25px solid ${({ theme }) => theme.colors.purple1};
  background: ${({ theme }) => theme.gradients.inputbox};
  box-shadow: 0 0 8px 0 rgba(4, 0, 250, 0.08);
  margin-bottom: 2rem;
`;

export const BackText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 140%; /* 1.05rem */
  letter-spacing: -0.01875rem;
`;
