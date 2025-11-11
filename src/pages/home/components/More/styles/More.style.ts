import styled from 'styled-components';

export const MoreBtnContainer = styled.div`
  width: 90%;
  max-width: 34.5rem;
  height: 11.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 181.6rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const MoreButtonList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.75rem;

  > div:nth-child(3) {
    margin-right: -1.4rem; /* GOODS와 EVENT_NOTICE 사이 간격 좁히기 위해 음수 마진 사용함*/
  }
`;

export const MoreBtnTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
`;
