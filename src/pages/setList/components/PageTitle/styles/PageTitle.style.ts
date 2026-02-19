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
  font-weight: 400;
  color: ${({ theme, color }) => theme.colors[color || 'black']};
`;
