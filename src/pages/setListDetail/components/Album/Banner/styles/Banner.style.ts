import styled from 'styled-components';

export const BannerContainer = styled.img`
  width: 100%;
  min-height: 22.1rem;
  max-height: 22.1rem;
  object-fit: cover;
  border-radius: 0 0 1.2rem 1.2rem;
  filter: blur(0.4rem) brightness(0.75);
  box-shadow: ${({ theme }) => theme.shadows.album};
`;
