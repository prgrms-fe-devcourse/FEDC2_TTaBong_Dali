import axios from 'axios';
import Proptypes from 'prop-types';

// 사용자가 이메일과 비밀번호로 서비스에 로그인합니다.
export const logIn = async (email = '', password = '') => {
  try {
    const user = await axios.post(`/login`, {
      email,
      password,
    });
    if (user.status === 200) {
      return user;
    }

    throw new Error(user);
  } catch (e) {
    console.error(e);
  }

  return null;
};

logIn.propTypes = {
  email: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
};

// 사용자가 이메일과 비밀번호로 서비스에 가입합니다.
export const signUp = async (email, fullName, password) => {
  try {
    const newUser = await axios.post(`/signup`, {
      email,
      fullName,
      password,
    });

    if (newUser.status === 200) {
      return newUser;
    }

    throw new Error(newUser);
  } catch (e) {
    console.error(e);
  }

  return null;
};

signUp.propTypes = {
  email: Proptypes.string.isRequired,
  fullName: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
};

// 사용자가 로그아웃 합니다.
// TO BE IMPLEMENTED : 뭘 구현해야 할 지 모르겠음
export const logOut = async () => {
  try {
    const newUser = await axios.post(`/logout`);

    if (newUser.status === 200) {
      return newUser;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

// 사용자가 인증이 되었는지 확인합니다.
// 일단 구현해놓긴 했는데 무슨 용도로 쓰는 것인지 모르겠습니다...!
export const getAuthUser = async (JWTtoken) => {
  try {
    const user = await axios.get(`/auth-user`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
    });

    if (user.statusText === 'OK') {
      return user;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

getAuthUser.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
};
