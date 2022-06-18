import Proptypes from 'prop-types';
import apiClient from './api';

const USERS = `/users`;

// 사용자 목록을 불러옵니다.
export const getUserList = async (offset = 0, limit = 10) => {
  const userList = await apiClient.get(
    `${USERS}/get-users?offset=${offset}&limit=${limit}`,
  );

  return userList;
};

getUserList.propTypes = {
  offset: Proptypes.number,
  limit: Proptypes.number,
};

// 모든 사용자 목록을 불러옵니다.
export const getAllUsers = async () => {
  const allUserList = [];

  let offset = 0;
  const limit = 10;
  const TEMP_OFFSET_LIMIT = 100;
  while (offset < TEMP_OFFSET_LIMIT) {
    // eslint-disable-next-line no-await-in-loop
    const userList = await apiClient.get(
      `${USERS}/get-users?offset=${offset}&limit=${limit}`,
    );

    if (userList.length === 0) break;

    allUserList.push(...userList);
    offset += limit;
  }

  return allUserList;
};

// 현재 접속 중인 사용자 목록을 불러옵니다.
export const getOnlineUsers = async () => {
  const onlineUsers = await apiClient.get(`${USERS}/online-users`);

  return onlineUsers;
};

// 특정 사용자 정보를 불러옵니다.
export const getSpecificUser = async (id) => {
  const specificUser = await apiClient.get(`${USERS}/${id}`);

  return specificUser;
};

getSpecificUser.propTypes = {
  id: Proptypes.string.isRequired,
};

// TE BOE IMPLEMENTED
// 나의 프로필 이미지를 변경합니다.
export const postProfileImg = async (
  JWTtoken = '',
  isCover = false,
  image = '',
) => {
  try {
    const profileImg = await apiClient.post(`${USERS}/upload-photo`, {
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

// TE BOE IMPLEMENTED
export const postCoverImg = async (
  JWTtoken = '',
  isCover = true,
  image = '',
) => {
  try {
    const coverImg = await apiClient.post(`${USERS}/upload-photo`, {
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
