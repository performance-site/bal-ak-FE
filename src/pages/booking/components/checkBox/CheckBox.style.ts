import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  display: flex;
  width: 20.875rem;
  padding: 0.625rem 0.875rem;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.25rem;
  border: 1.25px solid ${({ theme }) => theme.colors.purple1};
  background: ${({ theme }) => theme.gradients.checkbox};
  box-shadow: 0 0 8px 0 rgba(4, 0, 250, 0.08);
`;

export const Icon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.3px;
`;
