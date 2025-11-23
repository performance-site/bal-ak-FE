import apiInstance from '../../../apis/axios/instance';

export const getBookingLink = (performanceId: number = 1) => {
  return apiInstance.get(`api/performances/${performanceId}/inquiry`);
};
