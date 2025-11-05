import styled from 'styled-components';

export const ClickBoxContainer = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  padding: 0.625rem 2.875rem;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.5rem;

  border: 1px solid ${({ theme }) => theme.colors.buttonGradient1};

  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.gradients.clickbox : theme.gradients.checkbox};

  box-shadow: ${({ theme, $isSelected }) =>
    $isSelected ? '' : theme.gradients.checkbox};
`;

export const ClickText = styled.p<{ $isSelected?: boolean }>`
  font-size: 0.75rem;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.01875rem;
  transition: color 0.3s ease;

  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.white2 : theme.colors.gray400};
`;
