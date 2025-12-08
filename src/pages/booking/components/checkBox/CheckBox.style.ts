import styled from 'styled-components';

export const CheckBoxContainer = styled.div<{ $checked: boolean }>`
  display: flex;
  width: 33.4rem;
  padding: 1rem 1.4rem;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  border-radius: 0.25rem;
  border: 1.25px solid ${({ theme }) => theme.colors.purple1};
  background: ${({ theme, $checked }) =>
    $checked ? theme.gradients.checkedbox : theme.gradients.checkbox};
  box-shadow: 0 0 8px 0 rgba(4, 0, 250, 0.08);
`;

export const Icon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.3px;
`;
