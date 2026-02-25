import * as S from './styles/SetList.style';
import PageTitle from './components/PageTitle/PageTitle';
import List from './components/List/List';
import { useGetListData } from './hooks/useQuery/useGetListData';
import Spinner from '../../components/Spinner/Spinner';
import { useState } from 'react';

const SetList = () => {
  const [listKey] = useState(0);
  const { data, isLoading } = useGetListData();
  // console.log(data);

  const list = data?.data?.setlist ?? [];

  if (isLoading)
    return (
      <S.SpinnerContainer>
        <Spinner />
      </S.SpinnerContainer>
    );

  return (
    <S.SetListContainer>
      <PageTitle />
      <List key={listKey} data={list} />

      <S.ListBar />
    </S.SetListContainer>
  );
};

export default SetList;
