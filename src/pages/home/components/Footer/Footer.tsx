import * as S from './styles/Footer.style';

function Footer() {
  return (
    <S.FooterContainer>
      <S.Section>
        <S.Title>CONTACT US</S.Title>
        <S.Description>
          {`공연 웹사이트 제작이 필요하면 편하게 연락주세요!\nInterested in making your own band concert website?\nGet in touch with us!`}
        </S.Description>
        <S.ContactInfo>
          <S.Email href="mailto:hjnee222@gmail.com">hjnee222@gmail.com</S.Email>
          <S.Email href="mailto:cys990922@naver.com">
            cys990922@naver.com
          </S.Email>
        </S.ContactInfo>
      </S.Section>

      <S.Section>
        <S.Title>TEAM</S.Title>
        <S.TeamList>
          <S.TeamMember>PM 김혜진</S.TeamMember>
          <S.TeamMember>DESIGN 최유성</S.TeamMember>
          <S.TeamMember>FE 김서희 양인서 우정혁 김예나</S.TeamMember>
          <S.TeamMember>BE 김혜진 김주호 이동건</S.TeamMember>
          <S.TeamMember>SUPPORT 임종욱</S.TeamMember>
        </S.TeamList>
      </S.Section>
    </S.FooterContainer>
  );
}

export default Footer;
