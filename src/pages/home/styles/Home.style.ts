import styled from 'styled-components';
import bgImg from '@/assets/images/home/MainBgImg.webp';

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;

  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;

  width: 100%;
`;

export const SectionBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
