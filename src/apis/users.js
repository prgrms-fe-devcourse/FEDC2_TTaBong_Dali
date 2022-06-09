import axios from 'axios';
import Proptypes from 'prop-types';

// 사용자 목록을 불러옵니다.
export const getAllUsers = async (offset = 0, limit = 10) => {
  try {
    const allUsers = await axios.get(
      `/users/get-users?offset=${offset}&limit=${limit}`,
    );

    if (allUsers.status === 200) {
      return allUsers;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

getAllUsers.propTypes = {
  offset: Proptypes.number,
  limit: Proptypes.number,
};

// 현재 접속 중인 사용자 목록을 불러옵니다.
export const getOnlineUsers = async () => {
  try {
    const onlineUsers = await axios.get(`/users/online-users`);

    if (onlineUsers.statusText === 'OK') {
      return onlineUsers;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

// 특정 사용자 정보를 불러옵니다.
export const getSpecificUser = async (id) => {
  try {
    const specificUser = await axios.get(`/users/${id}`);

    if (specificUser.statusText === 'OK') {
      return specificUser;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

getSpecificUser.propTypes = {
  id: Proptypes.string.isRequired,
};

// 나의 프로필 이미지를 변경합니다.
export const postProfileImg = async (
  JWTtoken = '',
  isCover = false,
  image = '',
) => {
  try {
    const profileImg = await axios.post(`/users/upload-photo`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
      isCover,
      image,
    });

    if (profileImg.statusText === 'OK') {
      return profileImg;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

postProfileImg.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  isCover: Proptypes.bool,
  // image 받는 타입을 Binary로 받아야 하는데 어떻게?
};

export const postCoverImg = async (
  JWTtoken = '',
  isCover = true,
  image = '',
) => {
  try {
    const coverImg = await axios.post(`/users/upload-photo`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
      isCover,
      image,
    });

    if (coverImg.statusText === 'OK') {
      return coverImg;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

postCoverImg.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  isCover: Proptypes.bool,
};
