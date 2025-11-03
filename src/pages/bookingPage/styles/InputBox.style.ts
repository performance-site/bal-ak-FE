import styled from 'styled-components';

export const InputBoxContainer = styled.div<{
  $width: string;
  $height: string;
  $padding: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: ${({ $padding }) => $padding};
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 0.25rem;
  border: 1.25px solid ${({ theme }) => theme.colors.borderColor};
  background: ${({ theme }) => theme.gradients.inputBoxGradient};
  box-shadow: 0 0 8px 0 rgba(4, 0, 250, 0.08);
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.gray400};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 140%; /* 1.05rem */
  letter-spacing: -0.01875rem;
`;
