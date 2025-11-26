import * as S from './styles/AlbumImg.style';
import type { Track } from '../../../../../types/setListDetail/setListDetail.type';
import DefaultImg from '../../../../../assets/images/default_img.png';

interface AlbumImgProps {
  track: Track;
}

const AlbumImg = ({ track }: AlbumImgProps) => {
  return (
    <S.AlbumImgContainer
      src={track?.albumImgUrl || DefaultImg}
      alt={track?.title || 'album image'}
    />
  );
};

export default AlbumImg;
