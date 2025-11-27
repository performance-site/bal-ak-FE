import { useQuery } from '@tanstack/react-query';
import { BookingInfoResponse } from '../../../../types/booking/booking.type';
import { getBookingInfo } from '../../../../apis/bookingApi';
import { ApiEnvelope } from '../../../../types/api.type';

export const useGetBookingInfo = () => {
  return useQuery<ApiEnvelope<BookingInfoResponse>>({
    queryKey: ['bookingLink', 1],
    queryFn: () => getBookingInfo(1),
  });
};
