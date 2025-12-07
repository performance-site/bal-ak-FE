import styled from 'styled-components';

interface PlayerImgProps {
  $imageUrl: string | null;
}

export const PlayerContainer = styled.div`
  width: 100%;
  height: 14.2rem;
  background-color: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(25px);
  border-radius: 12px;
  padding-top: 1.2rem;
  cursor: pointer;
  box-shadow:
    inset -1px -1px 4px -2px rgba(255, 255, 255, 1),
    inset 1px 1px 4px -2px rgba(255, 255, 255, 1);
`;

export const PlayerHeader = styled.div`
  display: flex;
  height: 4.3rem;
  align-items: center;
  gap: 1.2rem;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  margin-bottom: 1rem;
`;

export const PlayerTextWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const PlayerTitle = styled.p`
  font-size: 1.6rem;
  font-widght: 500;
`;

export const PlayerArtist = styled.p`
  font-size: 1.2rem;
  font-wieght: 400;
`;

export const PlayerImg = styled.div<PlayerImgProps>`
  width: 4rem;
  height: 4rem;
  border-radius: 4px;
  background-image: url(${(props) => props.$imageUrl});
  background-size: contain;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PlayerMiddleImg = styled.img`
  width: 93%;
  height: auto;
`;
export const PlayerBottomImg = styled.img`
  width: 93%;
  height: auto;
`;
