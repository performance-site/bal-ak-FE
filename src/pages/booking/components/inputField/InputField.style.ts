import styled from 'styled-components';

export const InputFieldContainer = styled.div`
  display: flex;
  width: 19.8rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const fieldTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray6};
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 140%; /* 1.225rem */
  letter-spacing: -0.02188rem;
`;

export const NumberInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
