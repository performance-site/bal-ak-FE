import styled from 'styled-components';
import theme from '../../../../../styles/theme';

export const SectionInfo = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 2.4rem;
  color: ${theme.colors.black};
`;

export const SectionTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  margin-bottom: 0.2rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`;
