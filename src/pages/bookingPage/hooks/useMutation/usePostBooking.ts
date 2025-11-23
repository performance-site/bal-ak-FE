import { useMutation } from '@tanstack/react-query';
import { postBooking } from '../../apis/booking';
import { ApiEnvelopeNullable } from '../../../../types/api.type';

type BookingRequest = {
  name: string;
  phoneNumber: string;
  headCount: number;
};

export const usePostBooking = (performanceId: number = 1) => {
  return useMutation<ApiEnvelopeNullable<null>, unknown, BookingRequest>({
    mutationFn: async (body) => {
      const res = await postBooking(performanceId, body);
      return res.data;
    },
  });
};
