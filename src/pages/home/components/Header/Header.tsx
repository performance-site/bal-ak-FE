import * as S from './styles/Header.style';
import HeaderTitle from './HeaderTitle';
import { useEffect, useState } from 'react';
import { useHomeStore } from '../../../../store/homeStore/homeStore';

// const images = ['red', 'blue', 'yellow', 'green'];

function Header() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const SLIDE_INTERVAL = 5000;

  const images = useHomeStore((state) => state.homeData?.imageUrls) || [];
  console.log(images);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const timer = setInterval(() => {
      setCurrentIndex(nextIndex);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div>
      <S.HeaderContainer>
        <S.SliderWrapper
          $currentIndex={currentIndex}
          $imageCount={images.length}
        >
          {images.map((imageURL, index) => (
            <S.SlideItem
              key={index}
              $imageURL={imageURL}
              $imageCount={images.length}
            />
          ))}
        </S.SliderWrapper>
        <HeaderTitle />
      </S.HeaderContainer>
    </div>
  );
}

export default Header;
