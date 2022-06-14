import PropTypes from 'prop-types';
import * as S from './style';

const LoginForm = ({ onSubmit }) => {
  return (
    <S.LoginForm onSubmit={onSubmit}>
      <S.LoginInput inputType="아이디" />
      <S.LoginInput inputType="비밀번호" />
      <S.NavContainer>
        <S.Nav>아이디 / 비밀번호 찾기</S.Nav>
        <S.Nav>회원가입</S.Nav>
      </S.NavContainer>
      <S.LoginButton type="yellow">LOG IN</S.LoginButton>
      <S.Nav>메인화면으로 가기</S.Nav>
    </S.LoginForm>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
