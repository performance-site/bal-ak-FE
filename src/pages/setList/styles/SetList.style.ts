import styled from 'styled-components';

export const SetListContainer = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.4rem;
  overflow: hidden;
`;

export const ListBar = styled.div`
  width: 0.1rem;
  height: 100%;
  position: absolute;
  top: 11.5rem;
  left: 3rem;
  background: ${({ theme }) => theme.colors.gray3};
  box-shadow: 0 0 0.4rem 0
    ${({ theme }) => theme.hexToRgba(theme.colors.purple2, 0.18)};
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
