import * as S from './styles/SetList.style';
import PageTitle from './components/PageTitle/PageTitle';
import List from './components/List/List';
import { useGetListData } from './hooks/useQuery/useGetListData';
import Spinner from '../../components/Spinner/Spinner';
import { useEffect, useState } from 'react';

const SetList = () => {
  useEffect(() => {
    document.title = '셋리스트 - 들불';
  }, []);

  const [listKey, setListKey] = useState(0);
  const { data, isLoading } = useGetListData();
  // console.log(data);

  const list = data?.data?.setlist ?? [];
  const nowPlayingOrder = data?.data?.nowPlayingOrder ?? -1;

  if (isLoading)
    return (
      <S.SpinnerContainer>
        <Spinner />
      </S.SpinnerContainer>
    );

  return (
    <S.SetListContainer>
      <PageTitle />
      <List key={listKey} data={list} nowPlayingOrder={nowPlayingOrder} />

      <S.ListBar />
    </S.SetListContainer>
  );
};

export default SetList;
