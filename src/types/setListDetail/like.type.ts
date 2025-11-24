import { ApiEnvelope } from '../api.type';

export interface LikeData {
  likes: number;
  liked: boolean;
}

export interface LikeResponse extends ApiEnvelope<LikeData> {}
