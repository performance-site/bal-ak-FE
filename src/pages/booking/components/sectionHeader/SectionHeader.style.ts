import styled from 'styled-components';

export const HeaderTextSection = styled.div`
  width: 100%;
`;

export const HeaderTopText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.06rem;
`;

export const QuestionText = styled.p`
  color: ${({ theme }) => theme.colors.gray8};
  text-align: right;
  font-size: 1rem;
  font-weight: 300;
  line-height: 140%; /* 14px */
  letter-spacing: -0.025rem;
  text-decoration: underline;
  cursor: pointer;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: 1.2rem;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.03rem;
  font-weight: 500;
`;
