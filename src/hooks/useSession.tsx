import { useState, useEffect } from 'react';

export function useSession<T>(key: string, initialValue: T) {
  const isBrowser = typeof window !== 'undefined';

  const [value, setValue] = useState<T>(() => {
    if (!isBrowser) return initialValue;

    try {
      const storedValue = window.sessionStorage.getItem(key);
      if (storedValue !== null) {
        return JSON.parse(storedValue) as T;
      }
      return initialValue;
    } catch (error) {
      console.warn(`useSession 읽기 실패: "${key}"`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (!isBrowser) return;
    try {
      const serialized = JSON.stringify(value);
      window.sessionStorage.setItem(key, serialized);
    } catch (error) {
      console.warn(`useSession 저장 실패: "${key}"`, error);
    }
  }, [key, value, isBrowser]);

  return [value, setValue] as const;
}
