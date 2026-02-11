import apiInstance from '../axios/instance';

export const postLike = async (performanceSongId: number, liked: boolean) => {
  const res = await apiInstance.post(`/api/tracks/${performanceSongId}/like`, {
    liked,
  });
  return res;
};
