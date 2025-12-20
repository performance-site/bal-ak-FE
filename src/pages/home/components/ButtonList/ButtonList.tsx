import { ButtonListContainer } from './styles/ButtonList.style';
import inquiryBtn from '../../../../assets/images/home/MsgImg.png';
import LocationBtn from '../../../../assets/images/home/LocationImg.png';
import StarBtn from '../../../../assets/images/home/Star.png';
import setListBtn from '../../../../assets/images/home/PlayImg.png';
import ButtonItem from './ButtonItem';
import { useHomeStore } from '../../../../store/homeStore/homeStore';

interface ButtonListProps {
  onScrollToKakaoMap?: () => void;
  isBookingClosed: boolean;
  onBookingClosedClick: () => void;
}

function ButtonList({
  onScrollToKakaoMap,
  isBookingClosed,
  onBookingClosedClick,
}: ButtonListProps) {
  const openchatUrl = useHomeStore((state) => state.homeData?.openchatUrl);

  const IconArray = [
    {
      src: StarBtn,
      info: '사전 예매',
      link: '/booking',
      onClickOverride: isBookingClosed ? onBookingClosedClick : undefined,
    },
    { src: setListBtn, info: '셋리스트', link: '/setlist' },
    { src: LocationBtn, info: '공연 장소', link: '' },
    { src: inquiryBtn, info: '문의 사항', link: openchatUrl || '' },
  ];

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
