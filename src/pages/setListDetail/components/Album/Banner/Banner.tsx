import * as S from './styles/Banner.style';
import type { Track } from '../../../../../types/setListDetail/setListDetail.type';
import DefaultImg from '../../../../../assets/images/default_img.svg';

interface BannerProps {
  track: Track;
}

const Banner = ({ track }: BannerProps) => {
  return (
    <S.BannerContainer
      src={track?.albumImgUrl || DefaultImg}
      alt={track?.title || 'banner'}
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );
};

export default Banner;
