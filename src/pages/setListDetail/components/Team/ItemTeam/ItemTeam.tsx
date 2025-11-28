import type { TeamMember } from '../../../../../types/setListDetail/setListDetail.type';
import * as S from './styles/ItemTeam.style';
import ProfileImg from '../../../../../assets/images/setListDetail/profileImg.png';

interface ItemTeamProps {
  member: TeamMember;
}

const ItemTeam = ({ member }: ItemTeamProps) => {
  return (
    <S.ItemTeamContainer>
      <S.ItemTeamProfileDiv>
        <S.ItemTeamProfileImg
          src={ProfileImg}
          alt="profile"
          loading="eager"
          decoding="async"
          draggable={false}
        />
      </S.ItemTeamProfileDiv>
      <S.ItemTeamP>
        {member.session} | {member.name} <br />
        {member.instagramId}
      </S.ItemTeamP>
    </S.ItemTeamContainer>
  );
};

export default ItemTeam;
