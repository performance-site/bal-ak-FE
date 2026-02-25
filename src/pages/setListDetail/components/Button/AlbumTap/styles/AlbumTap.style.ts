import styled from 'styled-components';

export const AlbumTapContainer = styled.div`
  width: 100%;
  height: 2.9rem;
  display: flex;
  align-items: center;
`;

export const AlbumTapDiv = styled.div<{
  $active?: boolean;
  $position: 'left' | 'right';
}>`
  flex: 1;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.gray100 : theme.colors.black};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.black : 'transparent'};
  cursor: pointer;
  overflow: hidden;

  ${({ $position }) =>
    $position === 'left'
      ? `
        border-top-left-radius: 1.8rem;
        border-bottom-left-radius: 1.8rem;
      `
      : `
        border-top-right-radius: 1.8rem;
        border-bottom-right-radius: 1.8rem;
      `}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 0.1rem;
    background: ${({ theme }) => theme.colors.black};
    -webkit-mask:
      linear-gradient(${({ theme }) => theme.colors.white} 0 0) content-box,
      linear-gradient(${({ theme }) => theme.colors.white} 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;
