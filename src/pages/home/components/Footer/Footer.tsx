import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2.2rem 2.4rem;
  color: white;
  position: absolute;
  top: 200rem;
  background: linear-gradient(
    to bottom,
    rgba(156, 69, 169, 0.2),
    rgba(34, 23, 41, 0.4),
    rgba(0, 0, 0, 0.3)
  );
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 0.8fr 1.3fr;

  & > *:nth-child(1) {
    margin-right: 3rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-size: 0.7rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Email = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.7rem;
  opacity: 0.9;
`;

const InfoText = styled.p`
  font-size: 0.7rem;
  margin: 0;
  opacity: 0.9;
`;

const TeamList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const TeamMember = styled.p`
  font-size: 0.7rem;
  margin: 0;
  opacity: 0.9;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <Title>CONTACT US</Title>
          <Description>
            공연 웹사이트 제작이 필요하면 편하게 연락주세요!
            <br />
            Interested in making your own band concert website?
            <br />
            Get in touch with us!
          </Description>
          <ContactInfo>
            <Email href="mailto:hjnee222@gmail.com">hjnee222@gmail.com</Email>
            <Email href="mailto:cys990922@naver.com">cys990922@naver.com</Email>
          </ContactInfo>
        </Section>

        <Section>
          <Title>UNIV.</Title>
          <InfoText>한성대학교</InfoText>

          <Title style={{ marginTop: '1rem' }}>CLUB</Title>
          <InfoText>중앙노래패 들불</InfoText>
        </Section>

        <Section>
          <Title>TEAM</Title>
          <TeamList>
            <TeamMember>PM 김해진</TeamMember>
            <TeamMember>DESIGN 최유성</TeamMember>
            <TeamMember>FE 김서희 양인서 우정혁 김예나</TeamMember>
            <TeamMember>BE 김해진 김주호 이동건</TeamMember>
            <TeamMember>SUPPORT 임종욱</TeamMember>
          </TeamList>
        </Section>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
