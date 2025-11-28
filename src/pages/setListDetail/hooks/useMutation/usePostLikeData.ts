import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { postLike } from '../../../../apis/setListDetail/like';
import { useSession } from '../../../../hooks/useSession';
import type { LikeResponse } from '../../../../types/setListDetail/like.type';

export const usePostLikeData = (
  performanceSongId: number,
  initialLikes: number,
) => {
  const [liked, setLiked] = useSession<boolean>(
    `track_${performanceSongId}_liked`,
    false,
  );

  const [likes, setLikes] = useSession<number>(
    `track_${performanceSongId}_likes`,
    initialLikes,
  );

  const [isAnimating, setIsAnimating] = useState(false);

  const mutation = useMutation<LikeResponse, Error, boolean>({
    mutationFn: (newLiked) =>
      postLike(performanceSongId, newLiked).then((res) => res.data),

    onMutate: (newLiked) => {
      const newLikes = newLiked ? likes + 1 : likes - 1;

      setLiked(newLiked);
      setLikes(newLikes);
      setIsAnimating(true);
    },

    onSuccess: (data) => {
      const { likes: serverLikes } = data.data;

      setLikes(serverLikes);
    },

    onError: (_error, newLiked) => {
      const rollbackLikes = newLiked ? likes - 1 : likes + 1;

      setLiked(!newLiked);
      setLikes(rollbackLikes);
    },

    onSettled: () => {
      setTimeout(() => setIsAnimating(false), 200);
    },
  });

  const toggleLike = () => {
    const newLiked = !liked;
    mutation.mutate(newLiked);
  };

  return {
    liked,
    likes,
    isAnimating,
    toggleLike,
    isLoading: mutation.isPending,
  };
};
