import Proptypes from 'prop-types';
import apiClient from './api';

const USERS = `/users`;

// 사용자 목록을 불러옵니다.
export const getAllUsers = async (offset = 0, limit = 100) => {
  const allUsers = await apiClient.get(
    `${USERS}/get-users?offset=${offset}&limit=${limit}`,
  );

  return allUsers;
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
export const postProfileImg = async (JWTtoken, formData) => {
  const profileImg = await apiClient.post(`${USERS}/upload-photo`, formData, {
    headers: {
      Authorization: `bearer ${JWTtoken}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  return profileImg;
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
