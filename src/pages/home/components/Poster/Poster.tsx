import styled from 'styled-components';
import PosterInfo from './PosterInfo';

interface PosterWrapperProps {
  $imageCount: number;
}

interface PosterItemProps {
  $imageURL: string;
  $imageCount: number;
}

const images = ['red', 'blue', 'yellow', 'green'];

function Poster() {
  return (
    <PosterConatiner>
      <PosterInfo />
      <PosterSlider>
        <PosterWrapper $imageCount={images.length}>
          {images.map((imageURL, index) => (
            <PosterItem
              key={index}
              $imageURL={imageURL}
              $imageCount={images.length}
            />
          ))}
        </PosterWrapper>
      </PosterSlider>
    </PosterConatiner>
  );
}

export default Poster;

const PosterConatiner = styled.div`
  position: absolute;
  top: 71.8rem;
  width: 100%;
`;

const PosterSlider = styled.div`
  padding: 0 2.4rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

const PosterWrapper = styled.div<PosterWrapperProps>`
  display: flex;
  gap: 1.2rem;
  width: fit-content;
  height: 100%;
`;

const PosterItem = styled.div<PosterItemProps>`
  width: 22rem;
  height: 31.1rem;
  border-radius: 8px;
  flex-shrink: 0;
  scroll-snap-align: center;
  background-color: ${(props) => props.$imageURL};
  background-size: cover;
  background-position: center;
`;
