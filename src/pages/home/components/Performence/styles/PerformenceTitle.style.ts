import styled from 'styled-components';
import theme from '../../../../../styles/theme';

export const PerformenceTitleContainer = styled.div`
  width: 100%;
  height: 8.1rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(12.5px);
  justify-content: center;
  align-items: center;
  box-shadow:
    1px 1px 1px 0px #969696 inset,
    -1px -1px 1px 0px #aaa inset,
    0 4px 12px 0 rgba(4, 0, 250, 0.06);
`;

export const PerformenceTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
`;

export const PerformenceSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${theme.colors.gray2};
`;
