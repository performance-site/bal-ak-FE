export interface LikeResponse {
  isSuccess: boolean;
  code: string;
  httpStatus: number;
  message: string;
  data: {
    likes: number;
    liked: boolean;
  };
  timeStamp: string;
}
