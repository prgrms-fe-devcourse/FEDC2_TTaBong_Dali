import axios from 'axios';
import Proptypes from 'prop-types';

// 나의 정보를 변경합니다.
export const putInfo = async (JWTtoken, fullName = '', username = '') => {
  try {
    const Info = await axios.put(`/settings/update-user`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
      username,
      fullName,
    });

    if (Info.statusText === 'OK') {
      return Info;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

putInfo.propTypes = {
  fullName: Proptypes.string.isRequired,
  username: Proptypes.string.isRequired,
};

// 내 계정 비밀번호를 변경합니다.
export const putPassword = async (JWTtoken, password = '') => {
  try {
    const newPassword = await axios.put(`/settings/update-password`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
      password,
    });

    if (newPassword.statusText === 'OK') {
      return newPassword;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

putPassword.propTypes = {
  password: Proptypes.string.isRequired,
};
