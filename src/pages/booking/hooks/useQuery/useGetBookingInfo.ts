import { useQuery } from '@tanstack/react-query';
import { BookingLinkResponse } from '../../../../types/booking/booking.type';
import { getBookingInfo } from '../../../../apis/bookingApi';

export const useGetBookingInfo = () => {
  return useQuery<BookingLinkResponse>({
    queryKey: ['bookingLink', 1],
    queryFn: async () => {
      const res = await getBookingInfo(1);
      return res.data;
    },
  });
};
