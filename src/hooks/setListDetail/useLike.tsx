import { useState } from 'react';
import { useSession } from '../useSession';

export const useLike = (storageKey: string, initialLikes: number) => {
  const [liked, setLiked] = useSession<boolean>(`${storageKey}_liked`, false);
  const [likes, setLikes] = useSession<number>(
    `${storageKey}_count`,
    initialLikes,
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleLike = () => {
    const newLiked = !liked;
    const newLikes = newLiked ? likes + 1 : likes - 1;

    setLiked(newLiked);
    setLikes(newLikes);

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);
  };

  return { liked, likes, toggleLike, isAnimating };
};
