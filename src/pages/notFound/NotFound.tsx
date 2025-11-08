import { useNavigate } from 'react-router-dom';
import * as S from './styles/NotFound.style';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.NotFoundContainer>
        <S.NotFoundHeader>
          <S.MainText>404 Not Found</S.MainText>
          <S.SubText>페이지 오류</S.SubText>
        </S.NotFoundHeader>
        <S.NotFoundContent>
          <S.NotText>
            *요청하신 페이지를 찾을 수 없습니다. <br />
            메인으로 돌아갑니다.
          </S.NotText>
          <S.BackBox onClick={() => navigate('/')}>
            <S.BackText>메인으로</S.BackText>
          </S.BackBox>
        </S.NotFoundContent>
      </S.NotFoundContainer>
    </>
  );
};

export default NotFound;
