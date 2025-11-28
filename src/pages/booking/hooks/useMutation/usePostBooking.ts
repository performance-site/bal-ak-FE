import { useMutation } from '@tanstack/react-query';
import { ApiEnvelopeNullable } from '../../../../types/api.type';
import { postBooking } from '../../../../apis/bookingApi';
import { PERFORMANCE_ID } from '../../../../config/performance';

type BookingRequest = {
  name: string;
  phoneNumber: string;
  headCount: number;
};

export const usePostBooking = (performanceId: number = PERFORMANCE_ID) => {
  return useMutation<ApiEnvelopeNullable<null>, unknown, BookingRequest>({
    mutationFn: (body) => postBooking(performanceId, body),
  });
};
