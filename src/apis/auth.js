import apiClient from './api';
import { LOGIN, SIGNUP, LOGOUT } from '../commons/constants/apis';

// 사용자가 이메일과 비밀번호로 서비스에 로그인합니다.
export const loginUser = async (email, password) => {
  const { user, token } = await apiClient.post(`${LOGIN}`, {
    email,
    password,
  });

  return { user, token };
};

// 사용자가 이메일과 비밀번호로 서비스에 가입합니다.
export const registerUser = async (email, fullName, password) => {
  const { user, token } = await apiClient.post(`${SIGNUP}`, {
    email,
    fullName,
    password,
  });

  return { user, token };
};

// 사용자가 로그아웃 합니다.
// TO BE IMPLEMENTED : 뭘 구현해야 할 지 모르겠음
export const logoutUser = async () => {
  const data = await apiClient.post(`${LOGOUT}`);
};

// 사용자가 인증이 되었는지 확인합니다.
export const checkIsAuthUser = async (JWTtoken) => {
  const user = await apiClient.get(`/auth-user`, {
    headers: {
      Authorization: `bearer ${JWTtoken}`,
    },
  });

  return user;
};
