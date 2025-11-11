import DropDown from '../../../../assets/images/home/DropDown/DropDownBtn.png';
import * as S from './styles/DropDownBtn.style';

interface DropDownBtnProps {
  onScrollToPoster?: () => void;
}

function DropDownBtn({ onScrollToPoster }: DropDownBtnProps) {
  const handleClick = () => {
    console.log('click');
    onScrollToPoster?.(); // 부모에서 받은 함수 실행
  };
  return (
    <S.DropDownContainer onClick={handleClick}>
      <img src={DropDown} alt="" />
    </S.DropDownContainer>
  );
}

export default DropDownBtn;
