export const getYoutubeVideoId = (
  url: string | null | undefined,
): string | null => {
  if (!url) return null;

  const regex = /(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})(?:[?&]|$)/;
  const match = url.match(regex);

  return match ? match[1] : null;
};

export const getYoutubeEmbedUrl = (
  url: string | null | undefined,
): string | null => {
  const videoId = getYoutubeVideoId(url);

  if (!videoId) return null;

  return `https://www.youtube.com/embed/${videoId}`;
};
