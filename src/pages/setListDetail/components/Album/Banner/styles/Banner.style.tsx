import styled from 'styled-components';

export const BannerImg = styled.img`
  width: 100%;
  min-height: 22.1rem;
  max-height: 22.1rem;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 0 0 1.2rem 1.2rem;
  opacity: 0.75;
  // filter: blur(0.4rem);
  box-shadow: ${({ theme }) => theme.shadows.default};
`;
