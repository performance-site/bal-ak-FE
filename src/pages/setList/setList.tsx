import { useEffect, useState } from 'react';
import * as S from './styles/setList.style';
import PageTitle from './components/PageTitle/PageTitle';
import List from './components/List/List';
import RefreshButton from './components/RefreshButton/RefreshButton';
import { SetListData } from '../../mocks/setList/setListData';
import { SetListItem } from '../../types/setList/setList.type';

const SetList = () => {
  const [list, setList] = useState<SetListItem[]>([]);
  const [currentOrder, setCurrentOrder] = useState<number>(0);

  // 추후 수정
  const fetchSetList = async () => {
    try {
      setList(SetListData);
    } catch (error) {
      console.error('Setlist 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchSetList();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOrder((prev) => {
        if (prev >= SetListData.length - 1) return 0;
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    fetchSetList();
  };

  return (
    <S.SetListContainer>
      <PageTitle />
      <List data={list} currentOrder={currentOrder} />
      <RefreshButton onClick={handleRefresh} />

      <S.ListBar />
    </S.SetListContainer>
  );
};

export default SetList;
