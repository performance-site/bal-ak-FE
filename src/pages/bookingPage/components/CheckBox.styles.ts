import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  display: flex;
  width: 334px;
  padding: 10px 14px;
  align-items: center;
  gap: 8px;

  border-radius: 4px;
  border: 1.25px solid ${({ theme }) => theme.colors.buttonGradient1};
  background: ${({ theme }) => theme.gradients.checkbox};
  box-shadow: 0 0 8px 0 rgba(4, 0, 250, 0.08);
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.3px;
`;
