import {
  useMemo,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react';

import { getCookie } from '../utils/cookies';

const UserContext = createContext();
export const useAuthContext = () => useContext(UserContext);

const initialUserState = {
  isAuth: false,
  userName: '',
  userId: '',
  token: '',
};

const userReducer = (_, action) => {
  switch (action.type) {
    case 'CHECK_USER':
      return {
        isAuth: action.isAuth,
        userName: action.userName,
        userId: action.userId,
        token: action.token,
      };
    case 'LOGIN_USER':
      return {
        isAuth: true,
        userName: action.userName,
        userId: action.userId,
        token: action.token,
      };
    case 'LOGOUT_USER':
      return {
        isAuth: false,
        userName: '',
        userId: '',
        token: '',
      };
    default:
      throw new Error('Error');
  }
};

const UserProvider = ({ children }) => {
  const [authUser, dispatch] = useReducer(userReducer, initialUserState);

  useEffect(() => {
    const { userName, userId, token } = getCookie('user') || initialUserState;

    dispatch({
      type: 'CHECK_USER',
      isAuth: !!token,
      userId,
      userName,
      token,
    });
  }, []);

  const UserContextProviderValue = useMemo(
    () => ({ authUser, dispatch }),
    [authUser, dispatch],
  );

  return (
    <UserContext.Provider value={UserContextProviderValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
