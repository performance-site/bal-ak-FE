export const getYoutubeVideoId = (url: string): string | null => {
  const regex = /(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})(?:[?&]|$)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export const getYoutubeEmbedUrl = (url: string): string | null => {
  const videoId = getYoutubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};
