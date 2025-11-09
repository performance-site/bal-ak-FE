import styled from 'styled-components';
import MoreButtonItem from './MoreButtonItem';

const IconArray = [
  { type: 'INSTAGRAM', name: '들불 인스타', url: '/home/1' },
  { type: 'YOUTUBE', name: '들불 윺튜브', url: '/home/1' },
  { type: 'GOODS', name: '들불 굿즈', url: '/home/1' },
  { type: 'EVENT_NOTICE', name: '정기공연 이벤트 홍보', url: '/home/1' },
];

function More() {
  return (
    <MoreBtnContainer>
      <MoreBtnTitle>More</MoreBtnTitle>
      <MoreButtonList>
        {IconArray.map((item, index) => (
          <MoreButtonItem key={index} {...item} />
        ))}
      </MoreButtonList>
    </MoreBtnContainer>
  );
}

export default More;

const MoreBtnContainer = styled.div`
  width: 34.5rem;
  height: 11.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 179.6rem;
  left: 50%;
  transform: translateX(-50%);
`;

const MoreButtonList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.75rem;
`;

const MoreBtnTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
`;
