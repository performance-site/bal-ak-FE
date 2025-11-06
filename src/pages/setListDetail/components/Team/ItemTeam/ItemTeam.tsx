import type { TeamMember } from '../../../../../types/setListDetail/setListDetail.type';
import * as S from './styles/itemTeam.style';
import ProfileImg from '../../../../../assets/images/setListDetail/profileImg.svg';

interface ItemTeamProps {
  member: TeamMember;
}

const ItemTeam = ({ member }: ItemTeamProps) => {
  return (
    <S.ItemTeamContainer>
      <S.ItemTeamProfileImg src={ProfileImg} alt="profile" />
      <S.ItemTeamP>
        {member.session} | {member.name} <br />
        {member.instagramId}
      </S.ItemTeamP>
    </S.ItemTeamContainer>
  );
};

export default ItemTeam;
