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

  // 모바일 여부 판별
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  };

  return (
    <ButtonListContainer>
      {IconArray.map((item, index) => (
        <ButtonItem
          key={index}
          isFirst={index === 0}
          {...(item.src === LocationBtn && { onScrollToKakaoMap })}
          {...(item.src === InquiryBtn && {
            onClickOverride: () => {
              if (isMobile()) {
                // 모바일: SMS 실행
                window.location.href = item.link;
              } else if (phoneNumber) {
                // PC: 클립보드 복사
                navigator.clipboard.writeText(phoneNumber).then(() => {
                  alert(`문의 번호가 복사되었습니다!`);
                });
              }
            },
          })}
          {...item}
        />
      ))}
    </ButtonListContainer>
  );
}

export default ButtonList;
