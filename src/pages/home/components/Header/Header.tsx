import * as S from './styles/Header.style';
import HeaderTitle from './HeaderTitle';
import { useEffect, useState } from 'react';
import { useHomeStore } from '../../../../store/homeStore/homeStore';

function Header() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const SLIDE_INTERVAL = 5000;

  const images = useHomeStore((state) => state.homeData?.imageUrls) || [];
  // console.log(images);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div>
      <S.HeaderContainer>
        <S.SliderWrapper
          $currentIndex={currentIndex}
          $imageCount={images.length}
        >
          {images.map((imageURL, index) => (
            <S.SlideItem key={index} $imageCount={images.length}>
              <img
                src={imageURL}
                alt={`메인 배너 ${index + 1}`}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </S.SlideItem>
          ))}
        </S.SliderWrapper>
        <HeaderTitle />
      </S.HeaderContainer>
    </div>
  );
}

export default Header;
