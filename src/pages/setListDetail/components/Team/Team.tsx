import type { TeamMember } from '../../../../types/setListDetail/setListDetail.type';
import * as S from './styles/team.style';
import ListTeam from './LIstTeam/ListTeam';

interface TeamProps {
  team: TeamMember[];
}

const Team = ({ team }: TeamProps) => {
  return (
    <S.TeamContainer>
      <ListTeam team={team} />
    </S.TeamContainer>
  );
};

export default Team;
