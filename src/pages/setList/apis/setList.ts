import apiInstance from '../../../apis/axios/instance';

export const getSetList = (performanceId: number = 1) => {
  return apiInstance.get(`/api/performances/${performanceId}/setlist`);
};
