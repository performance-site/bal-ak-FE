import apiInstance from '../../../apis/axios/instance';

export const postLike = (performanceSongId: number, liked: boolean) => {
  return apiInstance.post(`/api/tracks/${performanceSongId}/like`, {
    liked,
  });
};
