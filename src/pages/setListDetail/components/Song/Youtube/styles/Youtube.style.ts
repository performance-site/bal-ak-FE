import styled from 'styled-components';

export const YoutubeIframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadows.youtube};
  overflow: hidden;
`;

export const YoutubeNoText = styled.p`
  text-align: center;
  color: ${({theme}) => theme.colors.black};
`
