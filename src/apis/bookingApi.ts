import { ApiEnvelope, ApiEnvelopeNullable } from '../types/api.type';
import { BookingInfoResponse } from '../types/booking/booking.type';
import apiInstance from './axios/instance';

export interface BookingRequest {
  name: string;
  phoneNumber: string;
  headCount: number;
}

export const postBooking = async (
  performanceId: number = 1,
  body: BookingRequest,
): Promise<ApiEnvelopeNullable<null>> => {
  const res = await apiInstance.post<ApiEnvelopeNullable<null>>(
    `api/performances/${performanceId}/bookings`,
    body,
  );
  return res.data;
};

export const getBookingInfo = async (
  performanceId: number,
): Promise<ApiEnvelope<BookingInfoResponse>> => {
  const res = await apiInstance.get<ApiEnvelope<BookingInfoResponse>>(
    `api/performances/${performanceId}/inquiry`,
  );
  return res.data;
};
