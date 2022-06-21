import { useNavigate } from 'react-router-dom';
import * as S from './style';
import RegisterForm from '../../feature/auth/RegisterForm';
import { registerUser } from '../../apis/auth';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (email, fullName, password) => {
    const { token } = await registerUser(email, fullName, password);

    if (token) {
      alert('회원가입이 성공적으로 완료되었습니다.');
      navigate('/login');
    }
  };

  return (
    <S.RegisterPageWrapper>
      <S.PlacedLogo type="skyblue" />
      <RegisterForm onSubmit={handleRegister} />
    </S.RegisterPageWrapper>
  );
};

export default RegisterPage;
