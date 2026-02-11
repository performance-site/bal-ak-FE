import apiInstance from '../axios/instance';

export const getSetListDetail = async (performanceSongId: number) => {
  const res = await apiInstance.get(`/api/tracks/${performanceSongId}`);
  return res;
};
