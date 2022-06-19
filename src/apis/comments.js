import axios from 'axios';
import Proptypes from 'prop-types';

// 특정 포스트에 좋아요합니다.
export const postComments = async (JWTtoken, postId, comment = '') => {
  try {
    const comments = await axios.post(`/comments/create`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
      postId,
      comment,
    });

    if (comments.statusText === 'OK') {
      return comments;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

postComments.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  postId: Proptypes.string.isRequired,
  comment: Proptypes.string,
};

// 특정 포스트에 작성한 내 댓글을 삭제합니다.
// delete인데 왜 response를 Comment를 반환하지?
export const deleteComments = async (JWTtoken, id) => {
  try {
    const comments = await axios.delete(`/comments/delete`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
      id,
    });
    if (comments.statusText === 'OK') {
      return comments;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

deleteComments.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
};
