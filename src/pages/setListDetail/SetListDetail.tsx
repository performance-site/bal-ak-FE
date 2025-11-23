import * as S from './styles/SetListDetail.style';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetTrackData } from './hooks/useQuery/useGetTrackData';
import Banner from './components/Album/Banner/Banner';
import AlbumImg from './components/Album/AlbumImg/AlbumImg';
import AlbumExplain from './components/Album/AlbumExplain/AlbumExplain';
import AlbumTap from './components/Button/AlbumTap/AlbumTap';
import Song from './components/Song/Song';
import Team from './components/Team/Team';

const SetListDetail = () => {
  const { id: performanceSongId } = useParams<{ id: string }>();
  const { data, isLoading } = useGetTrackData(Number(performanceSongId));
  const [selectedTab, setSelectedTab] = useState<'song' | 'team'>('song');

  // 백엔드 더미데이터가 다 Null이라 추후 다시 확인 예정
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>데이터 없음</div>;

  const { track, team, song } = data;

  return (
    <S.SetListDetailContainer className="scroll">
      <Banner track={track} />
      <AlbumImg track={track} />

      <S.SetListDetailInnerContainer>
        <AlbumExplain track={track} />

        <AlbumTap onTabChange={setSelectedTab} />

        {selectedTab === 'song' ? <Song song={song} /> : <Team team={team} />}
      </S.SetListDetailInnerContainer>
    </S.SetListDetailContainer>
  );
};

export default SetListDetail;
