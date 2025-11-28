import styled from 'styled-components';

export const ClickBoxContainer = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  height: 3.7rem;
  width: 16.6rem;
  padding: 1rem 4rem;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  border-radius: 0.8rem;
  cursor: pointer;

  border: 1px solid ${({ theme }) => theme.colors.purple1};

  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.gradients.clickbox : theme.gradients.checkbox};

  box-shadow: ${({ theme, $isSelected }) =>
    $isSelected ? '' : theme.gradients.checkbox};
`;

export const ClickText = styled.p<{ $isSelected?: boolean }>`
  font-size: 1.2rem;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.03rem;
  transition: color 0.3s ease;

  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.white : theme.colors.gray8};
`;
