import type { TeamMember } from '../../../../../types/setListDetail/setListDetail.type';
import * as S from './styles/ItemTeam.style';
import ProfileImg from '../../../../../assets/images/setListDetail/profileImg.png';

interface ItemTeamProps {
  member: TeamMember;
  isVocal: boolean;
}

const ItemTeam = ({ member, isVocal }: ItemTeamProps) => {
  return (
    <S.ItemTeamContainer>
      <S.ItemTeamProfileDiv $isVocal={isVocal}>
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
