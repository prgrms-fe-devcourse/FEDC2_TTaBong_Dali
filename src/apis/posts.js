import axios from 'axios';
import Proptypes from 'prop-types';

// 특정 채널의 포스트 목록을 불러옵니다.
// 프로그래머스 스쿨 API 문서와 다른 점: channels => channel (projects 슬랙 참조)
export const getChannelPosts = async (channelId, offset = 0, limit = 10) => {
  try {
    const channelPosts = await axios.get(
      `/posts/channel/${channelId}?offset=${offset}&limit=${limit}`,
    );

    if (channelPosts.statusText === 'OK') {
      return channelPosts;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

getChannelPosts.propTypes = {
  channelId: Proptypes.string.isRequired,
  offset: Proptypes.number,
  limit: Proptypes.number,
};

// 특정 사용자의 포스트 목록을 불러옵니다.
export const getAuthorPosts = async (authorId, offset = 0, limit = 10) => {
  try {
    const AuthorPosts = await axios.get(
      `/posts/channels/${authorId}?offset=${offset}&limit=${limit}`,
    );

    if (AuthorPosts.statusText === 'OK') {
      return AuthorPosts;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

getAuthorPosts.propTypes = {
  authorId: Proptypes.string.isRequired,
  offset: Proptypes.number,
  limit: Proptypes.number,
};

// 특정 채널에 포스트를 작성합니다.
export const createPosts = async (
  JWTtoken,
  channelId,
  title = '',
  image = null,
) => {
  try {
    const newPost = await axios.post(`/posts/create`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
      channelId,
      title,
      image,
    });

    if (newPost.statusText === 'OK') {
      return newPost;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

createPosts.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  channelId: Proptypes.string.isRequired,
  title: Proptypes.string,
  // image : Binary 형식
};

// 특정 포스트의 정보를 불러옵니다. !의문점: 불러오는 건데 왜 post일까? 불러오는 거라 네이밍을 get으로함
export const getPost = async (postId) => {
  try {
    const channelPosts = await axios.post(`/posts/${postId}`);

    if (channelPosts.statusText === 'OK') {
      return channelPosts;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

getPost.propTypes = {
  postId: Proptypes.string.isRequired,
};

// 내가 작성한 포스트를 수정합니다.
export const putPost = async (
  JWTtoken,
  postId,
  channelId,
  title = '',
  image = null,
  imagePublicId = '',
) => {
  await axios.put(`/posts/update`, {
    headers: {
      Authorization: `bearer ${JWTtoken}`,
    },
    postId,
    channelId,
    title,
    image,
    imageToDeletePublicId: imagePublicId, // 이미지 삭제
  });
};

putPost.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  postId: Proptypes.string.isRequired,
  channelId: Proptypes.string.isRequired,
  title: Proptypes.string,
  // image : Binary 어떻게?
  imagePublicId: Proptypes.string,
};

// 내가 작성한 포스트를 삭제합니다.
export const deletePost = async (JWTtoken, id) => {
  await axios.delete(`/posts/delete`, {
    headers: {
      Authorization: `bearer ${JWTtoken}`,
    },
    id,
  });
};

deletePost.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
};
