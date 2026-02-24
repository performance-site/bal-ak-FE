import * as S from './styles/Youtube.style';
import { getYoutubeEmbedUrl } from '../../../../../utils/setListDetail/youtube/youtube';

interface YoutubeProps {
  youtubeUrl: string;
}

const Youtube = ({ youtubeUrl }: YoutubeProps) => {
  const embedUrl = getYoutubeEmbedUrl(youtubeUrl);

  return (
    <>
      {embedUrl ? (
        <S.YoutubeIframe
          src={embedUrl}
          title="YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <S.YoutubeNoText>유효한 유튜브 링크가 아닙니다.</S.YoutubeNoText>
      )}
    </>
  );
};

export default Youtube;
