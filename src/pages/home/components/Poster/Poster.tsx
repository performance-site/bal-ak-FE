import { forwardRef, useState } from 'react';
import * as S from './styles/Poster.style';
import PosterInfo from './PosterInfo';
import { useHomeStore } from '../../../../store/homeStore/homeStore';
import { useFadeIn } from '../../hooks/useFadeIn';

const Poster = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const images = useHomeStore((state) => state.homeData?.posterUrls) || [];
  const { elementRef, isVisible } = useFadeIn({ threshold: 0.2, delay: 100 });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <S.PosterConatiner ref={ref}>
        <S.FadeInWrapper ref={elementRef} $isVisible={isVisible}>
          <PosterInfo />
          <S.PosterSlider>
            <S.PosterWrapper $imageCount={images.length}>
              {images.map((imageURL, index) => (
                <S.PosterItem
                  key={index}
                  onClick={() => setSelectedImage(imageURL)}
                >
                  <img
                    src={imageURL}
                    alt={`메인 사진 ${index + 1}`}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </S.PosterItem>
              ))}
            </S.PosterWrapper>
          </S.PosterSlider>
        </S.FadeInWrapper>
      </S.PosterConatiner>
      {selectedImage && (
        <S.ModalOverlay onClick={handleCloseModal}>
          <S.ModalImage
            src={selectedImage}
            alt="크게 보기"
            onClick={(e) => e.stopPropagation()}
          />
        </S.ModalOverlay>
      )}
    </>
  );
});

export default Poster;
