import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './style';
import useForm from '../../../hooks/useForm';
import {
  USERNAME_ISNILL_ERRROR,
  ID_ISNILL_ERROR,
  PASSWORD_ISNILL_ERROR,
  PASSWORD_UNEQUAL_ERROR,
  USERNAME_LEN_ERROR,
} from '../../../commons/constants/error';

const RegisterForm = ({ onSubmit }) => {
  const { isLoading, errors, handleChange, handleSubmit, removeAll } = useForm({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async ({ email, userName, password }) => {
      await onSubmit(email, userName, password);
    },
    validate: ({ userName, email, password, passwordConfirm }) => {
      const errors = {};
      if (userName.length > 7) errors.userName = USERNAME_LEN_ERROR;
      if (!userName) errors.userName = USERNAME_ISNILL_ERRROR;
      if (!email) errors.email = ID_ISNILL_ERROR;
      if (!password) errors.password = PASSWORD_ISNILL_ERROR;
      if (!passwordConfirm) errors.passwordConfirm = PASSWORD_ISNILL_ERROR;
      if (password !== passwordConfirm)
        errors.passwordConfirm = PASSWORD_UNEQUAL_ERROR;
      return errors;
    },
  });

  return (
    <S.RegisterForm onSubmit={handleSubmit}>
      <S.RegisterInput
        name="userName"
        type="text"
        inputType="이름"
        onChange={handleChange}
        errors={errors}
        removeAll={removeAll}
      />
      <S.RegisterInput
        name="email"
        type="email"
        inputType="이메일"
        onChange={handleChange}
        errors={errors}
        removeAll={removeAll}
      />
      <S.RegisterInput
        name="password"
        type="password"
        inputType="비밀번호"
        onChange={handleChange}
        errors={errors}
        removeAll={removeAll}
      />
      <S.RegisterInput
        name="passwordConfirm"
        type="password"
        inputType="비밀번호 확인"
        onChange={handleChange}
        errors={errors}
        removeAll={removeAll}
      />
      <S.RegisterButton type="submit" version="yellow">
        SIGN UP
      </S.RegisterButton>
      <Link to="/">
        <S.Nav>메인화면으로 가기</S.Nav>
      </Link>
    </S.RegisterForm>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
