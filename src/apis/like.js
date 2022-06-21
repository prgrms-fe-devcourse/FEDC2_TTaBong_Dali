import axios from 'axios';
import Proptypes from 'prop-types';
import apiClient from './api';

// 특정 포스트에 좋아요합니다.
export const postLike = async (JWTtoken, postId) => {
  try {
    const like = await apiClient.post(`/likes/create`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
      postId,
    });

    if (like.statusText === 'OK') {
      return like;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

postLike.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  postId: Proptypes.string.isRequired,
};

// 특정 포스트에 좋아요한 것을 취소합니다.
// delete인데 왜 response를 Like를 반환하지?
export const deleteLike = async (JWTtoken, id) => {
  try {
    const like = await apiClient.delete(`/likes/delete`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
      id,
    });
    if (like.statusText === 'OK') {
      return like;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

deleteLike.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
};
