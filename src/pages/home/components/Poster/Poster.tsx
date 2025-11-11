import { forwardRef } from 'react';
import * as S from './styles/Poster.style';
import PosterInfo from './PosterInfo';

const images = ['red', 'blue', 'yellow', 'green'];

const Poster = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <S.PosterConatiner ref={ref}>
      <PosterInfo />
      <S.PosterSlider>
        <S.PosterWrapper $imageCount={images.length}>
          {images.map((imageURL, index) => (
            <S.PosterItem
              key={index}
              $imageURL={imageURL}
              $imageCount={images.length}
            />
          ))}
        </S.PosterWrapper>
      </S.PosterSlider>
    </S.PosterConatiner>
  );
});

export default Poster;
