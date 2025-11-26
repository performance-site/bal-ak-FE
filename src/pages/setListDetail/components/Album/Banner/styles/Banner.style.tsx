import styled from 'styled-components';

export const Banner = styled.div<{ imageUrl?: string }>`
  width: 100%;
  min-height: 22.1rem;
  max-height: 22.1rem;

  background: ${({ imageUrl, theme }) =>
    imageUrl
      ? `url(${imageUrl}) center / cover no-repeat`
      : theme.colors.black};

  border-radius: 0 0 1.2rem 1.2rem;
  opacity: 0.75;
  box-shadow: ${({ theme }) => theme.shadows.default};
`;
