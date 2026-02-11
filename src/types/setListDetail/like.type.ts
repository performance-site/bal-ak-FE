import { ApiEnvelope } from '../api.type';

export interface LikeData {
  likes: number;
  liked: boolean;
}

export type LikeResponse = ApiEnvelope<LikeData>;
