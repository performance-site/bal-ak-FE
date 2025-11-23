import apiInstance from '../../../apis/axios/instance';

export const postBooking = (
  performanceId: number = 1,
  body: {
    name: string;
    phoneNumber: string;
    headCount: number;
  },
) => {
  return apiInstance.post(`api/performances/${performanceId}/bookings`, body);
};
