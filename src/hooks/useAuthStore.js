import { useDispatch, useSelector } from 'react-redux';
import {
  clearErrorMessage,
  onLogin,
  onLogout,
  useGetNewTokenMutation,
  useLoginMutation,
} from '../store';

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector(state => state.auth);
  const [login] = useLoginMutation();
  const [getNewToken] = useGetNewTokenMutation();

  const startLogin = async ({ email, password }) => {
    try {
      const { data, error } = await login({ email, password });
      if (error) throw error;

      localStorage.setItem('token', data?.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin(data?.user));
    } catch (error) {
      dispatch(onLogout(error.data.message));

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 2100);
    }
  };

  const checkAuthToken = async () => {
    const tokenLs = localStorage.getItem('token');
    if (!tokenLs) return dispatch(onLogout());

    try {
      const { data } = await getNewToken(tokenLs);
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin(data.user));
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    // dispatch();
    dispatch(onLogout());
  };

  return {
    // Properties
    status,
    user,
    errorMessage,

    // Methods
    startLogin,
    checkAuthToken,
    startLogout,
  };
};
