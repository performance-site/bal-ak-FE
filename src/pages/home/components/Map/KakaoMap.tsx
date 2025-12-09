import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as S from './styles/KakaoMap.style';
import { useState, useEffect, forwardRef } from 'react';
import { useHomeStore } from '../../../../store/homeStore/homeStore';
import Spinner from '../../../../components/Spinner/Spinner';
import CLICK from '@assets/images/home/ClickIcon.png';

const KakaoMap = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const venue = useHomeStore((state) => state.homeData?.venue);
  const location = useHomeStore((state) => state.homeData?.location);
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [kakaoLoaded, setKakaoLoaded] = useState(false);

  useEffect(() => {
    const checkKakaoLoaded = () => {
      if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
        setKakaoLoaded(true);
      } else {
        setTimeout(checkKakaoLoaded, 100);
      }
    };
    checkKakaoLoaded();
  }, []);

  useEffect(() => {
    if (
      !location ||
      !kakaoLoaded ||
      !window.kakao ||
      !window.kakao.maps ||
      !window.kakao.maps.services
    ) {
      if (!location) setIsLoading(false);
      return;
    }

    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(location, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
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
  }, [location, kakaoLoaded]);

  // 주소를 검색어로 사용하여 카카오맵 열기
  const handleOpenKakaoMap = () => {
    if (!location) return;

    const url = `https://map.kakao.com/link/search/${encodeURIComponent(location)}`;
    window.open(url, '_blank');
  };

  if (!kakaoLoaded || isLoading) {
    return (
      <S.MapWrapper>
        <S.MapContainer>지도 로딩중...</S.MapContainer>
      </S.MapWrapper>
    );
  }

  if (!position) {
    return (
      <S.MapWrapper>
        <S.MapContainer>
          <Spinner />
        </S.MapContainer>
      </S.MapWrapper>
    );
  }

  return (
    <S.MapContainer ref={ref}>
      <S.TitleWrapper>
        <S.MapTitle>Concert Location</S.MapTitle>
        <S.MapSubTitle>위치 안내</S.MapSubTitle>
        <S.ClickIcon>
          <img src={CLICK} alt="클릭아이콘" />
        </S.ClickIcon>
      </S.TitleWrapper>
      <S.MapWrapper onClick={handleOpenKakaoMap}>
        <Map
          center={position}
          style={{ width: '100%', height: '100%' }}
          level={3}
        >
          <MapMarker position={position} />
        </Map>
      </S.MapWrapper>
      <S.AddressInfo>
        <S.AddressText>위치: {location}</S.AddressText>
      </S.AddressInfo>
      <S.AddressReminder>장소: {venue}</S.AddressReminder>
    </S.MapContainer>
  );
});

export default KakaoMap;
