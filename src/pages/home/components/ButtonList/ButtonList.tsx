import { ButtonListContainer } from './styles/ButtonList.style';
import inquiryBtn from '../../../../assets/images/home/inquiryBtn.svg';
import LocationBtn from '../../../../assets/images/home/LocationBtn.svg';
import StarBtn from '../../../../assets/images/home/StarBtn.svg';
import setListBtn from '../../../../assets/images/home/playBtn.svg';
import ButtonItem from './ButtonItem';

export const IconArray = [
  { src: StarBtn, info: '사전 예매', link: '/home/1' },
  { src: setListBtn, info: '셋리스트', link: '/home/1' },
  { src: LocationBtn, info: '공연 장소', link: '/home/1' },
  { src: inquiryBtn, info: '문의 사항', link: '/home/1' },
];

function ButtonList() {
  // console.log('aaa', typeof StarBtn);

  return (
    <ButtonListContainer>
      {IconArray.map((item, index) => (
        <ButtonItem key={index} {...item} />
      ))}
    </ButtonListContainer>
  );
}

export default ButtonList;
