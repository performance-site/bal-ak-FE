import * as S from './styles/AlbumExplain.style';
import type { Track } from '../../../../../types/setListDetail/setListDetail.type';
import HeartOff from '../../../../../assets/images/setListDetail/heartOff.svg';
import HeartOn from '../../../../../assets/images/setListDetail/heartOn.svg';
import { usePostLikeData } from '../../../hooks/useMutation/usePostLikeData';
import { useParams } from 'react-router-dom';
import { getAlbumExplainList } from '../../../../../utils/setListDetail/albumExplain/albumExplainList';

interface AlbumExplainProps {
  track: Track;
}

const AlbumExplain = ({ track }: AlbumExplainProps) => {
  const { id: performanceSongId } = useParams<{ id: string }>();

  const { liked, likes, toggleLike, isAnimating } = usePostLikeData(
    Number(performanceSongId),
    track.likes,
  );

  const albumExplainList = getAlbumExplainList(track);
  console.log(albumExplainList);

  return (
    <S.AlbumExplainContainer>
      <S.AlbumExplainP>
        {track.artist} - {track.title}
      </S.AlbumExplainP>

      <S.AlbumExplainInnerContainer>
        <S.AlbumExplainDiv>
          {albumExplainList.map((item) => (
            <div className="row" key={item.label}>
              <span className="span">{item.label}</span>
              <span className="span">{item.value}</span>
            </div>
          ))}
        </S.AlbumExplainDiv>

        <S.AlbumExplainLikeDiv>
          <S.AlbumLikeImg
            src={liked ? HeartOn : HeartOff}
            alt="heart"
            onClick={() => toggleLike()}
            $isAnimating={isAnimating}
          />
          <S.AlbumExplainP fontWeight={400} fontSize="1.2rem" color="gray2">
            {likes}
          </S.AlbumExplainP>
        </S.AlbumExplainLikeDiv>
      </S.AlbumExplainInnerContainer>
    </S.AlbumExplainContainer>
  );
};

export default AlbumExplain;
