import axios from 'axios';

// 사용자를 검색합니다.
export const searchUser = async (query = '') => {
  try {
    const user = await axios.get(`/search/users/${query}`);

    if (user.statusText === 'OK') {
      return user;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

// 포스트와 사용자를 검색합니다.
export const searchAll = async (query = '') => {
  try {
    const userAndPost = await axios.get(`/search/all/${query}`);

    if (userAndPost.statusText === 'OK') {
      return userAndPost;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};
