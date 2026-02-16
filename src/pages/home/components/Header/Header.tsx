import * as S from './styles/Header.style';
import { useHomeStore } from '../../../../store/homeStore/homeStore';
import { useAutoSlider } from '../../hooks/useAutoSlider';

function Header() {
  const images = useHomeStore((state) => state.homeData?.imageUrls) || [];
  const { currentIndex, touchHandlers } = useAutoSlider({
    length: images.length,
  });

  return (
    <div {...touchHandlers}>
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
      </S.HeaderContainer>
    </div>
  );
}

export default Header;
