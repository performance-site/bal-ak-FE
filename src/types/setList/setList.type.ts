import { ApiEnvelope } from '../api.type';

export interface SetListItem {
  order: number;
  title: string;
  artist: string;
  performanceSongId: number;
}

export interface SetListData {
  nowPlayingOrder: number;
  setlist: SetListItem[];
}

export interface SetListResponse extends ApiEnvelope<SetListData> {}
