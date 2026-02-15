import styled from 'styled-components';
import bgImg from '@/assets/images/home/MainBgImg.webp';

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

  background-image: url(${bgImg});
  background-size: cover; /* 이미지가 요소를 꽉 채우도록 */
  background-position: center; /* 이미지 중앙 정렬 */
  background-repeat: no-repeat;
`;

export const SectionBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
