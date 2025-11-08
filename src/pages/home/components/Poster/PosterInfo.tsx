import styled from 'styled-components';

function PosterInfo() {
  return (
    <PosterInfoConatiner>
      <PosterTitle>Concert Poster</PosterTitle>
      <PosterSubtitle>공연 포스터</PosterSubtitle>
    </PosterInfoConatiner>
  );
}

export default PosterInfo;

const PosterInfoConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 2.4rem;
  margin-left: 2.4rem;
`;

const PosterTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
`;

const PosterSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`;
