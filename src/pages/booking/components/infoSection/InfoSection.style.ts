import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const ShowInfoContainer = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 1.2rem;
  padding-top: 0.8rem;
`;

export const Poster = styled.img`
  width: 11.6rem;
  height: 16.4rem;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.gradients.showInfo};
  box-shadow: 8px 8px 12px 0 rgba(211, 96, 229, 0.12);
`;

export const TextBox = styled.div`
  height: 16.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ShowTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const TitleText = styled.p`
  color: ${({ theme }) => theme.colors.gray6};
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.03rem;
`;

export const PriceText = styled.div``;

export const DetailInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const BasicPrice = styled.p`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.03rem;
  text-decoration-line: line-through;
`;

export const BookingPrice = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.03rem;
`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.03rem;
  white-space: pre-line;
`;
