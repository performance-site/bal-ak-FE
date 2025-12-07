import styled from 'styled-components';
import theme from '../../../../../styles/theme';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2.2rem 2.4rem;
  color: white;
  position: absolute;
  top: 200rem;
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
    linear-gradient(
      180deg,
      rgba(156, 69, 169, 0.2) 0%,
      rgba(34, 23, 41, 0.4) 100%
    );
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 0.8fr 1.3fr;

  & > *:nth-child(1) {
    margin-right: 3rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${theme.colors.gray6};
`;

export const Description = styled.p`
  font-size: 0.7rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  color: ${theme.colors.gray8};
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Email = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.7rem;
  opacity: 0.9;
  color: ${theme.colors.gray8};
`;

export const InfoText = styled.p`
  font-size: 0.7rem;
  margin: 0;
  opacity: 0.9;
  color: ${theme.colors.gray8};
`;

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  color: ${theme.colors.gray8};
`;

export const TeamMember = styled.p`
  font-size: 0.7rem;
  margin: 0;
  opacity: 0.9;
`;
