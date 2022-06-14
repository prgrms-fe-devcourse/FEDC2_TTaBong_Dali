import PropTypes from 'prop-types';
import * as S from './style';

const RegisterForm = ({ onSubmit }) => {
  return (
    <S.RegisterForm onSubmit={onSubmit}>
      <S.RegisterInput type="text" inputType="이름" />
      <S.RegisterInput type="email" inputType="아이디" />
      <S.RegisterInput type="password" inputType="비밀번호" />
      <S.RegisterInput type="password" inputType="비밀번호 확인" />
      <S.RegisterButton version="yellow">LOG IN</S.RegisterButton>
      <S.Nav>메인화면으로 가기</S.Nav>
    </S.RegisterForm>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
