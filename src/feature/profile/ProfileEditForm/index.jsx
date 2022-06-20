import PropTypes from 'prop-types';
import * as S from './style';
import useForm from '../../../hooks/useForm';
import {
  PASSWORD_ISNILL_ERROR,
  PASSWORDCONFIRM_ISNILL_ERROR,
  PASSWORD_UNEQUAL_ERROR,
} from '../../../commons/constants/error';
import { PASSWORD_UPDATE_SUCCESS } from '../../../commons/constants/string';

const ProfileEditForm = ({ onSubmit, defaultValue, ...styles }) => {
  const { isLoading, errors, handleChange, handleSubmit, removeAll } = useForm({
    initialValues: {
      userName: defaultValue.userName,
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async ({ password }) => {
      const response = await onSubmit(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyYWFlZTk0ZTNmNTUyNzQ1MTBjYTA0MyIsImVtYWlsIjoid29vamVycnkzQG5hdmVyLmNvbSJ9LCJpYXQiOjE2NTU1NTg3NzJ9.FilLBV8W7l3OH-kWxIIJ4JBFLBjXFRSh_xoHMzLsJKg', // 임시 토큰
        password,
      );
      if (response === 'Password updated successfully.') {
        alert(PASSWORD_UPDATE_SUCCESS);
      }
    },
    validate: ({ password, passwordConfirm }) => {
      const errors = {};
      if (!password) errors.password = PASSWORD_ISNILL_ERROR;
      if (!passwordConfirm)
        errors.passwordConfirm = PASSWORDCONFIRM_ISNILL_ERROR;
      if (password !== passwordConfirm)
        errors.passwordConfirm = PASSWORD_UNEQUAL_ERROR;
      return errors;
    },
  });

  return (
    <S.ProfileEditFormContainer opacityType="0.7">
      <S.ProfileEditForm onSubmit={handleSubmit} {...styles}>
        <S.ProfileEditLabel>프로필 편집</S.ProfileEditLabel>
        <S.CenterWrapper>
          <S.EditInput
            version="edit"
            name="userName"
            inputType="이름"
            onChange={handleChange}
            errors={errors}
            removeAll={removeAll}
            defaultValue={defaultValue.userName}
            disabled
          />
          <S.EditInput
            version="edit"
            name="password"
            placeholder="대문자, 특수문자 포함 8자 이상"
            inputType="비밀번호"
            type="password"
            onChange={handleChange}
            errors={errors}
            removeAll={removeAll}
          />
          <S.EditInput
            version="edit"
            name="passwordConfirm"
            placeholder="대문자, 특수문자 포함 8자 이상"
            inputType="비밀번호 확인"
            type="password"
            onChange={handleChange}
            errors={errors}
            removeAll={removeAll}
          />
          <S.ProfileEditButton type="submit">프로필 변경</S.ProfileEditButton>
        </S.CenterWrapper>
      </S.ProfileEditForm>
    </S.ProfileEditFormContainer>
  );
};

export default ProfileEditForm;

ProfileEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
