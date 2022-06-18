import React from 'react';
import * as S from './style';
import RegisterForm from '../../feature/auth/RegisterForm';
import { registerUser } from '../../apis/auth';

const RegisterPage = () => {
  return (
    <S.RegisterPageWrapper>
      <S.PlacedLogo type="skyblue" />
      <RegisterForm onSubmit={registerUser} />
    </S.RegisterPageWrapper>
  );
};

export default RegisterPage;
