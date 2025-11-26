import styled from 'styled-components';

export const AlbumImgContainer = styled.div<{ imageUrl?: string }>`
  width: 16.4rem;
  height: 16.2rem;
  border-radius: 0.8rem;
  position: absolute;
  top: 8.8rem;
  left: 2.4rem;

  background: ${({ imageUrl, theme }) =>
    imageUrl
      ? `url(${imageUrl}) center / cover no-repeat`
      : theme.colors.white};

  box-shadow: ${({ theme }) => theme.shadows.purple};
`;
