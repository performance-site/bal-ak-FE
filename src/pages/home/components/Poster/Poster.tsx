import { forwardRef, useState } from 'react';
import * as S from './styles/Poster.style';
import PosterInfo from './PosterInfo';
import { useHomeStore } from '../../../../store/homeStore/homeStore';

const Poster = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const images = useHomeStore((state) => state.homeData?.posterUrls) || [];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 모달 닫기 핸들러
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <S.PosterConatiner ref={ref}>
        <PosterInfo />
        <S.PosterSlider>
          <S.PosterWrapper $imageCount={images.length}>
            {images.map((imageURL, index) => (
              <S.PosterItem
                key={index}
                $imageURL={imageURL}
                $imageCount={images.length}
                onClick={() => setSelectedImage(imageURL)}
              />
            ))}
          </S.PosterWrapper>
        </S.PosterSlider>
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
