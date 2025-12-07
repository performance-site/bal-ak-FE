import styled from 'styled-components';

export const InputBoxContainer = styled.div<{
  $width: string;
  $height: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 0.4rem;
  border: 1.25px solid ${({ theme }) => theme.colors.purple1};
  background: ${({ theme }) => theme.gradients.inputbox};
  box-shadow: 0 0 8px 0 rgba(4, 0, 250, 0.08);
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 140%; /* 1.05rem */
  letter-spacing: -0.03rem;
  padding: 0.5rem 1.2rem;
  text-align: center;

  flex: 1;
  min-width: 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray8}
`;
