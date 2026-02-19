import styled from 'styled-components';

export const AlbumImgContainer = styled.img`
  width: 16.4rem;
  height: 16.2rem;
  border-radius: 0.8rem;
  position: absolute;
  top: 8.8rem;
  left: 2.4rem;
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.shadows.poster}; // 색 변경 예정
`;
