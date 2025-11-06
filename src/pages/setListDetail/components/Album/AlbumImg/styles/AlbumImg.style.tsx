import styled from 'styled-components';

export const AlbumImgContainer = styled.img`
  width: 16.4rem;
  height: 16.2rem;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 8.8rem;
  left: 2.4rem;
  shadow: ${({ theme }) => theme.shadows.purple};
`;
