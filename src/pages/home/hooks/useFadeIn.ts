import { useEffect, useRef, useState } from 'react';

interface UseFadeInOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export const useFadeIn = (options: UseFadeInOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, delay]);

  return { elementRef, isVisible };
};
