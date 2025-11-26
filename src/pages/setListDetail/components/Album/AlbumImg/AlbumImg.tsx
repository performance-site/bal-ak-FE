import * as S from './styles/AlbumImg.style';
import type { Track } from '../../../../../types/setListDetail/setListDetail.type';

interface AlbumImgProps {
  track: Track;
}

const AlbumImg = ({ track }: AlbumImgProps) => {
  return <S.AlbumImgContainer imageUrl={track?.albumImgUrl} />;
};

export default AlbumImg;
