import * as S from './styles/Poster.style';
import PosterInfo from './PosterInfo';

const images = ['red', 'blue', 'yellow', 'green'];

function Poster() {
  return (
    <S.PosterConatiner>
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
}

export default Poster;
