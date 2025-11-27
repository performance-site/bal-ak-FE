import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as S from './styles/KakaoMap.style';
import { useState, useEffect, forwardRef } from 'react';
import { useHomeStore } from '../../../../store/homeStore/homeStore';

const KakaoMap = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const location = useHomeStore((state) => state.homeData?.location);
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!location) {
      setIsLoading(false);
      return;
    }

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(location, (result, status) => {
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
  }, [location]);

  if (isLoading) {
    return (
      <S.MapWrapper>
        <S.MapContainer>지도 로딩중...</S.MapContainer>
      </S.MapWrapper>
    );
  }

  if (!position) {
    return (
      <S.MapWrapper>
        <S.MapContainer>주소를 찾을 수 없습니다.</S.MapContainer>
      </S.MapWrapper>
    );
  }

  return (
    <S.MapContainer ref={ref}>
      <S.TitleWrapper>
        <S.MapTitle>Concert Location</S.MapTitle>
        <S.MapSubTitle>위치 안내</S.MapSubTitle>
      </S.TitleWrapper>
      <S.MapWrapper>
        <Map
          center={position}
          style={{ width: '100%', height: '100%' }}
          level={3}
        >
          <MapMarker position={position} />
        </Map>
      </S.MapWrapper>
      <S.AddressInfo>
        <S.AddressText>위치 : {location}</S.AddressText>
      </S.AddressInfo>
      <S.AddressReminder>장소: {location}</S.AddressReminder>
    </S.MapContainer>
  );
});

export default KakaoMap;
