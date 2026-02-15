import { ButtonListContainer } from './styles/ButtonList.style';
import InquiryBtn from '../../../../assets/images/home/MsgImg.webp';
import LocationBtn from '../../../../assets/images/home/LocationImg.webp';
import StarBtn from '../../../../assets/images/home/StarImg.webp';
import SetListBtn from '../../../../assets/images/home/PlayImg.webp';
import ButtonItem from './ButtonItem';
import { useHomeStore } from '../../../../store/homeStore/homeStore';

interface ButtonListProps {
  onScrollToKakaoMap?: () => void;
}

function ButtonList({ onScrollToKakaoMap }: ButtonListProps) {
  const preSaleFormUrl = useHomeStore(
    (state) => state.homeData?.preSaleFormUrl,
  );
  const phoneNumber = useHomeStore((state) => state.homeData?.phoneNumber);

  const IconArray = [
    { src: StarBtn, info: '사전 예매', link: preSaleFormUrl || '' },
    { src: SetListBtn, info: '셋리스트', link: '/setlist' },
    { src: LocationBtn, info: '공연 장소', link: '' },
    {
      src: InquiryBtn,
      info: '문의 사항',
      link: phoneNumber ? `sms:${phoneNumber}` : '',
    },
  ];

  return (
    <ButtonListContainer>
      {IconArray.map((item, index) => (
        <ButtonItem
          key={index}
          isFirst={index === 0}
          {...(item.src === LocationBtn && { onScrollToKakaoMap })}
          {...(item.src === InquiryBtn &&
            item.link.startsWith('sms:') && {
              onClickOverride: () => {
                window.location.href = item.link;
              },
            })}
          {...item}
        />
      ))}
    </ButtonListContainer>
  );
}

export default ButtonList;
