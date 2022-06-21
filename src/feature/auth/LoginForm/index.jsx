import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './style';
import useForm from '../../../hooks/useForm';
import {
  ID_ISNILL_ERROR,
  PASSWORD_ISNILL_ERROR,
} from '../../../commons/constants/error';

const LoginForm = ({ onSubmit }) => {
  const { isLoading, errors, handleChange, handleSubmit, removeAll } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password }) => {
      await onSubmit(email, password);
    },
    validate: ({ email, password }) => {
      const errors = {};
      if (!email) errors.email = ID_ISNILL_ERROR;
      if (!password) errors.password = PASSWORD_ISNILL_ERROR;
      return errors;
    },
  });

  return (
    <S.LoginForm onSubmit={handleSubmit}>
      <S.LoginInput
        name="email"
        type="email"
        inputType="이메일"
        onChange={handleChange}
        errors={errors}
        removeAll={removeAll}
      />
      <S.LoginInput
        name="password"
        type="password"
        inputType="비밀번호"
        onChange={handleChange}
        errors={errors}
        removeAll={removeAll}
      />
      <S.NavContainer>
        <Link to="/">
          <S.Nav>메인화면으로 가기</S.Nav>
        </Link>
        <S.NavDivider>|</S.NavDivider>
        <Link to="/register">
          <S.Nav>회원가입</S.Nav>
        </Link>
      </S.NavContainer>
      <S.LoginButton type="submit" version="yellow">
        LOG IN
      </S.LoginButton>
    </S.LoginForm>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
