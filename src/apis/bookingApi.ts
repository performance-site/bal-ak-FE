import apiInstance from './axios/instance';

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

export const getBookingInfo = (performanceId: number = 1) => {
  return apiInstance.get(`api/performances/${performanceId}/inquiry`);
};
