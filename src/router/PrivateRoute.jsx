import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks';

export const PrivateRoute = ({ children }) => {
  const { user } = useAuthStore();

  return !user?.id ? <Navigate to="/auth/login" /> : children;
};
