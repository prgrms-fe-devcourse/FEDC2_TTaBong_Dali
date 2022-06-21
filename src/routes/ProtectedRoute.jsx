import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/UserProvider';

const ProtectedRoute = ({ Component }) => {
  const { authUser } = useAuthContext();

  return authUser.isAuth ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
