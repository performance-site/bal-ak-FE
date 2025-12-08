import { useEffect, useState, useCallback } from 'react';

interface UseFadeInOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export const useFadeIn = (options: UseFadeInOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  const onRefChange = useCallback((node: HTMLElement | null) => {
    if (node) {
      setElement(node);
    }
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            // 딜레이 없으면 바로 보여줌
            setIsVisible(true);
          }
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, threshold, rootMargin, delay]);

  return { elementRef: onRefChange, isVisible };
};
