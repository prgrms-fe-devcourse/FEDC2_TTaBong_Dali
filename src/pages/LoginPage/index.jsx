import React from 'react';
import * as S from './style';
import LoginForm from '../../feature/auth/LoginForm';
import { loginUser } from '../../apis/auth';

const LoginPage = () => {
  return (
    <S.LoginPageWrapper>
      <S.PlacedLogo type="skyblue" />
      <LoginForm onSubmit={loginUser} />
    </S.LoginPageWrapper>
  );
};

export default LoginPage;
