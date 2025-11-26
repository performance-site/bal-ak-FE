import { useQuery } from '@tanstack/react-query';
import { getSetListDetail } from '../../../../apis/setListDetail/setListDetail';
import type { SetListDetailResponse } from '../../../../types/setListDetail/setListDetail.type';

export const useGetTrackData = (performanceSongId: number) => {
  return useQuery<SetListDetailResponse>({
    queryKey: ['setListDetail', performanceSongId],

    queryFn: async () => {
      const res = await getSetListDetail(performanceSongId);
      return res.data;
    },
    enabled: !!performanceSongId,
  });
};
