import styled from 'styled-components';

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
