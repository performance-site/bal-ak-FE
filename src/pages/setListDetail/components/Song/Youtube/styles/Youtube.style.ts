import styled from 'styled-components';

export const YoutubeIframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadows.purple2};
  overflow: hidden;
`;
