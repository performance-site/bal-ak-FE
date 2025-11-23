import { useQuery } from '@tanstack/react-query';
import { getSetListDetail } from '../../apis/setListDetail';
import type { SetListDetail } from '../../../../types/setListDetail/setListDetail.type';

export const useGetTrackData = (performanceSongId: number) => {
  return useQuery<SetListDetail>({
    queryKey: ['setListDetail', performanceSongId],

    queryFn: async () => {
      const res = await getSetListDetail(performanceSongId);

      const track = res.data.data.track;
      const team = res.data.data.team;

      return {
        track,
        team,

        song: {
          youtubeUrl: track.youtubeUrl,
          lyrics: track.lyrics,
        },
      };
    },
    enabled: !!performanceSongId,
  });
};
