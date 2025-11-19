import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translate(-50%, 0px); 
  }
  50% {
    transform: translate(-50%, -10px); 
  }
  100% {
    transform: translate(-50%, 0px); 
  }
`;

export const DropDownContainer = styled.div`
  width: 7.9rem;
  height: 2.8rem;
  position: absolute;
  top: 65rem;
  left: 50%;
  transform: translatex(-50%);

  animation: ${float} 3s ease-in-out infinite alternate;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
