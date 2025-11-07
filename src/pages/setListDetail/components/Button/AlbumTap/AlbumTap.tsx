import { useState } from 'react';
import * as S from './styles/AlbumTap.style';

interface AlbumTapProps {
  onTabChange: (tab: 'song' | 'team') => void;
}

const AlbumTap = ({ onTabChange }: AlbumTapProps) => {
  const [activeTab, setActiveTab] = useState<'song' | 'team'>('song');

  const handleTabClick = (tab: 'song' | 'team') => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <S.AlbumTapContainer>
      <S.AlbumTapDiv
        $active={activeTab === 'song'}
        $position="left"
        onClick={() => handleTabClick('song')}
      >
        곡 정보
      </S.AlbumTapDiv>

      <S.AlbumTapDiv
        $active={activeTab === 'team'}
        $position="right"
        onClick={() => handleTabClick('team')}
      >
        팀 정보
      </S.AlbumTapDiv>
    </S.AlbumTapContainer>
  );
};

export default AlbumTap;
