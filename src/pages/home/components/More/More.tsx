import * as S from './styles/More.style';
import MoreButtonItem from './MoreButtonItem';

const IconArray = [
  { type: 'INSTAGRAM', name: '들불 인스타', url: '/home/1' },
  { type: 'YOUTUBE', name: '들불 윺튜브', url: '/home/1' },
  { type: 'GOODS', name: '들불 굿즈', url: '/home/1' },
  { type: 'EVENT_NOTICE', name: '정기공연 이벤트 홍보', url: '/home/1' },
];

function More() {
  return (
    <S.MoreBtnContainer>
      <S.MoreBtnTitle>More</S.MoreBtnTitle>
      <S.MoreButtonList>
        {IconArray.map((item, index) => (
          <MoreButtonItem key={index} {...item} />
        ))}
      </S.MoreButtonList>
    </S.MoreBtnContainer>
  );
}

export default More;
