import apiClient from './api';

// 특정 포스트에 좋아요합니다.
export const postLike = async (JWTtoken, postId) => {
  const like = await apiClient.post(
    `/likes/create`,
    { postId },
    {
      headers: {
        Authorization: `Bearer ${JWTtoken}`,
      },
    },
  );

  return like;
};

// 특정 포스트에 좋아요한 것을 취소합니다.
// delete인데 왜 response를 Like를 반환하지?
export const deleteLike = async (JWTtoken, id) => {
  const like = await apiClient.delete(
    `/likes/delete`,

    {
      headers: {
        Authorization: `Bearer ${JWTtoken}`,
      },
      data: { id },
    },
  );

  return like;
};
