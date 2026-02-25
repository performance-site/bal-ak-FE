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
import Spinner from '../../components/Spinner/Spinner';

const SetListDetail = () => {
  const { id: performanceSongId } = useParams<{ id: string }>();
  const { data, isLoading } = useGetTrackData(Number(performanceSongId));
  const [selectedTab, setSelectedTab] = useState<'song' | 'team'>('song');
  console.log(data);

  if (isLoading || !data)
    return (
      <S.SpinnerContainer>
        <Spinner />
      </S.SpinnerContainer>
    );

  const { track, team } = data.data;

  return (
    <S.Background $tab={selectedTab}>
      <S.SetListDetailContainer className="scroll">
        <Banner track={track} />
        <AlbumImg track={track} />

        <S.SetListDetailInnerContainer>
          <AlbumExplain track={track} />

          <AlbumTap onTabChange={setSelectedTab} />

          {selectedTab === 'song' ? (
            <Song song={track} />
          ) : (
            <Team team={team} />
          )}
        </S.SetListDetailInnerContainer>
      </S.SetListDetailContainer>
    </S.Background>
  );
};

export default SetListDetail;
