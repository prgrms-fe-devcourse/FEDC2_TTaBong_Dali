import { useNavigate } from 'react-router-dom';
import * as S from './style';
import LoginForm from '../../feature/auth/LoginForm';
import { loginUser } from '../../apis/auth';
import { setCookie } from '../../utils/cookies';
import { useAuthContext } from '../../contexts/UserProvider';

const LoginPage = () => {
  const { dispatch } = useAuthContext();

  const handleLogin = async (email, password) => {
    const { user, token } = await loginUser(email, password);

    await dispatch({ type: 'LOGIN_USER', userName: user.fullName, token });

    setCookie(
      'user',
      { userName: user.fullName, token },
      {
        path: '/',
        maxAge: 60 * 60 * 9, // 9시간
      },
    );

    // 라우팅
  };

  return (
    <S.LoginPageWrapper>
      <S.PlacedLogo type="skyblue" />
      <LoginForm onSubmit={handleLogin} />
    </S.LoginPageWrapper>
  );
};

export default LoginPage;
