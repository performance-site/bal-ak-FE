import * as S from './styles/SetList.style';
import PageTitle from './components/PageTitle/PageTitle';
import List from './components/List/List';
import RefreshButton from './components/RefreshButton/RefreshButton';
import { useGetListData } from './hooks/useQuery/useGetListData';

const SetList = () => {
  const { data, isLoading, refetch } = useGetListData();
  console.log(data?.data?.setlist);

  const list = data?.data?.setlist ?? [];
  const nowPlayingOrder = data?.data?.nowPlayingOrder ?? 0;

  const handleRefresh = () => {
    refetch();
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <S.SetListContainer>
      <PageTitle />
      <List data={list} nowPlayingOrder={nowPlayingOrder} />
      <RefreshButton onClick={handleRefresh} />

      <S.ListBar />
    </S.SetListContainer>
  );
};

export default SetList;
