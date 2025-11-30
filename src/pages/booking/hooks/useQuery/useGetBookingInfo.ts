import { useQuery } from '@tanstack/react-query';
import { BookingInfoResponse } from '../../../../types/booking/booking.type';
import { getBookingInfo } from '../../../../apis/booking/booking';
import { ApiEnvelope } from '../../../../types/api.type';
import { PERFORMANCE_ID } from '../../../../config/performance';

export const useGetBookingInfo = () => {
  return useQuery<ApiEnvelope<BookingInfoResponse>>({
    queryKey: ['bookingLink', PERFORMANCE_ID],
    queryFn: () => getBookingInfo(PERFORMANCE_ID),
  });
};
