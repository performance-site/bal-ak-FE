// Link 타입 정의 (moreLinks 배열의 요소)
export type LinkType = 'INSTAGRAM' | 'YOUTUBE' | 'GOODS' | 'EVENT_NOTICE';

export interface MoreLink {
  type: LinkType;
  name: string;
  url: string;
}

export interface HomeData {
  currentSongAlbumUrl: string | null;
  currentSongArtist: string;
  currentSongTitle: string;
  dateTime: string;
  description: string;
  imageUrls: string[];
  location: string;
  moreLinks: MoreLink[];
  openchatUrl: string;
  performanceId: number;
  posterUrls: string[];
  subtitle: string;
  title: string;
  venue: string;
  websiteDescription: string;
  websiteName: string;
}
