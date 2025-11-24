import { ApiEnvelope } from '../api.type';

export interface Track {
  likes: number;
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseDate: string;
  albumImgUrl: string;
  youtubeUrl: string;
  lyrics: string;
}

export interface TeamMember {
  session: string;
  name: string;
  instagramId: string | null;
}

export interface SetListDetailData {
  track: Track;
  team: TeamMember[];
}

export interface SetListDetailResponse extends ApiEnvelope<SetListDetailData> {}
