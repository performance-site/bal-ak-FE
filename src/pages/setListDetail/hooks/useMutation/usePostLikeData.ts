import { useMutation } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
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

  const [likes, setLikes] = useState<number>(initialLikes);

  const [isAnimating, setIsAnimating] = useState(false);

  const mutation = useMutation<LikeResponse, Error, boolean>({
    mutationFn: async (newLiked) => {
      const res = await postLike(performanceSongId, newLiked);
      return res.data;
    },

    onMutate: (newLiked) => {
      setLiked(newLiked);
      setLikes((prev) => (newLiked ? prev + 1 : prev - 1));
      setIsAnimating(true);
    },

    onSuccess: (response) => {
      const { likes: serverLikes } = response.data;
      setLikes(serverLikes);
    },

    onError: (_err, newLiked) => {
      setLiked(!newLiked);
      setLikes((prev) => (newLiked ? prev - 1 : prev + 1));
    },

    onSettled: () => {
      setTimeout(() => setIsAnimating(false), 200);
    },
  });

  useEffect(() => {
    setLikes(initialLikes);
  }, [initialLikes]);

  const toggleLike = () => {
    mutation.mutate(!liked);
  };

  return {
    liked,
    likes,
    isAnimating,
    toggleLike,
    isLoading: mutation.isPending,
  };
};
