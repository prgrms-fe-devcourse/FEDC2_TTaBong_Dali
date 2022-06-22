import { useNavigate } from 'react-router-dom';
import * as S from './style';
import RegisterForm from '../../feature/auth/RegisterForm';
import Toast from '../../components/Toast';
import { registerUser } from '../../apis/auth';
import { REGISTER_ERROR } from '../../commons/constants/error';
import { REGISTER_SUCCESS } from '../../commons/constants/string';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (email, fullName, password) => {
    const { token } = await registerUser(email, fullName, password);

    if (token) {
      Toast.show(REGISTER_SUCCESS);
      navigate('/login');
    } else {
      Toast.show(REGISTER_ERROR);
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
