import { useState, useEffect, useRef, TouchEvent } from 'react';

type UseAutoSliderProps = {
  length: number;
  interval?: number;
  minSwipeDistance?: number;
};

export const useAutoSlider = ({
  length,
  interval = 5000,
  minSwipeDistance = 50,
}: UseAutoSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  // 자동 슬라이드
  useEffect(() => {
    if (length === 0) return;
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [currentIndex, length, interval]);

  // 터치 이벤트 핸들러
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return {
    currentIndex,
    touchHandlers: {
      onTouchStart,
      onTouchEnd,
    },
  };
};
