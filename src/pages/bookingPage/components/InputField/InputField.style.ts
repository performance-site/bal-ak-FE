import styled from 'styled-components';

export const InfoFieldContainer = styled.div`
  display: flex;
  width: 12.375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const fieldTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray6};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 140%; /* 1.225rem */
  letter-spacing: -0.02188rem;
`;

export const NumberInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;
