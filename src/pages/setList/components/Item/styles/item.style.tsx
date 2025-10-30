import { styled, DefaultTheme } from 'styled-components';

export const ItemContainer = styled.div`
  width: 100%;
  height: 6.2rem;
  padding: 1.3rem 2.4rem 0.8rem 2.2rem;
  display: flex;
  gap: 1.3rem;
  z-index: 1;
`;

export const Circle = styled.div<{ isFirst?: boolean }>`
  position: relative;
  width: 2rem;
  height: 2rem;
  margin-top: 1.2rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.hexToRgba(theme.colors.purple5, 0.6)};
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: ${({ theme, isFirst }) =>
      isFirst ? theme.gradients.setListItemBackground : theme.colors.gray5};
  }
`;

export const ItemRightContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.656rem;
  cursor: pointer;
`;

export const ItemRightInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ItemPContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;

export const ItemP = styled.p<{
  size?: string;
  weight?: number;
  color?: keyof DefaultTheme['gradients'];
}>`
  font-size: ${({ size }) => size || '1.6rem'};
  font-weight: ${({ weight }) => weight || 600};
  color: transparent;
  background: ${({ theme, color }) =>
    theme.gradients[color ?? 'setListItemBackground']};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemDownloadImg = styled.img`
  width: 1.2rem;
  height: auto;
`;

export const ItemArrowImg = styled.img<{ isWhite?: boolean }>`
  width: 0.688rem;
  height: auto;
  margin-top: 0.133rem;

  ${({ isWhite }) =>
    isWhite &&
    `
      filter: brightness(0) invert(1);
    `}
`;
