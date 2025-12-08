import styled from 'styled-components';

interface MoreBtnContainerProps {
  $isVisible: boolean;
}

export const MoreBtnContainer = styled.div<MoreBtnContainerProps>`
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
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0.3)};
  transform: translateX(-50%) translateY(${({ $isVisible }) => ($isVisible ? '0' : '10px')});
  transition: opacity 1s ease-out, transform 1s ease-out;
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
