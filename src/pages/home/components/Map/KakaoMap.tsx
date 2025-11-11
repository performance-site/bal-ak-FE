import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

function KakaoMap() {
  const [address] = useState<string>('서울 서대문구 연세로5다길 10 지하2층');
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = {
          lat: parseFloat(result[0].y),
          lng: parseFloat(result[0].x),
        };
        setPosition(coords);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, [address]);

  if (isLoading) {
    return (
      <MapWrapper>
        <MapContainer>지도 로딩중...</MapContainer>
      </MapWrapper>
    );
  }

  if (!position) {
    return (
      <MapWrapper>
        <MapContainer>주소를 찾을 수 없습니다.</MapContainer>
      </MapWrapper>
    );
  }

  return (
    <MapContainer>
      <TitleWrapper>
        <MapTitle>Concert Location</MapTitle>
        <MapSubTitle>위치 안내</MapSubTitle>
      </TitleWrapper>
      <MapWrapper>
        <Map
          center={position}
          style={{ width: '100%', height: '100%' }}
          level={3}
        >
          <MapMarker position={position} />
        </Map>
      </MapWrapper>
      <AddressInfo>
        <AddressText>위치 : {address}</AddressText>
      </AddressInfo>
      <AddressReminder>장소: {address}</AddressReminder>
    </MapContainer>
  );
}

export default KakaoMap;

const MapContainer = styled.div`
  width: 90%;
  max-width: 34.5rem;
  position: absolute;
  top: 141.7rem;
  left: 50%;
  transform: translateX(-50%);
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 22.5rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;

const MapTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
`;

const MapSubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`;

const AddressInfo = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  padding: 0.5rem 0.5rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 1rem;
  color: #333;
`;

const AddressText = styled.span`
  font-weight: 500;
`;

const AddressReminder = styled.p`
  margin-top: 0.6rem;
  font-size: 1.6rem;
  font-weight: 400;
`;
