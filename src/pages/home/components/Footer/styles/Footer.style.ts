import styled from 'styled-components';
import theme from '../../../../../styles/theme';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2.2rem 2.4rem;
  color: white;
  background: ${theme.gradients.linear1};
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${theme.colors.black};
`;

export const Description = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  color: ${theme.colors.gray700};
  white-space: pre-line;
`;

export const ContactInfo = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  color: ${theme.colors.gray700};
`;

export const Email = styled.a`
  text-decoration: none;
`;

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TeamMember = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${theme.colors.gray700};
`;
