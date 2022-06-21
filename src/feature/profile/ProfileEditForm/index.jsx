import PropTypes from 'prop-types';
import * as S from './style';
import useForm from '../../../hooks/useForm';
import { useAuthContext } from '../../../contexts/UserProvider';
import {
  PASSWORD_ISNILL_ERROR,
  PASSWORDCONFIRM_ISNILL_ERROR,
  PASSWORD_UNEQUAL_ERROR,
} from '../../../commons/constants/error';

const ProfileEditForm = ({ onSubmit, ...styles }) => {
  const { authUser } = useAuthContext();

  const { isLoading, errors, handleChange, handleSubmit, removeAll } = useForm({
    initialValues: {
      userName: authUser.userName,
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async ({ password }) => {
      await onSubmit(authUser.token, password);
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
            defaultValue={authUser.userName}
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
