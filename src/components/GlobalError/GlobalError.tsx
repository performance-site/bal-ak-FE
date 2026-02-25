import { useRouteError } from 'react-router-dom';
import { useEffect } from 'react';
import * as S from './styles/GlobalError.style';

const GlobalError = () => {
  const error = useRouteError();

  useEffect(() => {
    if (error instanceof Error) {
      const isChunkError =
        error.message.includes('fetch') ||
        error.stack?.includes('dynamic') ||
        error.message.includes('Load chunk');

      if (isChunkError) {
        // 이미 새로고침을 시도했는지 확인
        const hasReloaded = sessionStorage.getItem('chunk-error-reloaded');

        if (!hasReloaded) {
          sessionStorage.setItem('chunk-error-reloaded', 'true');
          window.location.reload();
        } else {
          console.error('파일 로드에 실패했습니다.');
        }
      }
    }
  }, [error]);

  return (
    <S.ErrorContainer>
      <S.MainText>페이지를 불러오는 중 문제가 발생했습니다.</S.MainText>
      <S.SubText>
        인터넷 연결을 확인하거나 잠시 후 다시 시도해 주세요.
      </S.SubText>
      <S.RetryBox
        onClick={() => {
          sessionStorage.removeItem('chunk-error-reloaded');
          window.location.reload();
        }}
      >
        <S.RetryText>새로고침</S.RetryText>
      </S.RetryBox>
    </S.ErrorContainer>
  );
};

export default GlobalError;
