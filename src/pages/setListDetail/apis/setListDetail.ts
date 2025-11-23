import apiInstance from '../../../apis/axios/instance';

export const getSetListDetail = (performanceSongId: number) => {
  return apiInstance.get(`/api/tracks/${performanceSongId}`);
};
