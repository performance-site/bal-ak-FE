import { useMemo } from 'react';
import { useSession } from '../../../hooks/useSession';

const EXPIRATION_MIN = 10;

const useExpiringSession = (key: string, initialValue: string) => {
  const [storedData, setStoredData] = useSession(key, {
    value: initialValue,
    expires: Date.now() + EXPIRATION_MIN * 60 * 1000,
  });

  // 값을 불러올 때 만료 여부를 체크
  const currentValue = useMemo(() => {
    if (Date.now() > storedData.expires) {
      setStoredData({
        value: initialValue,
        expires: Date.now() + EXPIRATION_MIN * 60 * 1000,
      });
      return initialValue; // 만료되었으면 초기값 반환
    }
    return storedData.value;
  }, [storedData, initialValue]);

  // 값을 저장할 때 만료 시간을 갱신
  const setValue = (newValue: string) => {
    setStoredData({
      value: newValue,
      expires: Date.now() + EXPIRATION_MIN * 60 * 1000,
    });
  };

  return [currentValue, setValue] as const;
};

export default useExpiringSession;
