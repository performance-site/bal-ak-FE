import styled from 'styled-components';

export const HeaderTextSection = styled.div<{ $height: string }>`
  height: ${({ $height }) => $height};
  width: 100%;
`;

export const HeaderTopText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.6px;
`;

export const QuestionText = styled.p`
  color: ${({ theme }) => theme.colors.gray400};
  text-align: right;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 300;
  line-height: 140%; /* 14px */
  letter-spacing: -0.25px;
  text-decoration: underline;
`;

export const SubTitle = styled.p<{ $color?: string; $size?: string }>`
  color: ${({ $color, theme }) => $color || theme.colors.gray300};
  font-size: ${({ $size }) => $size || '12px'};
  font-family: Pretendard;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.3px;
`;
