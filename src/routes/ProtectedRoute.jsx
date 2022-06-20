import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/UserProvider';

const ProtectedRoute = ({ Component }) => {
  const { user } = useAuthContext();
  console.log(user.isAuth);

  return user.isAuth ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
