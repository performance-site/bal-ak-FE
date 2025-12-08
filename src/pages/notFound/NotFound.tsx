import { useEffect } from 'react';
import useNavigation from '../../hooks/useNavigation';
import * as S from './styles/NotFound.style';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - 들불';
  }, []);

  const { goTo } = useNavigation();

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
          <S.BackBox onClick={() => goTo('/')}>
            <S.BackText>메인으로</S.BackText>
          </S.BackBox>
        </S.NotFoundContent>
      </S.NotFoundContainer>
    </>
  );
};

export default NotFound;
