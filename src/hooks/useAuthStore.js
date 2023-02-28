import { useDispatch, useSelector } from 'react-redux';
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
  useLoginMutation,
} from '../store';

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector(state => state.auth);
  const [login, { isLoading, error, data }] = useLoginMutation();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());

    try {
      login({ email, password });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(onLogin(data.user));
    } catch (error) {
      dispatch(onLogout(error.response.data.msg));

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 180);
    }
  };

  // const startLogout = () => {
  //   localStorage.clear();
  //   dispatch(onLogoutCalendar());
  //   dispatch(onLogout());
  // };

  return {
    // Properties
    status,
    user,
    errorMessage,

    // Methods
    startLogin,
  };
};
