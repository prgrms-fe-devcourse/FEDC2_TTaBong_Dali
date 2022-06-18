import PropTypes from 'prop-types';
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
    onSubmit: ({ email, password }) => {
      onSubmit(email, password);
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
        inputType="아이디"
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
        <S.Nav>아이디 / 비밀번호 찾기</S.Nav>
        <S.NavDivider>|</S.NavDivider>
        <S.Nav>회원가입</S.Nav>
      </S.NavContainer>
      <S.LoginButton type="submit" version="yellow">
        LOG IN
      </S.LoginButton>
      <S.Nav>메인화면으로 가기</S.Nav>
    </S.LoginForm>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
