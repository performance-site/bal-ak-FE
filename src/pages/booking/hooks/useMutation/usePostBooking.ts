import { useMutation } from '@tanstack/react-query';
import { ApiEnvelopeNullable } from '../../../../types/api.type';
import { postBooking } from '../../../../apis/booking/booking';
import { PERFORMANCE_ID } from '../../../../config/performance';

type BookingRequest = {
  name: string;
  phoneNumber: string;
  headCount: number;
  paymentMethod: string;
};

export const usePostBooking = (performanceId: number = PERFORMANCE_ID) => {
  return useMutation<ApiEnvelopeNullable<null>, unknown, BookingRequest>({
    mutationFn: (body) => postBooking(performanceId, body),
  });
};
