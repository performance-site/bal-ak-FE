import type { Track } from '../../../types/setListDetail/setListDetail.type';

export const getAlbumExplainList = (track: Track) => [
  { label: '앨범', value: track.album },
  { label: '발매일', value: track.releaseDate },
  { label: '장르', value: track.genre },
];
