import * as S from './styles/Header.style';
import HeaderTitle from './HeaderTitle';

function Header() {
  return (
    <div>
      <S.HeaderContainer>
        <HeaderTitle />
      </S.HeaderContainer>
    </div>
  );
}

export default Header;
