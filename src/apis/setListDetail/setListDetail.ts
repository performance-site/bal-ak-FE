import apiInstance from '../axios/instance';

export const getSetListDetail = (performanceSongId: number) => {
  return apiInstance.get(`/api/tracks/${performanceSongId}`);
};
