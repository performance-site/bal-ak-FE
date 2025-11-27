import { useMutation } from '@tanstack/react-query';
import { ApiEnvelopeNullable } from '../../../../types/api.type';
import { postBooking } from '../../../../apis/bookingApi';

type BookingRequest = {
  name: string;
  phoneNumber: string;
  headCount: number;
};

export const usePostBooking = (performanceId: number = 1) => {
  return useMutation<ApiEnvelopeNullable<null>, unknown, BookingRequest>({
    mutationFn: (body) => postBooking(performanceId, body),
  });
};
