import { useDispatch, useSelector } from 'react-redux';
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
  onSetErrorMessage,
  useGetNewTokenMutation,
  useLoginMutation,
} from '../store';

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage, isLoadingLogin } = useSelector(
    state => state.auth
  );
  const [login] = useLoginMutation();
  const [getNewToken] = useGetNewTokenMutation();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());

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

  const setErrorMessage = errorMessage => {
    dispatch(onSetErrorMessage(errorMessage));

    setTimeout(() => {
      dispatch(clearErrorMessage());
    }, 2100);
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    // Properties
    status,
    user,
    errorMessage,
    isLoadingLogin,

    // Methods
    startLogin,
    checkAuthToken,
    startLogout,
    setErrorMessage,
  };
};
