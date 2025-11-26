import { useQuery } from '@tanstack/react-query';
import { BookingLinkResponse } from '../../../../types/booking/booking.type';
import { getBookingLink } from '../../../../apis/bookingApi';

export const useGetBookingLink = () => {
  return useQuery<BookingLinkResponse>({
    queryKey: ['bookingLink', 1],
    queryFn: async () => {
      const res = await getBookingLink(1);
      return res.data;
    },
  });
};
