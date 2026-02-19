import styled, { keyframes } from 'styled-components';
import theme from '../../../../../styles/theme';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const MapContainer = styled.div`
  width: 34.5rem;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const MapWrapper = styled.div`
  height: 22.5rem;
  border-radius: 8px;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
  position: relative;
`;

export const AddressInfo = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.white};
  padding: 0.7rem 0.2rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  color: #333;
`;

export const AddressText = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export const AddressReminder = styled.p`
  margin-top: 0.6rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${theme.colors.gray600};
`;

export const ClickIcon = styled.div`
  position: absolute;
  width: 3.9rem;
  right: 0.5rem;
  bottom: -2.8rem;
  z-index: 1000;
  animation: ${pulse} 1.5s ease-in-out infinite;

  img {
    width: 100%;
    height: 100%;
  }
`;
