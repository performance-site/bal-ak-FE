import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const ShowInfoContainer = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 0.75rem;
  padding-top: 0.56rem;
`;

export const Poster = styled.img`
  width: 7.25rem;
  height: 10.25rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.gradients.showInfo};
  box-shadow: 8px 8px 12px 0 rgba(211, 96, 229, 0.12);
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ShowTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
`;

export const TitleText = styled.p`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.35px;
`;

export const PriceText = styled.div``;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
`;

export const BasicPrice = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.3px;
  text-decoration-line: line-through;
`;

export const BookingPrice = styled.p`
  color: ${({ theme }) => theme.colors.white2};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.3px;
`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.white2};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.3px;
`;
