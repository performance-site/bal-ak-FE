import styled, { DefaultTheme, keyframes, css } from 'styled-components';

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const AlbumExplainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

export const AlbumExplainPWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
`;

export const AlbumExplainPInner = styled.div<{ $scroll?: boolean }>`
  display: flex;
  white-space: nowrap;
  width: max-content;

  ${({ $scroll }) =>
    $scroll &&
    css`
      animation: ${marquee} 10s linear infinite;
      animation-delay: 1s;
      animation-fill-mode: both;
    `}
`;

export const AlbumExplainP = styled.p<{
  color?: keyof DefaultTheme['colors'];
  fontSize?: string;
  fontWeight?: number;
}>`
  font-size: ${({ fontSize }) => fontSize || '2rem'};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  color: ${({ theme, color }) => theme.colors[color || 'gray6']};
  white-space: nowrap;
`;

export const AlbumExplainInnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AlbumExplainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .row {
    display: grid;
    grid-template-columns: 5rem 1fr;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: ${({ theme }) => theme.colors.gray2};
  }

  .span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const AlbumExplainLikeDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
`;

export const AlbumLikeImg = styled.img<{ $isAnimating: boolean }>`
  width: 3.432rem;
  height: 2.8rem;
  cursor: pointer;
  transition: transform 0.15s ease;

  transform: ${({ $isAnimating }) =>
    $isAnimating ? 'scale(1.2)' : 'scale(1)'};
`;
