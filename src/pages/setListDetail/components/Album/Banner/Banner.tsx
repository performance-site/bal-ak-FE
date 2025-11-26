import * as S from './styles/Banner.style';
import type { Track } from '../../../../../types/setListDetail/setListDetail.type';

interface BannerProps {
  track: Track;
}

const Banner = ({ track }: BannerProps) => {
  return <S.Banner imageUrl={track?.albumImgUrl} />;
};

export default Banner;
