import Proptypes from 'prop-types';
import apiClient from './api';

const LOGIN = '/login';
const LOGOUT = '/logout';
const SIGNUP = '/signup';

// 사용자가 이메일과 비밀번호로 서비스에 로그인합니다.
export const logIn = async (email = '', password = '') => {
  const { user, token } = await apiClient.post(`${LOGIN}`, {
    email,
    password,
  });

  return { user, token };
};

logIn.propTypes = {
  email: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
};

// 사용자가 이메일과 비밀번호로 서비스에 가입합니다.
export const signUp = async (email, fullName, password) => {
  const { user, token } = await apiClient.post(`${SIGNUP}`, {
    email,
    fullName,
    password,
  });

  return { user, token };
};

signUp.propTypes = {
  email: Proptypes.string.isRequired,
  fullName: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
};

// 사용자가 로그아웃 합니다.
// TO BE IMPLEMENTED : 뭘 구현해야 할 지 모르겠음
export const logOut = async () => {
  const data = await apiClient.post(`${LOGOUT}`);
};

// 사용자가 인증이 되었는지 확인합니다.
// 일단 구현해놓긴 했는데 무슨 용도로 쓰는 것인지 모르겠습니다...!
export const getAuthUser = async (JWTtoken) => {
  const user = await apiClient.get(`/auth-user`, {
    headers: {
      Authorization: `bearer ${JWTtoken}`,
    },
  });

  return user;
};

getAuthUser.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
};
