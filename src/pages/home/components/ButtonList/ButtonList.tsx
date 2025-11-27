import { ButtonListContainer } from './styles/ButtonList.style';
import inquiryBtn from '../../../../assets/images/home/MsgImg.png';
import LocationBtn from '../../../../assets/images/home/LocationImg.png';
import StarBtn from '../../../../assets/images/home/Star.png';
import setListBtn from '../../../../assets/images/home/PlayImg.png';
import ButtonItem from './ButtonItem';

export const IconArray = [
  { src: StarBtn, info: '사전 예매', link: '/booking' },
  { src: setListBtn, info: '셋리스트', link: '/setlist' },
  { src: LocationBtn, info: '공연 장소', link: '' },
  { src: inquiryBtn, info: '문의 사항', link: '/home/1' },
];

interface ButtonListProps {
  onScrollToKakaoMap?: () => void;
}

function ButtonList({ onScrollToKakaoMap }: ButtonListProps) {
  return (
    <ButtonListContainer>
      {IconArray.map((item, index) => (
        <ButtonItem
          key={index}
          isFirst={index === 0}
          {...(item.src === LocationBtn && { onScrollToKakaoMap })}
          {...item}
        />
      ))}
    </ButtonListContainer>
  );
}

export default ButtonList;
