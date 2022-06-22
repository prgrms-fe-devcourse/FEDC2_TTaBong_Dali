import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/UserProvider';

const AuthRoute = ({ Component }) => {
  const { authUser } = useAuthContext();

  return authUser.isAuth ? <Navigate to="/" /> : <Component />;
};

export default AuthRoute;
