import * as S from './styles/Banner.style';
import type { Track } from '../../../../../types/setListDetail/setListDetail.type';
import DefaultImg from '../../../../../assets/images/default_img.png';

interface BannerProps {
  track: Track;
}

const Banner = ({ track }: BannerProps) => {
  return (
    <S.BannerContainer
      src={track?.albumImgUrl || DefaultImg}
      alt={track?.title || 'banner'}
    />
  );
};

export default Banner;
