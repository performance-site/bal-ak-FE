import { useQuery } from '@tanstack/react-query';
import { getSetList } from '../../../../apis/setList/setList';
import type { SetListResponse } from '../../../../types/setList/setList.type';

export const useGetListData = () => {
  return useQuery<SetListResponse>({
    queryKey: ['setList', 1],
    queryFn: async () => {
      const res = await getSetList();
      return res.data;
    },
    staleTime: 1000 * 60,
    refetchInterval: 7000,
    refetchIntervalInBackground: true,
  });
};
