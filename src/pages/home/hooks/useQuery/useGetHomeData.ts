import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import homeFetchData from '../../../../apis/home/home';
import { useHomeStore } from '../../../../store/homeStore/homeStore';
import { HomeData } from '../../../../types/home/home.type';

const useGetHomeData = () => {
  const { setHomeData } = useHomeStore();

  const query = useQuery<HomeData>({
    queryKey: ['homeData'],
    queryFn: homeFetchData,
    staleTime: 1 * 60 * 1000,
    refetchInterval: 1 * 60 * 1000,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (query.data) {
      setHomeData(query.data);
    }
  }, [query.data, setHomeData]);

  useEffect(() => {
    if (query.error) {
      console.error('데이터 로딩 실패:', query.error);
    }
  }, [query.error]);

  return query;
};

export default useGetHomeData;
