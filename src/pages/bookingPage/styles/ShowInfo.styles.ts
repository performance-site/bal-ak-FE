import styled from 'styled-components';

export const ShowInfoContainer = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 12px;
  padding-bottom: 24px;
`;

export const Poster = styled.img`
  border-radius: 8px;
  background: ${({ theme }) => theme.gradients.showInfo};
  box-shadow: 8px 8px 12px 0 rgba(211, 96, 229, 0.12);
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ShowTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TitleText = styled.p`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.35px;
`;

export const PriceText = styled.div``;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const BasicPrice = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.3px;
  text-decoration-line: line-through;
`;

export const BookingPrice = styled.p`
  color: ${({ theme }) => theme.colors.white2};
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.3px;
`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.white2};
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.3px;
`;
