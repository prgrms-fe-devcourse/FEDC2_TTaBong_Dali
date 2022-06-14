import PropTypes from 'prop-types';
import * as S from './style';

const RegisterForm = ({ onSubmit }) => {
  return (
    <S.RegisterForm onSubmit={onSubmit}>
      <S.RegisterInput inputType="이름" />
      <S.RegisterInput inputType="아이디" />
      <S.RegisterInput inputType="비밀번호" />
      <S.RegisterInput inputType="비밀번호 확인" />
      <S.RegisterButton type="yellow">LOG IN</S.RegisterButton>
      <S.Nav>메인화면으로 가기</S.Nav>
    </S.RegisterForm>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
