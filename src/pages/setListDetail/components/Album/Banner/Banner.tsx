import * as S from './styles/banner.style';
import type { Track } from '../../../../../types/setListDetail/setListDetail.type';

interface BannerProps {
  track: Track;
}

const Banner = ({ track }: BannerProps) => {
  return <S.BannerImg src={track.albumImgUrl} alt="banner" />;
};

export default Banner;
