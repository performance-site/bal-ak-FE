export interface SetListItem {
  order: number;
  title: string;
  artist: string;
  performanceSongId: number;
}

export interface SetListResponse {
  isSuccess: boolean;
  code: string;
  httpStatus: number;
  message: string;
  data: {
    nowPlayingOrder: number;
    setlist: SetListItem[];
  };
  timeStamp: string;
}
