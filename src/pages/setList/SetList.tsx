import * as S from './styles/SetList.style';
import PageTitle from './components/PageTitle/PageTitle';
import List from './components/List/List';
import RefreshButton from './components/RefreshButton/RefreshButton';
import { useGetListData } from './hooks/useQuery/useGetListData';
import Spinner from '../../components/Spinner/Spinner';
import { useEffect, useState } from 'react';

const SetList = () => {
  useEffect(() => {
    document.title = '셋리스트 - 들불';
  }, []);

  const [listKey, setListKey] = useState(0);
  const { data, isLoading, refetch } = useGetListData();
  // console.log(data);

  const list = data?.data?.setlist ?? [];
  const url = data?.data?.setListUrl ?? '';
  const nowPlayingOrder = data?.data?.nowPlayingOrder ?? -1;

  const handleRefresh = () => {
    setListKey((prev) => prev + 1);
    refetch();
  };

  if (isLoading)
    return (
      <S.SpinnerContainer>
        <Spinner />
      </S.SpinnerContainer>
    );

  return (
    <S.SetListContainer>
      <PageTitle data={url} />
      <List key={listKey} data={list} nowPlayingOrder={nowPlayingOrder} />
      <RefreshButton onClick={handleRefresh} />

      <S.ListBar />
    </S.SetListContainer>
  );
};

export default SetList;
