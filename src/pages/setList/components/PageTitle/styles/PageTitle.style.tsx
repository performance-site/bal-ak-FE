import styled, { DefaultTheme } from 'styled-components';

export const PageTitleContainer = styled.nav`
  width: 100%;
  padding: 0 2.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageTitlePContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PageTitleP = styled.p<{
  size?: string;
  weight?: number;
  color?: keyof DefaultTheme['colors'];
}>`
  width: 100%;
  font-size: ${({ size }) => size || '2rem'};
  font-weight: ${({ weight }) => weight || 600};
  color: ${({ theme, color }) => theme.colors[color || 'gray1']};
`;

export const PageTitleButton = styled.button`
  position: relative;
  padding: 0.4rem 0.9rem;
  cursor: pointer;
  border-radius: 18.33rem;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  background: ${({ theme }) => theme.gradients.setListPageTitleBackground};
  z-index: 1;
  font-size: 1.2rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 0.1rem;
    background: ${({ theme }) => theme.gradients.setListPageTitleBorder};
    -webkit-mask: ${({ theme }) => `
        linear-gradient(${theme.colors.white} 0 0) content-box,
        linear-gradient(${theme.colors.white} 0 0)
      `};
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const PageTitleButtonImg = styled.img`
  width: 0.481rem;
  height: auto;
`;
