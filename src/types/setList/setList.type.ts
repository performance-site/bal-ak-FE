import { ApiEnvelope } from '../api.type';

export interface SetListItem {
  order: number;
  title: string;
  artist: string;
  performanceSongId: number;
}

export interface SetListData {
  setListUrl: string;
  setlist: SetListItem[];
}

export type SetListResponse = ApiEnvelope<SetListData>;
