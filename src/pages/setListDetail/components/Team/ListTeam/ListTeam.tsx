import type { TeamMember } from '../../../../../types/setListDetail/setListDetail.type';
import * as S from './styles/ListTeam.style';
import ItemTeam from '../ItemTeam/ItemTeam';

interface ListTeamProps {
  team: TeamMember[];
}

const ListTeam = ({ team }: ListTeamProps) => {
  return (
    <S.ListTeamContainer>
      {team.map((member, index) => (
        <ItemTeam key={index} member={member} />
      ))}
    </S.ListTeamContainer>
  );
};

export default ListTeam;
