import type { Track } from '../../../../types/setListDetail/setListDetail.type';
import * as S from './styles/Song.style';
import Youtube from './Youtube/Youtube';

interface SongProps {
  song: Track;
}

const Song = ({ song }: SongProps) => {
  const formattedLyrics = song?.lyrics
    ?.replace(/\\r\\n/g, '\n')
    ?.replace(/\\n/g, '\n')
    ?.replace(/\\r/g, '\n');

  return (
    <S.SongContainer>
      <Youtube youtubeUrl={song?.youtubeUrl} />
      <S.SongP>{formattedLyrics}</S.SongP>
    </S.SongContainer>
  );
};

export default Song;
