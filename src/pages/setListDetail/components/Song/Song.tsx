import type { Song } from '../../../../types/setListDetail/setListDetail.type';
import * as S from './styles/song.style';
import Youtube from './Youtube/Youtube';

interface SongProps {
  song: Song;
}

const Song = ({ song }: SongProps) => {
  return (
    <S.SongContainer>
      <Youtube youtubeUrl={song.youtubeUrl} />
      <S.SongP>{song.lyrics}</S.SongP>
    </S.SongContainer>
  );
};

export default Song;
