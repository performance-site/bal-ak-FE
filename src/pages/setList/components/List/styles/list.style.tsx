import styled from 'styled-components';

export const ListContainer = styled.div`
  margin-top: 1.2rem;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
