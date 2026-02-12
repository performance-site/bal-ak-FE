import styled from 'styled-components';

export const Background = styled.div`
  height: 100%;
  background-image: url('/backgroundImg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const SetListDetailContainer = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const SetListDetailInnerContainer = styled.section`
  width: 100%;
  padding: 0 2.4rem;
  margin-top: 5.3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
