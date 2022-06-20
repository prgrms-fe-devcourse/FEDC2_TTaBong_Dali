import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/UserProvider';

const AuthRoute = ({ Component }) => {
  const { user } = useAuthContext();

  return user.isAuth ? <Navigate to="/" /> : <Component />;
};

export default AuthRoute;
