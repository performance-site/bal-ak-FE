import * as S from './styles/SetListDetail.style';
import { useState } from 'react';
import { SetListDetailData } from '../../mocks/setListDetail/setListDetailData';
import Banner from './components/Album/Banner/Banner';
import AlbumImg from './components/Album/AlbumImg/AlbumImg';
import AlbumExplain from './components/Album/AlbumExplain/AlbumExplain';
import AlbumTap from './components/Button/AlbumTap/AlbumTap';
import Song from './components/Song/Song';
import Team from './components/Team/Team';

const SetListDetail = () => {
  const { track, song, team } = SetListDetailData[0];
  const [selectedTab, setSelectedTab] = useState<'song' | 'team'>('song');

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
