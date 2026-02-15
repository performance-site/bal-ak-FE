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

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
`;

export const SectionBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
