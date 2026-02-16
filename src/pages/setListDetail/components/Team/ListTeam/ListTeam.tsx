import type { TeamMember } from '../../../../../types/setListDetail/setListDetail.type';
import * as S from './styles/ListTeam.style';
import ItemTeam from '../ItemTeam/ItemTeam';

interface ListTeamProps {
  team: TeamMember[];
}

const ListTeam = ({ team }: ListTeamProps) => {
  const hasTeam = team && team.length > 0;

  return (
    <S.ListTeamContainer>
      {hasTeam ? (
        team.map((member, index) => <ItemTeam key={index} member={member} />)
      ) : (
        <p style={{ gridColumn: '1 / -1' }}>팀 정보가 없습니다.</p>
      )}
    </S.ListTeamContainer>
  );
};

export default ListTeam;
