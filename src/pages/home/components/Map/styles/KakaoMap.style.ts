import styled from 'styled-components';
import theme from '../../../../../styles/theme';

export const MapContainer = styled.div`
  width: 90%;
  max-width: 34.5rem;
  position: absolute;
  top: 141.7rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 22.5rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;

export const MapTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
`;

export const MapSubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${theme.colors.gray2};
`;

export const AddressInfo = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  padding: 0.5rem 0.5rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 1rem;
  color: #333;
`;

export const AddressText = styled.span`
  font-weight: 500;
`;

export const AddressReminder = styled.p`
  margin-top: 0.6rem;
  font-size: 1.6rem;
  font-weight: 400;
`;
